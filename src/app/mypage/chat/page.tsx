import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatButton from '@/components/common/ChatButton';
import { getChatRooms, setAuthToken } from '@/api/chat.api';
import CreateChatRoom from '@/components/common/CreateChatRoom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const Thead = styled.thead`
  background-color: #f1f1f1;
`;

const Th = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #ccc;
`;

const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Td = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

function ChatPage({ token }: { token: string }) {
  const [chatRooms, setChatRooms] = useState<any[]>([]);

  useEffect(() => {
    setAuthToken(token);
    getChatRooms().then((response) => {
      setChatRooms(response.data);
    });
  }, [token]);

  return (
    <Container>
      <h1>마이페이지</h1>
      <CreateChatRoom />
      <Content>
        <Table>
          <Thead>
            <Tr>
              <Th>임차인 | 임대인 ID</Th>
              <Th>매물 정보</Th>
              <Th>거래 상태</Th>
            </Tr>
          </Thead>
          <tbody>
            {chatRooms.map((room, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tr key={index}>
                <Td>
                  {room.creatorId} | {room.participantId}
                </Td>
                <Td>{room.houseId}</Td>
                <Td>
                  <ChatButton roomNo={room.chatRoomNo} token={token} />
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default ChatPage;
