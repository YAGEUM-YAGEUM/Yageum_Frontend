'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: auto;
  gap: 4px;
`;
const ContentText = styled.h2`
  font-size: 18px;
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  justify-content: space-between;
`;

const LabelText = styled.span`
  min-width: 140px;
  display: inline-block;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  flex-grow: 1;
`;

const PasswordInput = styled.input`
  padding: 10px;
  flex-grow: 1;
  border: none;
  font-size: 16px;
`;

const ButtonDiv = styled.div`
  text-align: center;
`;

const RadioButtonLabel = styled.label`
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ToggleButton = styled.button`
  background: none;
  color: #007bff;
  border: none;
  cursor: pointer;
  padding-left: 10px;
`;

function Signup() {
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [interestedRegion, setInterestedRegion] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (password !== confirmPassword) {
    //   alert('비밀번호가 일치하지 않습니다.');
    // } else {
    //   console.log({
    //     email,
    //     id,
    //     password,
    //     name,
    //     birthDate,
    //     phoneNumber,
    //     role,
    //     interestedRegion,
    //   });
    // }
  };

  return (
    <>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <ContentText>이메일 인증</ContentText>
        <Label>
          <LabelText>이메일</LabelText>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>
        <ContentText>기본 정보</ContentText>
        <Label>
          <LabelText>아이디</LabelText>
          <Input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </Label>
        <Label>
          <LabelText>비밀번호</LabelText>
          <InputContainer>
            <PasswordInput
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ToggleButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
            </ToggleButton>
          </InputContainer>
        </Label>
        {password !== '' && (
          <Label>
            <LabelText>비밀번호 확인</LabelText>
            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Label>
        )}
        <ContentText>회원 정보</ContentText>
        <Label>
          <LabelText>이름</LabelText>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>
        <Label>
          <LabelText>생년월일</LabelText>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </Label>
        <Label>
          <LabelText>휴대폰 번호</LabelText>
          <Input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Label>
        <ContentText>관심 분야</ContentText>
        <Label>
          <LabelText>관심 지역</LabelText>
          <Input
            type="text"
            value={interestedRegion}
            onChange={(e) => setInterestedRegion(e.target.value)}
          />
        </Label>
        <div>
          <ButtonDiv>
            <RadioButtonLabel>
              <Input
                type="radio"
                value="tenant"
                name="role"
                checked={role === 'tenant'}
                onChange={(e) => setRole(e.target.value)}
              />
              임차인
            </RadioButtonLabel>
            <RadioButtonLabel>
              <Input
                type="radio"
                value="landlord"
                name="role"
                checked={role === 'landlord'}
                onChange={(e) => setRole(e.target.value)}
              />
              임대인
            </RadioButtonLabel>
          </ButtonDiv>
        </div>
        <Button type="submit">가입 완료</Button>
      </Form>
    </>
  );
}

export default Signup;
