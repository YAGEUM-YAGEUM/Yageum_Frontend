'use client';

import styled from 'styled-components';
// import Link from 'next/link';
// import type { AppProps } from 'next/app';
// import Script from 'next/script';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import Sale from '@/components/Sale';
import Guide from '@/components/Guide';
// import RootLayout from './layout';

const Container = styled.div`
  text-align: center;
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Text = styled.p`
  text-align: center;
`;

const ContentText = styled.p`
  text-align: left;
`;

const Input = styled.input`
  width: 60%;
  margin: 0 auto;
  height: 40px;
  border-radius: 8px;
`;

const Button = styled.button`
  width: 240px;
  height: 60px;
`;

const QuestionDiv = styled.div`
  width: 63%;
  border: 1px solid;
  height: 60px;
  margin: 0 auto;
  border-radius: 8px;
`;

export default function Home() {
  return (
    <Container>
      <Title>Yageum Yageum</Title>
      <Text>저희는 블록체인 기반 부동산 거래 플랫폼입니다.</Text>
      <Input type="search" />
      <ContentText>추천 매물보기(관심지역 위주로 매물 추천)</ContentText>
      <GridContainer>
        {Array.from({ length: 16 }).map(() => (
          <Sale key={uuidv4()} />
        ))}
      </GridContainer>
      <Button>더 많은 매물 보기</Button>
      <ContentText>부동산 가이드</ContentText>
      <GridContainer>
        {Array.from({ length: 4 }).map(() => (
          <Guide key={uuidv4()} />
        ))}
      </GridContainer>
      <ContentText>자주 묻는 질문</ContentText>

      {Array.from({ length: 4 }).map(() => (
        <QuestionDiv key={uuidv4()}>
          <ContentText>
            Q: 질문이 있습니다. 이러쿵 저러쿵 어떻게 해요?
          </ContentText>
        </QuestionDiv>
      ))}

      <Button>더 많은 질문 보기</Button>
    </Container>
  );
}
