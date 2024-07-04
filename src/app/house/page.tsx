'use client';

import HLine from '@/components/register/hLine';
import styled from 'styled-components';

const Container = styled.div``;

const Gallery = styled.div`
  height: 300px;
  display: grid;
  grid-gap: 10px;

  grid-template-areas:
    'a b b'
    'a b b';
`;
const HeadImage = styled.div`
  background-color: black;
  width: 100px;

  height: 80px;
`;
const MoreImage = styled.div`
  background-color: red;
  width: 80px;

  height: 30px;
`;

const HeadImageStyle = styled(HeadImage)`
  grid-area: a;
`;
const MoreImageStyle = styled(MoreImage)`
  grid-area: b;
`;
const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Sub = styled.div`
  display: flex;
  flex-direction: row;
`;
const SubTitle = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const Content = styled.div`
  font-weight: 400;
  font-size: 18px;
`;
const Options = styled.div`
  display: flex;
  flex-direction: row;
`;
const Option = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: lightgray;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

function HouseDetailPage() {
  return (
    <Container>
      {/* 사진들 */}
      <HeadImageStyle />
      <MoreImageStyle />
      <MoreImageStyle />
      <MoreImageStyle />
      <Gallery />
      <HLine />
      <DetailContainer>
        <Details>
          {/* 정보박스 */}
          <DetailBox>
            <Title>가격 정보</Title>
            <Sub>
              <SubTitle>매물 형태</SubTitle>
              <Content>월세</Content>
            </Sub>
            <Sub>
              <SubTitle>월세</SubTitle>
              <Content>300 / 30 만원</Content>
            </Sub>
            <Sub>
              <SubTitle>관리비</SubTitle>
              <Content>7 만원</Content>
            </Sub>
          </DetailBox>
          <HLine />
          {/* ---- */}
          {/* 정보박스 */}
          <DetailBox>
            <Title>상세 정보</Title>
            <Sub>
              <SubTitle />
              <Content />
            </Sub>
          </DetailBox>
          <HLine />
          {/* ---- */}
          {/* 정보박스 */}
          <DetailBox>
            <Title>옵션</Title>
            <Options>
              <Option />
              <Option />
            </Options>
          </DetailBox>
          <HLine />
          {/* ---- */}
          {/* 정보박스 */}
          <DetailBox>
            <Title>상세 설명</Title>
            <Sub>
              <SubTitle />
              <Content />
            </Sub>
          </DetailBox>
          <HLine />
          {/* ---- */}
        </Details>
        <Card>
          <div>매물번호 | 00123456</div>
          <div>월세 가격 / 가격</div>
          <div>매물조회수 10000회 </div>
          <div>이것저것 정보들</div>
          <div>위치 | 서울특별시 서대문구 뭐시기</div>
          <div>방 개수 / 욕실 수 | 1개 / 1개</div>
          <div>매물 등록자 자윤님의 프로필 </div>
          <div>연락하기</div>
        </Card>
      </DetailContainer>
    </Container>
  );
}
export default HouseDetailPage;
