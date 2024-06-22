import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import useWeb3 from '@/hooks/contract/useWeb3';
import { useRouter } from 'next/navigation';
import Button from '../common/Button';

// uint deposit; // 보증금
// uint rentAmount; // 월세
// string propertyAddress; // 매물 주소
// string specialTerms; // 특약사항
// string lessorSignaturePad; // 임대인의 사인패드 서명 값
// string tenantSignaturePad; // 임차인의 사인패드 서명 값 요것만 저장되도록

// 새로고침 대비 localstorage
// 채팅창 내부에서 modal 로 띄워질 예정.

interface InputProps {
  size?: string;
  value?: string;
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
const Textarea = styled.textarea`
  width: 90%;
  height: 100px;
  resize: none;
`;
interface FormData {
  deposit: number;
  rentAmount: number;
  propertyAddress: string;
  specialTerms?: string;
}

function ContractForm() {
  const router = useRouter();
  const [web3] = useWeb3();
  const { register, handleSubmit, setValue, watch } = useForm<FormData>();
  const formValues = watch();

  useEffect(() => {
    // const storedFormData = typeof window !== 'undefined' ? localStorage.getItem('storedFormData') : null;

    // 다시 돌아왔을 때 localstorage에 내용 있으면 form 에 넣어서 보여주기
    const storedFormData = localStorage.getItem('contractFormData');
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      console.log(parsedFormData, '기존에 있던 내용입니다 ');
      Object.keys(parsedFormData).forEach((key) => {
        setValue(key as keyof FormData, parsedFormData[key]);
      });
    }
  }, [setValue, web3]);

  const toSign = () => {
    const formData = JSON.stringify(formValues);
    localStorage.setItem('contractFormData', formData);
    router.push('/sign');
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  // };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Title>부동산 임대차 계약서</Title>
      <ContractBody>
        <TypeInput>
          <input type="radio" value="전세" />
          전세
          <input type="radio" value="월세" />
          월세
        </TypeInput>
        <Declaration>
          <div>
            <Label>임대인</Label>
            <Input placeholder="임대인 이름" />
          </div>
          과&nbsp;&nbsp;
          <div>
            <Label>임차인</Label>
            <Input placeholder="임차인 이름" />
          </div>
          은 아래와 같이 임대차 계약을 체결한다.
        </Declaration>
        <div>1. 부동산의 표시</div>
        <div>
          <Label>소재지</Label>
          <Input
            // value={getValues('propertyAddress')}
            placeholder="도로명주소"
            {...register('propertyAddress')}
          />
          {/* {formValues.propertyAddress} */}
        </div>
        <div>
          <Label>면적</Label>
          <Input
            placeholder="면적"
            // value="면적"
          />
          {'m\xB2'}
        </div>
        <div>
          <Label>월세(전세) 보증금</Label>
          <Input
            type="text"
            placeholder="보증금 입력"
            {...register('deposit')}
          />
        </div>
        <div>
          <Label>월 차임료</Label>
          <Input
            type="text"
            placeholder="월차임료 입력"
            {...register('rentAmount')}
          />
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
                <Input type="text" />
                원정은 계약시 지불하고,
              </td>
            </tr>
            <tr>
              <td>중도금</td>
              <td>
                <Input />
                원정은 <Input size="small" />년 <Input size="small" />월
                <Input size="small" />
                일에 지불하며,
              </td>
            </tr>
            <tr>
              <td>잔금</td>
              <td>
                <Input />
                원정은 <Input size="small" />년 <Input size="small" />월
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
        <div>특약 사항</div>
        <Textarea {...register('specialTerms')} />
        {/* 사인하기 하고 돌아오면 계약서보내기 활성화 */}
        {/* <Button type="submit" width={110} onClick={checkAccount}> */}

        {/* <Button
          type="submit"
          width={110}
          // onClick={(e) => {
          //   onSubmit();
          // }}
        >
          계약서 보내기
        </Button> */}

        {/* 일단 제출을 없앰  */}

        {/* <Button width={110} disabled>
          어어
          <input type="submit" />
        </Button> */}

        {/* <Link href="/sign" scroll={false}> */}
        <Button type="button" width={110} onClick={toSign}>
          사인하기
        </Button>
        {/* </Link> */}
      </ContractBody>
      메타마스크 로그인도 해주시~
    </FormContainer>
  );
}

export default ContractForm;
