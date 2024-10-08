'use client';

import React, { useState, useEffect } from 'react';
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

const Message = styled.div`
  background: #f1f1f1;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
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

interface ChatProps {
  roomNo: number;
}

function Chat({ roomNo }: ChatProps) {
  const [messages, setMessages] = useState<any[]>([]); // 초기값을 빈 배열로 설정
  const [input, setInput] = useState<string>('');
  const username = 'yageum12'; // 예시
  const websocketService = useWebSocket();

  useEffect(() => {
    if (websocketService) {
      websocketService.connect(() => {
        console.log(`채팅방 ${roomNo} 구독 확인`);
        websocketService.subscribe(roomNo.toString(), (message: any) => {
          console.log('새로운 메시지 수신:', message);
          setMessages((prevMessages) =>
            Array.isArray(prevMessages)
              ? [...prevMessages, message]
              : [message],
          );
        });

        // 채팅 히스토리 가져오기
        getChatHistory(roomNo).then((response) => {
          console.log('채팅 히스토리:', response.data);
          setMessages(response.data.chatList || []); // chatList가 없을 경우 빈 배열 설정
        });
      });
    }
  }, [roomNo, websocketService]);

  const sendMessage = () => {
    if (input.trim() !== '' && websocketService) {
      const message = {
        chatRoomNo: roomNo,
        contentType: 'TALK',
        content: input,
        senderId: username,
        senderName: username,
        houseId: 1,
        sendTime: new Date().getTime(),
        readCount: 0,
      };

      console.log('메시지 전송 시도:', message);
      websocketService.sendMessage(roomNo.toString(), message);

      console.log('메시지 전송 완료');

      // We don't need to add the message to the state here
      // as it will be received back through the WebSocket subscription

      setInput('');
    }
  };
  const exitRoom = () => {
    const message = {
      roomId: roomNo,
      chatRoomNo: roomNo,
      contentType: 'EXIT',
      content: `${username} 님이 퇴장하셨습니다.`,
      senderId: username,
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
            // eslint-disable-next-line react/no-array-index-key
            <Message key={index}>{msg.content}</Message>
          ))
        ) : (
          <Message>대화가 없습니다.</Message>
        )}
      </MessagesContainer>
      <InputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
        />
        <SendButton onClick={sendMessage}>전송</SendButton>
      </InputContainer>
      <ExitButton onClick={exitRoom}>퇴장</ExitButton>
    </ChatContainer>
  );
}

export default Chat;
