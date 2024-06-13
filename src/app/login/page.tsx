'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { tenantLogin, lessorLogin } from '@/api/auth.api';
import { setAuthToken } from '@/api/chat.api';

const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 0px;
`;

const SubTitle = styled.h5`
  text-align: center;
  color: #535353;
`;

const Form = styled.form`
  display: flex;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  margin: 0 auto;
  gap: 12px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 12px;
  flex-grow: 1;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 12px;
  font-size: 16px;
  flex-grow: 1;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 700;
  width: 100%;
  justify-content: space-between;
`;

const LabelText = styled.span`
  min-width: 140px;
  display: inline-block;
`;

const PasswordInput = styled.input`
  padding: 10px;
  flex-grow: 1;
  border-radius: 12px;
  border: none;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #2400ff;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 12px;
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

const Text = styled.p`
  text-align: center;
  color: grey;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
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

function Login() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [role, setRole] = useState<string>('임차인'); // 기본값을 '임차인'으로 설정

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = {
        username,
        password,
      };

      let response;
      if (role === '임차인') {
        response = await tenantLogin(data);
      } else if (role === '임대인') {
        response = await lessorLogin(data);
      }

      if (response && response.success) {
        alert('로그인에 성공했습니다!');
        const { accessToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        setAuthToken(accessToken);
        // 성공 시 메인 페이지로 이동 등 추가 처리
      }
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <>
      <Title>로그인</Title>
      <SubTitle>서비스 이용을 위해 로그인 해주세요.</SubTitle>
      <Form onSubmit={handleSubmit}>
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
        <Label>
          <LabelText>아이디</LabelText>
        </Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Label>
          <LabelText>비밀번호</LabelText>
        </Label>
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
        <Button type="submit">로그인</Button>
        <Text>이메일 계정 찾기 | 비밀번호 찾기</Text>
      </Form>
    </>
  );
}

export default Login;
