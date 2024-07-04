'use client';

import styled, { css } from 'styled-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 100vh;
  background-color: #ededed;
  overflow: hidden;
`;
const BoxCategory = styled.div`
  background-color: #ededed;
  height: 120px;
  border-bottom: solid 1px gray;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;
const Category = styled.button<{ active: boolean }>`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  margin-right: 5px;
  //animation 추가
  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      text-decoration: underline;
      text-decoration-thickness: 3px;
      text-underline-offset: 27px;
    `}
`;
const BoxContainer = styled.div`
  overflow-y: auto;
`;
const Box = styled.div`
  background-color: #ededed;
  height: 200px;
  padding-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  /* justify-content: center; */
`;
const Img = styled.div`
  width: 140px;
  height: 140px;
  background-color: gray;
  border: solid 0.5px black;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-bottom: auto;
  margin-top: 40px;
  gap: 18px;
`;
const Price = styled.div`
  font-size: large;
  font-weight: 600;
`;
const Information = styled.div`
  font-size: medium;
`;
const Etc = styled.div`
  font-size: small;
  // flex-wrap 설정해주기
`;
const categories = [
  { label: '전체 매물', id: 1 },
  { label: '관심있는 매물', id: 2 },
];

export default function leftBoard() {
  const [activeCategory, setActive] = useState(categories[0].id);
  const router = useRouter();
  return (
    <Container>
      <BoxCategory>
        {categories.map((category) => (
          <Category
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActive(category.id)}
          >
            {category.label}
          </Category>
        ))}
      </BoxCategory>
      <BoxContainer>
        <Box onClick={() => router.push('/house')}>
          <Img></Img>
          <Description>
            <Price>월세 | 가격 / 가격</Price>
            <Information>오피스텔 | 건물 정보</Information>
            <Etc>층수, 넓이, 관리비 등의 기타 정보</Etc>
          </Description>
        </Box>
        <Box>
          <Img></Img>
          <Description>
            <Price>월세 | 가격 / 가격</Price>
            <Information>오피스텔 | 건물 정보</Information>
            <Etc>층수, 넓이, 관리비 등의 기타 정보</Etc>
          </Description>
        </Box>
        <Box>
          <Img></Img>
          <Description>
            <Price>월세 | 가격 / 가격</Price>
            <Information>오피스텔 | 건물 정보</Information>
            <Etc>층수, 넓이, 관리비 등의 기타 정보</Etc>
          </Description>
        </Box>
        <Box>
          <Img></Img>
          <Description>
            <Price>월세 | 가격 / 가격</Price>
            <Information>오피스텔 | 건물 정보</Information>
            <Etc>층수, 넓이, 관리비 등의 기타 정보</Etc>
          </Description>
        </Box>
        <Box>
          <Img></Img>
          <Description>
            <Price>월세 | 가격 / 가격</Price>
            <Information>오피스텔 | 건물 정보</Information>
            <Etc>층수, 넓이, 관리비 등의 기타 정보</Etc>
          </Description>
        </Box>
        <Box>
          <Img></Img>
          <Description>
            <Price>월세 | 가격 / 가격</Price>
            <Information>오피스텔 | 건물 정보</Information>
            <Etc>층수, 넓이, 관리비 등의 기타 정보</Etc>
          </Description>
        </Box>
      </BoxContainer>
    </Container>
  );
}
