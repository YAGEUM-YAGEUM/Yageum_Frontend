'use client';

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useWebSocket } from '@/context/WebSocketContext';
import { getChatHistory, exitChatRoom } from '@/api/chat.api';

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #ffffff;
  border-radius: 8px;
`;

const Header = styled.div`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  text-align: center;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-top: none;
  border-bottom: none;
`;

const MessageWrapper = styled.div<{ isMine: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.isMine ? 'flex-end' : 'flex-start')};
  margin-bottom: 1rem;
`;

const MessageBubble = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;

const MessageContent = styled.div<{ isMine: boolean }>`
  background: ${(props) => (props.isMine ? '#007bff' : '#f1f1f1')};
  color: ${(props) => (props.isMine ? 'white' : 'black')};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  max-width: 70%;
  word-wrap: break-word;
`;

const MessageInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.75rem;
  color: #666;
`;

const ReadStatus = styled.span<{ isRead: boolean }>`
  color: ${(props) => (props.isRead ? '#34c759' : '#666')};
  font-size: 0.6rem;
  margin-bottom: 0.1rem;
`;

const TimeStatus = styled.span`
  font-size: 0.6rem;
  color: #666;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 1rem;
  border-top: 1px solid #ccc;
  background-color: #f9f9f9;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
`;

const SendButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

const ExitButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #ff0000;
  color: white;
  cursor: pointer;
  margin-top: 1rem;
`;

interface Message {
  chatRoomNo: number;
  contentType: string;
  content: string;
  senderId: string;
  senderName: string;
  sendTime: number;
  readCount: number;
  isRead?: boolean;
}

interface ChatProps {
  roomNo: number;
}

function Chat({ roomNo }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const username = 'yageum12';
  const websocketService = useWebSocket();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (websocketService) {
      websocketService.connect(() => {
        console.log(`채팅방 ${roomNo} 구독 확인`);
        websocketService.subscribe(roomNo.toString(), (message: Message) => {
          console.log('새로운 메시지 수신:', message);
          setMessages((prevMessages) => {
            // 중복 메시지 체크를 위한 고유 식별자 생성
            const messageId = `${message.senderId}-${message.sendTime}`;
            const isDuplicate = prevMessages.some(
              (msg) => `${msg.senderId}-${msg.sendTime}` === messageId,
            );

            if (!isDuplicate) {
              return [...prevMessages, message];
            }
            return prevMessages;
          });
        });

        // 채팅 히스토리 가져오기
        getChatHistory(roomNo).then((response) => {
          console.log('채팅 히스토리:', response.data);
          const chatList = response.data.chatList || [];
          setMessages(chatList);
        });
      });
    }

    return () => {
      if (websocketService) {
        websocketService.disconnect(roomNo);
      }
    };
  }, [roomNo, websocketService]);

  const sendMessage = () => {
    if (input.trim() !== '' && websocketService) {
      const message: Message = {
        chatRoomNo: roomNo,
        contentType: 'TALK',
        content: input,
        senderId: username,
        senderName: username,
        sendTime: new Date().getTime(),
        readCount: 0,
        isRead: false,
      };

      console.log('메시지 전송 시도:', message);
      websocketService.sendMessage(roomNo.toString(), message);

      // 즉시 메시지 목록에 추가
      setMessages((prevMessages) => [...prevMessages, message]);
      setInput('');
    }
  };

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const exitRoom = () => {
    const message = {
      roomId: roomNo,
      chatRoomNo: roomNo,
      contentType: 'EXIT',
      content: `${username} 님이 퇴장하셨습니다.`,
      senderId: username,
      senderName: username,
      sendTime: new Date().getTime(),
      readCount: 0,
    };

    websocketService?.sendMessage(roomNo.toString(), message);

    exitChatRoom(roomNo, username).then(() => {
      if (websocketService) {
        websocketService.disconnect(roomNo);
      }
      alert('채팅방을 퇴장하였습니다.');
    });
  };

  return (
    <ChatContainer>
      <Header>Chat Room {roomNo}</Header>
      <MessagesContainer>
        {Array.isArray(messages) && messages.length > 0 ? (
          messages.map((msg, index) => (
            <MessageWrapper
              // eslint-disable-next-line react/no-array-index-key
              key={`${msg.senderId}-${msg.sendTime}-${index}`}
              isMine={msg.senderId === username}
            >
              <MessageBubble>
                {msg.senderId === username && (
                  <MessageInfo>
                    <ReadStatus isRead={msg.readCount > 0}>
                      {msg.readCount > 0 ? '읽음' : '안읽음'}
                    </ReadStatus>
                    <TimeStatus>{formatTime(msg.sendTime)}</TimeStatus>
                  </MessageInfo>
                )}
                <MessageContent isMine={msg.senderId === username}>
                  {msg.content}
                </MessageContent>
                {msg.senderId !== username && (
                  <MessageInfo>
                    <TimeStatus>{formatTime(msg.sendTime)}</TimeStatus>
                  </MessageInfo>
                )}
              </MessageBubble>
            </MessageWrapper>
          ))
        ) : (
          <MessageWrapper isMine={false}>
            <MessageContent isMine={false}>대화가 없습니다.</MessageContent>
          </MessageWrapper>
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              sendMessage();
            }
          }}
          placeholder="메시지를 입력하세요..."
        />
        <SendButton onClick={sendMessage}>전송</SendButton>
      </InputContainer>
      <ExitButton onClick={exitRoom}>퇴장</ExitButton>
    </ChatContainer>
  );
}

export default Chat;
