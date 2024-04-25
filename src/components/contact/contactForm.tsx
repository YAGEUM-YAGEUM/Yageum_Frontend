import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
// 새로고침 대비 localstorage
// modal로 개발
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  line-height: 30px;
  margin-top: 40px;
`;
const ContractBody = styled.div`
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 24px;
  margin: 0 auto;
  /* justify-content: center; */
`;

const Label = styled.label`
  margin-bottom: 10px;
`;
const TypeInput = styled.div``;
const Declaration = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: solid 1.5px black;
  border-radius: 10px;
  padding: 17px;
  /* margin: 10px; */
  width: 570px;
`;
const Information = styled.div`
  /* float: left; */
  /* margin-right: 500px; */
`;
const Input = styled.input`
  border: none;
  border-bottom: solid 1px black;
  outline: none;
  width: 80px;
  /* margin: 5px; */
  /* padding: 5px; */
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

interface FormData {
  leaseType: '전세' | '월세';
  lessorName: string;
  lesseeName: string;
  address: string;
  area: string;
  deposit: number;
  monthlyRent: number;
}

function ContactForm() {
  const { register, handleSubmit } = useForm<FormData>();
  // {...register('leaseType')}

  const onSubmit = (data: FormData) => {
    console.log(data);
    console.log(register);
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>부동산 임대차 계약서</Title>
      <ContractBody>
        <TypeInput>
          <input type="radio" value="전세" name="leaseType" />
          전세
          <input type="radio" value="월세" name="leaseType" />
          월세
        </TypeInput>
        <Declaration>
          <div>
            <Label>임대인</Label>
            <Input name="lessorName" />
          </div>
          과&nbsp;&nbsp;
          <div>
            <Label>임차인</Label>
            <Input name="lesseeName" />
          </div>
          은 아래와 같이 임대차 계약을 체결한다.
        </Declaration>
        <Information>
          <div>1. 임차주택의 표시</div>
          <div>
            <Label>소재지</Label>
            <Input name="address" placeholder="도로명주소" />
          </div>
          <div>
            <Label>면적</Label>
            <Input name="area" />
          </div>
          <div>
            <Label>계약조건</Label>
            <Input name="deposit" type="text" placeholder="보증금 입력" />
            <Input name="monthlyRent" type="text" placeholder="월차임료 입력" />
          </div>
        </Information>

        <SubmitButton type="submit">계약서 보내기</SubmitButton>
      </ContractBody>
    </FormContainer>
  );
}

export default ContactForm;
