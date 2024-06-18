/* eslint-disable react/button-has-type */

'use client';

import {
  getChatRooms,
  setAuthToken,
  createChatRoom as createChatRoomApi,
} from '@/api/chat.api';
import { useWebSocket } from '@/context/WebSocketContext';
import CreateChatRoom from '@/components/common/CreateChatRoom';

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ChatButton from '@/components/common/ChatButton';

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
  const [selectedRoomNo, setSelectedRoomNo] = useState<number | null>(null);
  const websocketService = useWebSocket();

  const fetchChatRooms = async () => {
    setAuthToken(token); // 토큰을 설정
    try {
      const response = await getChatRooms();
      setChatRooms(response.data);
    } catch (error) {
      console.error('Error fetching chat rooms:', error);
    }
  };

  useEffect(() => {
    setAuthToken(token); // 토큰 설정
    fetchChatRooms(); // 초기 로드 시 채팅방 목록 가져오기
  }, [token]);

  useEffect(() => {
    if (websocketService) {
      websocketService.connect(() => {
        fetchChatRooms();
      });
    }
  }, [websocketService]);

  const handleRoomSelect = (roomNo: number) => {
    if (websocketService) {
      websocketService.subscribe(roomNo.toString(), (message: any) => {
        console.log('Received message:', message);
      });
      setSelectedRoomNo(roomNo);
    }
  };

  const handleCreateChatRoom = async (
    houseId: number,
    participantId: number,
  ) => {
    try {
      await createChatRoomApi(houseId, participantId);
      fetchChatRooms(); // 새로운 채팅방 생성 후 목록 갱신
    } catch (error) {
      console.error('Failed to create chat room:', error);
    }
  };

  return (
    <Container>
      <h1>마이페이지</h1>
      <CreateChatRoom onCreate={handleCreateChatRoom} />
      <Content>
        <Table>
          <Thead>
            <Tr>
              <Th>임차인 | 임대인 ID</Th>
              <Th>매물 정보</Th>
              <Th>거래 상태</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <tbody>
            {Array.isArray(chatRooms) && chatRooms.length > 0 ? (
              chatRooms.map((room, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Tr key={index}>
                  <Td>
                    {room.creatorId} | {room.participantId}
                  </Td>
                  <Td>{room.houseId}</Td>
                  <Td>
                    <button onClick={() => handleRoomSelect(room.chatRoomNo)}>
                      입장
                    </button>
                  </Td>
                  <Td>
                    {selectedRoomNo === room.chatRoomNo && (
                      <ChatButton roomNo={room.chatRoomNo} />
                    )}
                  </Td>
                </Tr>
              ))
            ) : (
              <Tr>
                <Td colSpan={4}>채팅방이 없습니다.</Td>
              </Tr>
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}

export default ChatPage;
