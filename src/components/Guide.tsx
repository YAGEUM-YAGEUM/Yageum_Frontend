import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid;
  border-radius: 16px;
  width: 210px;
  padding: 5px;
  text-align: left;
`;

const Text = styled.p`
  color: gray;
  font-size: 12px;
  text-align: left;
`;

const CategoryText = styled(Text)`
  border-bottom: 1px solid #000;
  font-size: 16px;
  display: inline-block;
`;

const Title = styled.h4`
  text-align: left;
  margin-top: 0px;
`;

function Guide() {
  return (
    <Container>
      <CategoryText>카테고리</CategoryText> {/* 수정된 스타일 컴포넌트 사용 */}
      <Title>
        부동산 가이드
        <br /> 꿀팁 제목
      </Title>
      <Text color="gray">자세히 보기 아이콘</Text>
    </Container>
  );
}

export default Guide;
