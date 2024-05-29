import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Button from '../common/Button';

// 새로고침 대비 localstorage
// 채팅창 내부에서 modal 로 띄워질 예정.

interface InputProps {
  size?: string;
}
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 80vw;
  line-height: 30px;
  margin-top: 40px;
  border-radius: 10px;
  /* background-color: aliceblue; */
  border: 1px solid;
  line-height: 50px;
`;
const ContractBody = styled.div`
  margin: 0 auto;
`;
const Title = styled.h1`
  font-size: 24px;
  margin-top: 60px;
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
  margin: 0 auto;
  width: 80%;
`;

// props 로 길이도 받아서 input 길이 조절할 수 있게 수정하기

const Input = styled.input<InputProps>`
  border: none;
  border-bottom: solid 1px black;
  outline: none;
  width: 80px;
  width: ${(props) => {
    if (props.size === 'small') {
      return '40px';
    }
    if (props.size === 'big') {
      return '200px';
    }
    return '100px'; // default 값
  }};
  margin-left: 5px;
  padding-left: 6px;
  /* margin: 5px; */
  /* padding: 5px; */
`;

interface FormData {
  leaseType: '전세' | '월세';
  lessorName: string;
  lesseeName: string;
  address: string;
  exclusive_area: string;
  deposit: number;
  monthlyRent: number;
}

function ContractForm() {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data, '?');
    console.log(register, 'zz');
  };
  const leaseTypeReg = register('leaseType');
  const lessorNameReg = register('lessorName');
  const lesseeNameReg = register('lesseeName');
  const addressReg = register('address');
  const exclusivearea = register('exclusive_area');

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>부동산 임대차 계약서</Title>
      <ContractBody>
        <TypeInput>
          <input
            type="radio"
            value="전세"
            onChange={leaseTypeReg.onChange}
            onBlur={leaseTypeReg.onBlur}
            ref={leaseTypeReg.ref}
            name="leaseType"
          />
          전세
          <input
            type="radio"
            value="월세"
            onChange={leaseTypeReg.onChange}
            onBlur={leaseTypeReg.onBlur}
            ref={leaseTypeReg.ref}
            name="leaseType"
          />
          월세
        </TypeInput>
        <Declaration>
          <div>
            <Label>임대인</Label>
            <Input
              name="lessorName"
              onChange={lessorNameReg.onChange}
              onBlur={lessorNameReg.onBlur}
              ref={lessorNameReg.ref}
            />
          </div>
          과&nbsp;&nbsp;
          <div>
            <Label>임차인</Label>
            <Input
              name="lesseeName"
              onChange={lesseeNameReg.onChange}
              onBlur={lesseeNameReg.onBlur}
              ref={lesseeNameReg.ref}
            />
          </div>
          은 아래와 같이 임대차 계약을 체결한다.
        </Declaration>
        <div>1. 부동산의 표시</div>
        <div>
          <Label>소재지</Label>
          <Input
            name="address"
            placeholder="도로명주소"
            onChange={addressReg.onChange}
            onBlur={addressReg.onBlur}
            ref={addressReg.ref}
          />
        </div>
        <div>
          <Label>면적</Label>
          <Input name="exclusivearea" onChange={exclusivearea.onChange} />
          {'m\xB2'}
        </div>
        <div>
          <Label>월세(전세) 보증금</Label>
          <Input name="deposit" type="text" placeholder="보증금 입력" />
        </div>
        <div>
          <Label>월 차임료</Label>
          <Input name="monthlyRent" type="text" placeholder="월차임료 입력" />
        </div>
        <div>2. 계약 내용</div>
        <div>
          제1조(목적) 위 부동산의 임대차에 한하여 임대인과 임차인은 합의에 의해
          임차보증금 및 차임을 아래와 같이 지불하기로 한다.
        </div>
        <table>
          <tbody>
            <tr>
              <td>계약금</td>
              <td>
                <Input />
                원정은 계약시 지불하고,
              </td>
            </tr>
            <tr>
              <td>중도금</td>
              <td>
                <Input />
                원정은 <Input size="small" />년 <Input size="small" />월{' '}
                <Input size="small" />
                일에 지불하며,
              </td>
            </tr>
            <tr>
              <td>잔금</td>
              <td>
                <Input />
                원정은 <Input size="small" />년 <Input size="small" />월{' '}
                <Input size="small" />
                일에 지불한다.
              </td>
            </tr>
            <tr>
              <td>차임</td>
              <td>
                <Input />
                원정은 매월 <Input size="small" />
                일에 지불한다.
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          (입금 계좌 : <Input size="big" /> )
        </div>
        <div>제2조(임대차 기간)</div>
        <div>
          임대차 기간은 <Input size="small" />년 <Input size="small" />월
          <Input size="small" />
          일부터 <Input size="small" />년 <Input size="small" />
          월 <Input size="small" />
          일까지 <Input size="small" />
          개월간으로 한다.
        </div>
        {/* 사인하기 하고 돌아오면 계약서보내기 활성화 */}
        <Button type="submit" width={110}>
          계약서 보내기
        </Button>

        <Link href="/sign">
          <Button type="button" width={110}>
            사인하기
          </Button>
        </Link>
      </ContractBody>
    </FormContainer>
  );
}

export default ContractForm;
