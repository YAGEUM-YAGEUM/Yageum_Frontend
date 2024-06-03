import { useEffect, useState } from 'react';

const useWeb3 = () => {
  const [account, setAccount] = useState(null);

  // 프로미스 객체를 반환하므로 async-await
  const getChainId = async () => {
    const chainId = await window.ethereum.request({
      method: 'eth_chainId',
    });
    return chainId;
  };
  const getReqAccounts = async () => {
    const acc = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });
    return acc;
  };
  const addNetwork = async (chainId: string) => {
    const network = {
      chainId,
      chainName: 'yageumyageum',
      rpcUrls: ['http://127.0.0.1:8545'],
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
    };
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [network],
    });
  };

  useEffect(() => {
    console.log('들어왔오 useEffect랍니다 ~~~');
    const init = async () => {
      try {
        const targetChainId = '0x18db'; // 16진수로

        const chainId = await getChainId();
        if (targetChainId !== chainId) {
          addNetwork(targetChainId);
        }
        const [resultAccount] = await getReqAccounts(); // 결과물이 배열로 떨어져서 구조분해할당
        setAccount(resultAccount);
      } catch (e) {
        //    console.error(e.message);
        console.error('에러');
      }
    };
    // 메타마스크가 설치되있다면,
    if (typeof window.ethereum !== 'undefined') {
      console.log('installed');
      init();
    } else {
      // 설치 안 된사람에게 실행할 부분
      console.log('어??');
    }
  }, []);

  return [account];
};

export default useWeb3;
