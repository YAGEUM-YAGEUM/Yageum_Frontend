'use client';

import { useRouter } from 'next/navigation';

function ContractPage() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push('/contract', { scroll: false })}
    >
      계약서 띄우기›
    </button>
  );
}
export default ContractPage;
