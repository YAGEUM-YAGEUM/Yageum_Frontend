// components/Header.js 또는 Header.tsx
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  text-color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;

const UserContainer = styled.div`
  display: flex;
`;

const Navigation = styled.nav`
  a {
    margin-left: 20px;
    text-decoration: none;
    color: #007bff;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.button`
  border-style: none;
  background-color: transparent;
  border: 1px solid;

  a {
    color: inherit; // 버튼 색상 상속
    text-decoration: none; // 밑줄 없애기
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <Link href="/">YAGUEM YAGEUM</Link>
      </Logo>
      <Navigation>
        <Link href="/about">소개</Link>
      </Navigation>
      <Navigation>
        <Link href="/map">지도</Link>
      </Navigation>
      <Navigation>
        <Link href="/register">매물등록</Link>
      </Navigation>
      <Navigation>
        <Link href="/map">부동산 가이드</Link>
      </Navigation>
      <Navigation>
        <Link href="/map">Q&A</Link>
      </Navigation>
      <UserContainer>
        <Button>
          <Link href="/login">로그인</Link>
        </Button>
        <Button>
          <Link href="/signup">회원가입</Link>
        </Button>
      </UserContainer>
    </HeaderContainer>
  );
}

export default Header;
