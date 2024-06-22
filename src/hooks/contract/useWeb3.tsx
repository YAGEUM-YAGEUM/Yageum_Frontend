import { useEffect, useState } from 'react';
import Web3, { ContractAbi } from 'web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '@/config';
import { Contract } from 'web3-eth-contract';

// type ContractAbi = any;
const useWeb3 = () => {
  const [account, setAccount] = useState<string | undefined>(undefined);
  const [web3, setWeb3] = useState<Web3 | undefined>(undefined);
  const [contract, setContract] = useState<Contract<ContractAbi> | undefined>(
    undefined,
  );

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
    return acc; // 메타마스크 계정 연결 popup 뜨고, account 리턴
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
    const init = async () => {
      try {
        const targetChainId = '0x18db'; // 16진수로

        const chainId = await getChainId();
        if (targetChainId !== chainId) {
          addNetwork(targetChainId);
        }
        const [resultAccount] = await getReqAccounts(); // 배열 구조분해할당
        const newWeb3 = new Web3(window.ethereum);
        setWeb3(newWeb3);
        setAccount(resultAccount);

        // contract 연결

        const RealEstateContract = new newWeb3.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS,
        );
        setContract(RealEstateContract);
      } catch (e: any) {
        console.error(e.message);
      }
    };
    // 메타마스크가 설치되있다면,
    if (typeof window.ethereum !== 'undefined') {
      console.log('metaMask가 설치되어있습니다. ');
      init();
    } else {
      // 설치 안 된사람에게 실행할 부분
      alert('원활한 계약을 위해 metamask를 설치해주십시오.');
    }
  }, []);
  return [web3, account, contract];
};

export default useWeb3;
