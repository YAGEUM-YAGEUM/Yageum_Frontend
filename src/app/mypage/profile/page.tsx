'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
  padding: 2rem;
`;

const Text = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const InfoContainer = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  padding: 2rem;
  border-radius: 8px;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const UserName = styled.h3`
  margin: 0;
`;

const UserRole = styled.div`
  margin-bottom: 2rem;
  color: gray;
`;

const InfoList = styled.div`
  text-align: left;
  margin: 0 auto;
  max-width: 400px;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  text-align: left;
  color: #b5b5b5;
  &:last-child {
    border-bottom: none;
  }
`;

const InfoLabel = styled.div`
  color: black;
`;

const InfoValue = styled.div``;

const EditButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 2rem;
`;

export default function Profile() {
  return (
    <Container>
      <Main>
        <Text>내 정보</Text>
        <InfoContainer>
          <ProfileImage
            src="https://via.placeholder.com/120"
            alt="Profile Image"
          />
          <UserName>USER 님</UserName>
          <UserRole>임차인</UserRole>
          <InfoList>
            <InfoItem>
              <InfoLabel>한줄소개</InfoLabel>
              <InfoValue>한줄소개를 입력해주세요</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>소개</InfoLabel>
              <InfoValue>소개를 입력해주세요</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>성명</InfoLabel>
              <InfoValue>김유저</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>나이</InfoLabel>
              <InfoValue>만 27 세</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>직업</InfoLabel>
              <InfoValue>대학생</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>자취 횟수</InfoLabel>
              <InfoValue>1번</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>관심 매물</InfoLabel>
              <InfoValue>월세</InfoValue>
            </InfoItem>
            <InfoItem>
              <InfoLabel>관심 지역</InfoLabel>
              <InfoValue>관심지역을 등록해주세요</InfoValue>
            </InfoItem>
          </InfoList>
          <EditButton>회원 가입 정보 수정하기 ﹥</EditButton>
        </InfoContainer>
      </Main>
    </Container>
  );
}
