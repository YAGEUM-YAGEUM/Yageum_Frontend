import Link from 'next/link';
import styled from 'styled-components';

const SidebarContainer = styled.aside`
  width: 200px;
  margin: 20px 0px 0px 40px;
  border-radius: 10px;
  padding: 20px;
  background-color: #f5f5f5;

  h4 {
    text-align: left;
    color: #2400ff;
    padding-bottom: 20px;
    border-bottom: 1px solid #d9d9d9;
  }
  ul {
    padding: 0;
  }

  li {
    list-style: none;
    margin-bottom: 10px;
    text-align: left;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #848484;
  &:hover {
    text-decoration: underline;
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <nav>
        <h4>마이페이지</h4>
        <ul>
          <li>
            <StyledLink href="/mypage/phone">전화문의</StyledLink>
          </li>
          <li>
            <StyledLink href="/mypage/message">문자 문의</StyledLink>
          </li>
          <li>
            <StyledLink href="/mypage/chat">1:1 채팅 내역</StyledLink>
          </li>
          <li>
            <StyledLink href="/mypage/profile">내 정보</StyledLink>
          </li>
          <li>
            <StyledLink href="/mypage/properties">등록 매물</StyledLink>
          </li>
        </ul>
      </nav>
    </SidebarContainer>
  );
}

export default Sidebar;
