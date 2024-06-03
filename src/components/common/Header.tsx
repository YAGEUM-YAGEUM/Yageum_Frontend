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
  color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
`;

const SearchIcon = styled.svg`
  position: absolute;
  right: 10px;
  width: 16px;
  height: 16px;
  fill: #ccc;
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
      <SearchContainer>
        <SearchIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M21.53 20.47l-4.6-4.6a8.49 8.49 0 1 0-1.06 1.06l4.6 4.6a.75.75 0 0 0 1.06-1.06zM10.5 17a6.5 6.5 0 1 1 6.5-6.5 6.51 6.51 0 0 1-6.5 6.5z" />
        </SearchIcon>
        <SearchInput type="text" placeholder="검색어를 입력하세요." />
      </SearchContainer>
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
        <Link href="/guide">부동산 가이드</Link>
      </Navigation>
      <Navigation>
        <Link href="/qa">Q&A</Link>
      </Navigation>
      <UserContainer>
        <Button>
          <Link href="/login">로그인 </Link>
        </Button>
        |
        <Button>
          <Link href="/signup">회원가입</Link>
        </Button>
      </UserContainer>
    </HeaderContainer>
  );
}

export default Header;
