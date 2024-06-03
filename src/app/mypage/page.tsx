'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 1;
`;

const Text = styled.h1`
  text-align: center;
`;

function MyPage() {
  return (
    <Container>
      <Main>
        <Text>마이페이지</Text>
      </Main>
    </Container>
  );
}

export default MyPage;

// import Link from 'next/link';
// import ContractForm from '@/components/contract/contractForm';

// Mypage -> 채팅 modal-> 계약서 modal
// 채팅 부분이 아직 되지 않아서 일단 계약서부터 개발 시작함.

// function MyPage() {
//   const router = useRouter();
//   return (
//     <button
//       type="button"
//       onClick={() => router.push('/contract', { scroll: false })}
//     >
//       계약서 띄우기›
//     </button>
//   );
// }

// export default MyPage;

//   {/* <button>
//   <Link href="/modal">계약하러가기</Link>
//   {/* 계약하러가기 ! */}
// </button> */}
