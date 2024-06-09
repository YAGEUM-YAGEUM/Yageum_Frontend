'use client';

import styled from 'styled-components';
import { Provider } from 'jotai';
import Header from '@/components/common/Header';
import StyledComponentsRegistry from '@/lib/registry';
import { WebSocketProvider } from '@/context/WebSocketContext';

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
  const token = 'your-auth-token';

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
