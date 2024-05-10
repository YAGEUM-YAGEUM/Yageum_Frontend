'use client';

import styled from 'styled-components';
import CurrentStep from '@/components/register/currentStep';
import StepButton from '@/components/register/stepButton';

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
  /* padding: 20px; */
`;
const Step = styled.div`
  display: flex;
  flex-direction: column;
`;
const StepTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
const InfoTitle = styled.div`
  font-size: 25px;
`;
const InfoHelp = styled.div`
  font-size: 15px;
  color: #848484;
`;

function FirstStep() {
  return (
    <Container>
      <Title>매물등록</Title>
      <CurrentStep step={1} />
      <NeccessaryContainer>
        <InfoTitle>필수정보</InfoTitle>
        <InfoHelp>매물 등록을 위한 정보를 입력해주세요</InfoHelp>
        <Step>
          <StepTitle>
            <StepButton num={1} />
            <div>매물 종류를 선택해주세요. </div>
          </StepTitle>
        </Step>
        <Step />
      </NeccessaryContainer>
    </Container>
  );
}
export default FirstStep;
