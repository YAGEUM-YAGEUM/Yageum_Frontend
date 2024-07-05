'use client';

import HLine from '@/components/register/hLine';
import styled from 'styled-components';

const Container = styled.div`
  padding: 10px 10%;
`;

const Gallery = styled.div`
  margin: 50px;
  height: 300px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const HeadImage = styled.div`
  background-color: gray;
  margin-right: 20px;
  border-radius: 10px;
`;
const MoreImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
`;
const Images = styled.div`
  background-color: gray;
  border-radius: 10px;
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
  font-weight: 600;
  font-size: 25px;
  margin: 25px 0px;
`;

const Sub = styled.div`
  display: flex;
  flex-direction: row;
  margin: 9px 0px;
`;
const SubTitle = styled.div`
  font-weight: 400;
  font-size: 18px;
  width: 110px;
  text-align: justify;
  margin-right: 50px;
  /* white-space: nowrap; */

  &:after {
    content: ' ';
    letter-spacing: 10px;

    display: inline-block;
    width: 100%;
  }
`;
const Content = styled.div`
  font-weight: 300;
  font-size: 18px;
`;
const Options = styled.div`
  display: flex;
  // wrap 해서 다음 줄로 넘어가게끔!
  flex-wrap: wrap;
  width: 500px;
  /* word-break: break-all; */
`;
const Option = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: lightgray;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  width: 50vw;
`;

const Card = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 250px;
  flex-shrink: 0; /* Card 요소가 수축하지 않도록 설정*/

  background-color: white;
  box-shadow: 0px 0px 8px rgba(125, 125, 125, 0.3);
  height: 100%;
  border-radius: 10px;
  border: none;
  margin-left: auto;
`;
const HouseNum = styled.div`
  border: 1px solid black;
  border-radius: 13px;
  text-align: center;
  width: 50%;
  font-size: 12px;
  padding: 2px;
  font-weight: 500;
`;
const Price = styled.div`
  font-weight: 600;
  font-size: 25px;
  margin: 25px 0px 5px 0px;
`;
const Views = styled.div`
  font-weight: 400;
  font-size: 13px;
  color: #a9a9a9;
  margin-bottom: 15px;
`;

function HouseDetailPage() {
  return (
    <Container>
      <Gallery>
        <HeadImage />
        <MoreImages>
          <Images />
          <Images />
          <Images />
          <Images />
        </MoreImages>
      </Gallery>
      <HLine />
      <DetailContainer>
        <Details>
          {/* 정보박스 */}
          <DetailBox>
            <Title>가격 정보</Title>
            <Sub>
              <SubTitle>매물형태</SubTitle>
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
              <SubTitle>위 치</SubTitle>
              <Content>map 들어가야</Content>
            </Sub>
            <Sub>
              <SubTitle>전 용 면 적</SubTitle>
              <Content>10.15</Content>
            </Sub>
            <Sub>
              <SubTitle>층 수</SubTitle>
              <Content>15층 / 3층</Content>
            </Sub>
            <Sub>
              <SubTitle>방 수</SubTitle>
              <Content>1개</Content>
            </Sub>
            <Sub>
              <SubTitle>욕실 수</SubTitle>
              <Content>1개</Content>
            </Sub>
            <Sub>
              <SubTitle>주차 가능 여부</SubTitle>
              <Content>가능</Content>
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
              <Option />
              <Option />
              <Option />
              <Option />
            </Options>
          </DetailBox>
          <HLine />
          {/* ---- */}
          {/* 정보박스 */}
          <DetailBox>
            <Title>상세 설명</Title>
            <Description>
              안녕하세요 이 매물은 뭐시기 저시기구요 역세권이고 반경 100 미터
              안에 뭐시기뭐시기가 입점해있습니다. 교통이 편리하며 어쩌구저쩌구
              편하게 연락주세요!
            </Description>
          </DetailBox>
          <HLine />
          {/* ---- */}
        </Details>
        <Card>
          <HouseNum>매물번호 | 00123456</HouseNum>
          <Price>월세 가격 / 가격</Price>
          <Views>매물조회수 10000회 </Views>
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
