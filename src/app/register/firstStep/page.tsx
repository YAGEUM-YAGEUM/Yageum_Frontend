'use client';

import { useState } from 'react';
import styled from 'styled-components';
import CurrentStep from '@/components/register/currentStep';
import StepButton from '@/components/register/stepButton';
import HLine from '@/components/register/hLine';
import SearchAddress from '@/components/common/SearchAddress';
import FormTitle from '@/components/register/formTitle';

// interface postCode {
//   address: string;
//   zonecode: number | string;
// }
const scriptUrl =
  'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';

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
const FormRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
`;
const InfoTitle = styled.div`
  font-size: 25px;
`;
const InfoHelp = styled.div`
  font-size: 15px;
  color: #848484;
`;
const TypeBox = styled.div`
  /* margin-top: 20px; */
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
`;
const Type = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #d9d9d9;
  text-align: center;
`;
const AddressInput = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: transparent;
  padding-left: 20px;
`;

function FirstStep() {
  // 일단 useState 이용해서 상태저장, sendGAEvent 찾아볼 것.
  const [addressForm, setAddressForm] = useState({
    address: '',
  });

  const changeAddressHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddressForm({
      ...addressForm,
      [name]: value,
    });
  };
  return (
    <Container>
      <Title>매물등록</Title>
      <CurrentStep step={1} />
      <NeccessaryContainer>
        <InfoTitle>필수정보</InfoTitle>
        <InfoHelp>매물 등록을 위한 정보를 입력해주세요</InfoHelp>

        <Step>
          <FormRow>
            <StepButton num={1} />
            <div>매물 종류를 선택해주세요. </div>
          </FormRow>
          <TypeBox>
            <Type>주택/빌라</Type>
            <Type>오피스텔</Type>
            <Type>아파트</Type>
            <Type>기타</Type>
          </TypeBox>
        </Step>
        <HLine />
        <Step>
          <FormRow>
            <StepButton num={2} />
            <div>매물 주소를 입력해주세요. </div>
          </FormRow>
          <FormRow>
            <FormTitle title="주소 검색" />
            <AddressInput
              readOnly
              type="text"
              name="address"
              placeholder="주소를 검색해주세요. "
              value={addressForm.address}
              onChange={changeAddressHandler}
            />
            <SearchAddress
              scriptUrl={scriptUrl}
              setAddressForm={setAddressForm}
            />
          </FormRow>
          <HLine />
        </Step>
        <Step>
          <FormRow>
            <StepButton num={3} />
            <div>매물 크기를 입력해주세요. </div>
          </FormRow>
          <HLine />
        </Step>

        <Step>
          <FormRow>
            <StepButton num={4} />
            <div>방 정보를 입력해주세요. </div>
          </FormRow>
          <HLine />
        </Step>

        <Step>
          <FormRow>
            <StepButton num={5} />
            <div>가격 정보를 입력해주세요. </div>
          </FormRow>
          <HLine />
        </Step>
      </NeccessaryContainer>
    </Container>
  );
}
export default FirstStep;
