import { useState, FormEvent } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px; /* 최대 너비 설정 */
  margin: 60px auto;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px; /* 입력 텍스트 크기 */
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

function SignupPage() {
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [interestedRegion, setInterestedRegion] = useState<string>('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({
      email,
      id,
      password,
      name,
      birthDate,
      phoneNumber,
      interestedRegion,
    });
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
        <Button type="submit">가입 완료</Button>
      </Form>
    </>
  );
}

export default SignupPage;
