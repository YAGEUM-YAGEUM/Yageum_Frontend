'use client';

import styled from 'styled-components';
import { Provider } from 'jotai';
import Header from '@/components/common/Header';
import StyledComponentsRegistry from '@/lib/registry';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <PageContainer>
            <Header />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            <StyledComponentsRegistry>{modal}</StyledComponentsRegistry>
          </PageContainer>
        </Provider>
      </body>
    </html>
  );
}
