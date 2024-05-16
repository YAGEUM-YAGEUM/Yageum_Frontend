import styled from 'styled-components';

const Circle = styled.div<{ active: boolean }>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ active }) => (active ? '#0500FF' : '#ececec')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  z-index: 50;
`;
const StepTitle = styled.div`
  color: #848484;
`;
const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 450px;
`;
const Line = styled.hr`
  position: absolute;
  /* left: calc(300px + 40px); */
  top: 250px;
  bottom: 0;
  color: #ececec;
  width: 400px;
  height: 1px;
  /* bottom: 25px; */
  /* z-index: 0; */
  /* border: 0; */
  border-bottom: 0;
`;
interface StepProps {
  step: number;
}
// step 1, 2, 3,4 로 받아온 걸로 color 활성화시키기 ~@@

export default function CurrentStep({ step }: StepProps) {
  const stepTitles = ['필수정보', '추가정보', '상세정보', '등록완료'];
  return (
    // step title funnel 에서 가져와도 될듯
    <Container>
      {[1, 2, 3, 4].map((index) => (
        <Step key={index}>
          <Circle active={step === index}>{index}</Circle>
          <StepTitle>{stepTitles[index - 1]}</StepTitle>
        </Step>
      ))}
      {/* <Step> */}
      {/* <Circle step={step === '1' ? '1' : ''} />
        <StepTitle>필수정보</StepTitle>
      </Step>
      <Step>
        <Circle step={step === '2' ? '2' : ''} />
        <StepTitle>추가정보</StepTitle>
      </Step>
      <Step>
        <Circle step={step === '3' ? '3' : ''} />
        <StepTitle>상세정보</StepTitle>
      </Step>
      <Step>
        <Circle step={step === '4' ? '4' : ''} />
        <StepTitle>등록완료</StepTitle>
      </Step> */}
      <Line />
    </Container>
  );
}
