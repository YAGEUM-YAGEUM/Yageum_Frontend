import { useState } from 'react';
import styled from 'styled-components';
import NextButton from '@/components/register/nextButton';
import Spacer from '@/components/common/Spacer';
import StepButton from '@/components/register/stepButton';
import HLine from '@/components/register/hLine';
import FormTitle from '@/components/register/formTitle';
import InputField from '@/components/register/inputField';
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

const AdditionalInfoContainer = styled.div`
  margin-top: 30px;
  background-color: #f5f5f5;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 20px 40px;
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
  width: 100%;
`;

const InfoTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

const InfoHelp = styled.div`
  font-size: 15px;
  color: #848484;
  text-align: center;
  margin-bottom: 20px;
`;

const RadioButton = styled.label`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.label`
  margin-right: 20px;
  display: flex;
  align-items: center;
`;

function SecondStep({ next }: { next: () => void }) {
  const [parkingOption, setParkingOption] = useState<string>('불가능');
  const [elevatorOption, setElevatorOption] = useState<string>('없음');

  const handleParkingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParkingOption(event.target.value);
  };

  const handleElevatorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setElevatorOption(event.target.value);
  };

  return (
    <Container>
      <Title>매물등록</Title>
      <CurrentStep step={2} />
      <AdditionalInfoContainer>
        <Spacer size={50} />
        <InfoTitle>추가 정보</InfoTitle>
        <Spacer size={30} />
        <InfoHelp>추가 정보 및 시설 정보를 입력해주세요</InfoHelp>

        <Step>
          <FormRow>
            <StepButton num={1} />
            <div style={{ marginLeft: '10px' }}>층 수를 입력해주세요.</div>
          </FormRow>
          <FormRow>
            <FormTitle title="전체 층수" />
            <InputField unit="층" />
            <FormTitle title="해당 층수" />
            <InputField unit="층" />
          </FormRow>
          <HLine />
        </Step>

        <Step>
          <FormRow>
            <StepButton num={2} />
            <div style={{ marginLeft: '10px' }}>
              필수 시설 정보를 입력해주세요.
            </div>
          </FormRow>
          <FormRow>
            <FormTitle title="욕실 수" />
            <InputField unit="개" />
          </FormRow>
          <FormRow>
            <FormTitle title="엘리베이터" />
            <RadioButton>
              <input
                type="radio"
                value="없음"
                checked={elevatorOption === '없음'}
                onChange={handleElevatorChange}
              />
              없음
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                value="있음"
                checked={elevatorOption === '있음'}
                onChange={handleElevatorChange}
              />
              있음
            </RadioButton>
          </FormRow>
          <FormRow>
            <FormTitle title="주차 가능 여부" />
            <RadioButton>
              <input
                type="radio"
                value="불가능"
                checked={parkingOption === '불가능'}
                onChange={handleParkingChange}
              />
              불가능
            </RadioButton>
            <RadioButton>
              <input
                type="radio"
                value="가능"
                checked={parkingOption === '가능'}
                onChange={handleParkingChange}
              />
              가능
            </RadioButton>
            {parkingOption === '가능' && <InputField unit="대" />}
          </FormRow>
          <FormRow>
            <FormTitle title="입주 가능일" />
            <InputField unit="" />
            <InputField unit="" />
          </FormRow>
          <FormRow>
            <FormTitle title="사용승인일" />
            <InputField unit="" />
          </FormRow>
          <HLine />
        </Step>

        <Step>
          <FormRow>
            <StepButton num={3} />
            <div style={{ marginLeft: '10px' }}>시설 정보를 입력해주세요.</div>
          </FormRow>
          <FormRow>
            <FormTitle title="난방 시설" />
            <RadioButton>
              <input type="radio" value="선택없음" name="heating" />
              선택없음
            </RadioButton>
            <RadioButton>
              <input type="radio" value="개별난방" name="heating" />
              개별난방
            </RadioButton>
            <RadioButton>
              <input type="radio" value="중앙난방" name="heating" />
              중앙난방
            </RadioButton>
            <RadioButton>
              <input type="radio" value="지역난방" name="heating" />
              지역난방
            </RadioButton>
          </FormRow>
          <FormRow>
            <FormTitle title="상세 옵션" />
            <Checkbox>
              <input type="checkbox" />
              침대
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              옷장
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              냉장고
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              TV
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              CCTV
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              세탁기
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              건조기
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              전자레인지
            </Checkbox>
            <Checkbox>
              <input type="checkbox" />
              인덕션
            </Checkbox>
          </FormRow>
          <HLine />
        </Step>

        <Spacer size={20} />
        <NextButton onClick={next} />
        <Spacer size={80} />
      </AdditionalInfoContainer>
    </Container>
  );
}

export default SecondStep;
