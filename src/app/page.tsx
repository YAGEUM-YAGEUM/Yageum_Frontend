'use client';

import styled from 'styled-components';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import RootLayout from './layout';

const Container = styled.div`
  background-color: red;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
      HI!!
      <Link href="/map">map</Link>
    </Container>
  );
}
