'use client';

import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import ContractForm from '@/components/contract/contractForm';

// Mypage -> 채팅 modal-> 계약서 modal
// 채팅 부분이 아직 되지 않아서 일단 계약서부터 개발 시작함.

function MyPage() {
  const router = useRouter();
  return (
    <button type="button" onClick={() => router.push('/contract')}>
      계약서 띄우기
    </button>
  );
}

export default MyPage;

//   {/* <button>
//   <Link href="/modal">계약하러가기</Link>
//   {/* 계약하러가기 ! */}
// </button> */}
