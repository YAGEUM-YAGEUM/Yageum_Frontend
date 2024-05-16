'use client';

import styled from 'styled-components';
import { DownArrow } from '../../../public/svg/index';

interface FilterProps {
  title: string;
}

const Box = styled.div`
  border: solid 1.5px black;
  width: 164px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 0px 7px;
`;
const Title = styled.div`
  margin-right: 20px;
  font-size: 16px;
`;
const Down = styled(DownArrow)`
  cursor: pointer;
`;
export default function Filter({ title }: FilterProps) {
  return (
    <Box>
      <Title>{title}</Title>
      <Down />
    </Box>
  );
}
