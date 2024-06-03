'use client';

import React from 'react';
import styled from 'styled-components';
import ChatButton from '@/components/common/ChatButton';

const Container = styled.div`
  display: flex;
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

export default function Chat() {
  const dummyData = [
    {
      id: '임차인 아이디 어쩌구',
      info: '오피스텔 | 전세 | 서대문구',
    },
    {
      id: '임차인 아이디 어쩌구 2',
      info: '단독주택 | 월세 | 강남구',
    },
    {
      id: '임차인 아이디 어쩌구 3',
      info: '오피스텔 | 전세 | 서대문구',
    },
    {
      id: '임대인 아이디 어쩌구 1',
      info: '단독주택 | 월세 | 강남구',
    },
  ];

  return (
    <Container>
      <Content>
        <h1>마이페이지</h1>
        <Table>
          <Thead>
            <Tr>
              <Th>임차인 | 임대인 ID</Th>
              <Th>매물 정보</Th>
              <Th>거래 상태</Th>
            </Tr>
          </Thead>
          <tbody>
            {dummyData.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Tr key={index}>
                <Td>{item.id}</Td>
                <Td>{item.info}</Td>
                <Td>
                  <ChatButton />
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
}
