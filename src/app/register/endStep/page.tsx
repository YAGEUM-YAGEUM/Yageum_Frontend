'use client';

import styled from 'styled-components';
import CurrentStep from '@/components/register/currentStep';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 45px;
  margin: 30px;
`;

const NeccessaryContainer = styled.div`
  margin-top: 30px;
  background-color: #f5f5f5;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  border-radius: 12px;
  padding: 20px 0px;
  height: 40vh;
`;

const EndTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 30px;
`;
const EndSub = styled.div`
  color: #848484;
  margin-bottom: 40px;
`;
const Button = styled.button`
  width: 160px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

function EndStep() {
  return (
    <Container>
      <Title>매물등록</Title>
      <CurrentStep step={4} />
      <NeccessaryContainer>
        <EndTitle>매물 등록 완료 !</EndTitle>
        <EndSub>매물 등록이 완료되었습니다.</EndSub>
        <Button>등록된 매물 보기</Button>
      </NeccessaryContainer>
    </Container>
  );
}
export default EndStep;
