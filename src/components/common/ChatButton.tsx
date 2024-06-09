import React, { useState } from 'react';
import styled from 'styled-components';
import { useWebSocket } from '@/context/WebSocketContext';
import Modal from './Modal';
import Chat from './Chat';

const ChatButtonStyled = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

function ChatButton({ roomNo }: { roomNo: number }) {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const websocketService = useWebSocket();

  const openChat = () => {
    if (websocketService) {
      websocketService.subscribe(roomNo.toString(), (message) => {
        console.log('Received message:', message);
      });
    }
    setIsChatOpen(true);
  };

  return (
    <div>
      <ChatButtonStyled onClick={openChat}>채팅</ChatButtonStyled>

      {isChatOpen && (
        <Modal>
          <Chat roomNo={roomNo} />
        </Modal>
      )}
    </div>
  );
}

export default ChatButton;
