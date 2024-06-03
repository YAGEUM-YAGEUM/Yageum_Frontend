'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

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

function Chat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');

  const sendMessage = () => {
    if (input.trim() !== '') {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  return (
    <ChatContainer>
      <Header>user</Header>
      <MessagesContainer>
        {messages.map((msg, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Message key={index}>{msg}</Message>
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
    </ChatContainer>
  );
}

export default Chat;
