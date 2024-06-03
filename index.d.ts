// TS컴파일러에게.. 전역 객체인 window의 ethereum 속성에 MetaMaskInpageProvider 타입의 값이 할당될 수 있도록 선언

import { MetaMaskInpageProvider } from '@metamask/providers';

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}
