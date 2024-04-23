import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  margin-top: 20px;
  border: 1px solid;
  width: 220px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 120px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.5;
`;

const HeartButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: 2px solid;
  border-color: ${(props) => (props.liked ? 'red' : 'gray')};
  border-radius: 50%; /* 원형 버튼 모양 */
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.liked ? 'red' : 'transparent')};
  transition:
    color 0.3s ease,
    border-color 0.3s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  border-top: 1px solid;
`;

const Text = styled.p`
  color: ${(props) => props.color || 'black'};
  font-size: 12px;
`;

const Title = styled.h4``;

function Sale() {
  const [liked, setLiked] = useState(false);

  return (
    <Container>
      <ImageContainer>
        <Image src="apartment.jpg" alt="부동산 사진" />
        <HeartButton
          onClick={() => setLiked(!liked)}
          liked={liked}
          aria-label="like button"
        >
          ❤️
        </HeartButton>
      </ImageContainer>

      <ContentContainer>
        <Text>오피스텔 | 건물 정보 | 지역 이름</Text>
        <Title>월세 | 가격 / 가격</Title>
        <Text color="gray">층수, 넓이, 관리비 등의 기타 정보</Text>
      </ContentContainer>
    </Container>
  );
}

export default Sale;
