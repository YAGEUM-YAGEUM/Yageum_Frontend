import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: center;
`;
const Text = styled.p`
  text-align: center;
`;

function Footer() {
  return (
    <Container>
      <Title>서비스 소개</Title>
      <Text>저희는 블록체인 기반 부동산 거래 플랫폼입니다.</Text>
    </Container>
  );
}

export default Footer;
