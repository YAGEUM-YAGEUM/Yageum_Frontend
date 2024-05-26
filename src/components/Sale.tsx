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
  border: none;
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: ${(props) => (props.liked ? 'red' : 'transparent')};
    stroke: ${(props) => (props.liked ? 'red' : 'gray')};
    stroke-width: 2px;
    transition:
      fill 0.3s ease,
      stroke 0.3s ease;
  }
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
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
