'use client';

import { useState, FormEvent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 60px auto;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;
const RadioButtonLabel = styled.label`
  margin: 0 10px;
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

function Signup() {
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [interestedRegion, setInterestedRegion] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
    } else {
      console.log({
        email,
        id,
        password,
        name,
        birthDate,
        phoneNumber,
        role,
        interestedRegion,
      });
    }
  };

  return (
    <>
      <Title>Logo</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          placeholder="이메일"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="text"
          value={id}
          placeholder="아이디"
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          value={password}
          placeholder="비밀번호"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          value={confirmPassword}
          placeholder="비밀번호 확인"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          type="text"
          value={name}
          placeholder="이름"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="date"
          value={birthDate}
          placeholder="생년월일"
          onChange={(e) => setBirthDate(e.target.value)}
        />

        <Input
          type="tel"
          value={phoneNumber}
          placeholder="휴대폰 번호"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Input
          type="text"
          value={interestedRegion}
          placeholder="관심 지역"
          onChange={(e) => setInterestedRegion(e.target.value)}
        />
        <div>
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
        </div>
        <Button type="submit">가입 완료</Button>
      </Form>
    </>
  );
}

export default Signup;
