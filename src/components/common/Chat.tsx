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
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState<string>('');
  const username = 'yageum12'; // 예시
  const websocketService = useWebSocket();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (websocketService) {
      websocketService.connect(() => {
        websocketService.subscribe(roomNo.toString(), (message: any) => {
          setMessages((prevMessages) => [...prevMessages, message]);
        });

        getChatHistory(roomNo).then((response) => {
          setMessages(response.data.chatList);
        });
      });

      return () => {
        websocketService.disconnect();
      };
    }
  }, [roomNo, websocketService]);

  const sendMessage = () => {
    if (input.trim() !== '') {
      const message = {
        roomId: roomNo,
        contentType: 'TALK',
        content: input,
      };
      websocketService?.sendMessage(`/pub/chat/talk/${roomNo}`, message);
      setInput('');
    }
  };

  const exitRoom = () => {
    const message = {
      roomId: roomNo,
      contentType: 'EXIT',
      content: `${username} 님이 퇴장하셨습니다.`,
    };
    websocketService?.sendMessage(`/pub/chat/talk/${roomNo}`, message);
    exitChatRoom(roomNo, username).then(() => {
      websocketService?.disconnect();
      alert('채팅방을 퇴장하였습니다.');
    });
  };

  return (
    <ChatContainer>
      <Header>Chat Room {roomNo}</Header>
      <MessagesContainer>
        {messages.map((msg, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Message key={index}>{msg.content}</Message>
        ))}
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
