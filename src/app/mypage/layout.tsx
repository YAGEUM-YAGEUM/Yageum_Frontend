// app/mypage/layout.tsx

'use client';

import styled from 'styled-components';
import Sidebar from '@/components/common/Sidebar';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
`;

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  );
}
