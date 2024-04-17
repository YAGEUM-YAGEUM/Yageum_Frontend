'use client';

import styled from 'styled-components';
import { ReactNode } from 'react';

const Board = styled.div`
  display: flex;
  /* flex-direction: row; */
  /* height: 100px; */
`;

export default function Layout({
  filterBar,
  leftboard,
  view,
}: {
  filterBar: ReactNode;
  leftboard: ReactNode;
  view: ReactNode;
}) {
  return (
    <>
      {/* {children} */}
      <div>{filterBar}</div>
      <Board>
        <div>{leftboard}</div>
        <div>{view}</div>
      </Board>
    </>
  );
}
