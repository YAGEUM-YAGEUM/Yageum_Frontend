'use client';

import styled from 'styled-components';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import RootLayout from './layout';

const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export default function Home() {
  return (
    <Container>
      YAGEUM-YAGEUM
      <Link href="/map">map</Link>
      <Link href="/signup">signup</Link>
    </Container>
  );
}
