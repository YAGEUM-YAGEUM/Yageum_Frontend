'use client';

import styled from 'styled-components';
import Filter from '@/components/map/filter';
import Link from 'next/link';

// title data

const Container = styled.div`
  width: 100%;
  background-color: #ededed;
  height: 80px;
  display: flex;
  flex-direction: row;
  border-bottom: solid 1px black;
  align-items: center;
  padding-left: 70px;
`;
export default function FilterBar() {
  return (
    <Container>
      <Filter title="지역" />
      <Filter title="건물 종류" />
      <Filter title="월세|전세|매매" />
      <Filter title="가격" />
      <Link href="/mypage">마이페이지</Link>
    </Container>
  );
}
