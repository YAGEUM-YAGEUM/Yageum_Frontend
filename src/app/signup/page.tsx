'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { tenantRegister, lessorRegister } from '@/api/auth.api';

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
  gap: 20px;
`;

const ContentText = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
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

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const AreaButton = styled.button<{ active: boolean }>`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#007bff' : 'white')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  cursor: pointer;
  font-size: 16px;
  margin: 0 5px;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#f0f0f0')};
  }
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
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [role, setRole] = useState<string>('임차인');
  const [interestedRegion, setInterestedRegion] = useState<string>('');

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      try {
        const data = {
          email,
          username,
          password,
          name,
          phone: phoneNumber,
        };

        let response;
        if (role === '임차인') {
          response = await tenantRegister(data);
        } else if (role === '임대인') {
          response = await lessorRegister(data);
        }

        if (response && response.success) {
          alert('회원가입이 성공적으로 완료되었습니다!');
          // 성공 시 로그인 페이지로 이동 등 추가 처리 필요
        }
      } catch (error) {
        console.error('회원가입 실패:', error);
        alert('회원가입에 실패했습니다.');
      }
    }
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
        <ContentText>가입 정보</ContentText>
        <Label>
          <LabelText>이용 분야</LabelText>
          <BtnContainer>
            <AreaButton
              active={role === '임차인'}
              onClick={() => setRole('임차인')}
            >
              임차인
            </AreaButton>
            <AreaButton
              active={role === '임대인'}
              onClick={() => setRole('임대인')}
            >
              임대인
            </AreaButton>
          </BtnContainer>
        </Label>

        <Label>
          <LabelText>관심 지역</LabelText>
          <Input
            type="text"
            value={interestedRegion}
            onChange={(e) => setInterestedRegion(e.target.value)}
          />
        </Label>
        <Button type="submit">가입 완료</Button>
      </Form>
    </>
  );
}

export default Signup;
