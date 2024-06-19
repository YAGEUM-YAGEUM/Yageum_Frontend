'use client';

import styled from 'styled-components';
import { Provider } from 'jotai';
import Header from '@/components/common/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { WebSocketProvider } from '@/context/WebSocketContext';
import { setAuthToken } from '@/api/chat.api';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoaWhpaGkyIiwidWlkIjoxLCJuYW1lIjoi7JW86riI7JW86riIMiIsImlhdCI6MTcxODc1NjUwNiwiZXhwIjoxNzE4NzU4MzA2fQ.CthMj0NyI1nXCibq3Xix_8Z6rYAiqov5Fke3ZvUmJWM';

  setAuthToken(token);

  return (
    <html lang="en">
      <body>
        <Provider>
          <WebSocketProvider token={token}>
            <PageContainer>
              <Header />
              <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
              {modal}
            </PageContainer>
          </WebSocketProvider>
        </Provider>
      </body>
    </html>
  );
}
