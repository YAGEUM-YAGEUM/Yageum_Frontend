/* eslint-disable react/button-has-type */

'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useWebSocket } from '@/context/WebSocketContext';
import {
  getChatRooms,
  setAuthToken,
  createChatRoom as createChatRoomApi,
} from '@/api/chat.api';
import CreateChatRoom from '@/components/common/CreateChatRoom';
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
      if (response.data && response.data.list) {
        setChatRooms(response.data.list); // 데이터를 올바르게 설정
      } else {
        setChatRooms([]);
      }
    } catch (error) {
      console.error('에러 :', error);
      setChatRooms([]); // 에러 발생 시 빈 배열로 설정
    }
  };

  useEffect(() => {
    setAuthToken(token); // 토큰을 설정
    fetchChatRooms(); // 초기 로드 시 채팅방 목록 가져오기
  }, [token]);

  useEffect(() => {
    if (websocketService) {
      console.log('WebSocket 서비스에 연결 중'); // 추가 로그
      websocketService.connect(() => {
        fetchChatRooms();
      });
    }
  }, [websocketService]);

  const handleRoomSelect = (roomNo: number) => {
    if (websocketService) {
      console.log(`채팅방 ${roomNo} 구독 중`);
      websocketService.connect(() => {
        // onConnect 내부에서 구독을 수행
        websocketService.subscribe(roomNo.toString(), (message: any) => {
          console.log('수신한 메시지:', message);
        });
        setSelectedRoomNo(roomNo);
      });
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
      console.error('채팅방 생성 실패:', error);
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
