'use client';

import Modal from '@/components/common/Modal';
import { useEffect, useState } from 'react';
import useWeb3 from '@/hooks/contract/useWeb3';
import Web3 from 'web3'; // Web3를 가져와 사용
import { Contract } from 'web3-eth-contract';

type SendingData = {
  propertyAddress: string;
  deposit: number;
  rentAmount: number;
  specialTerms: string;
  lessorSignaturePad: string;
};

function CompletionModal() {
  const [web3, web3Account, contract] = useWeb3();
  const [account, setAccount] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [signature, setSignature] = useState<string | null>(null);

  // 계정 정보가 변경될 때 계정을 설정하고 로딩 상태를 업데이트
  useEffect(() => {
    if (web3Account && typeof web3Account === 'string') {
      setAccount(web3Account);
      setIsLoading(false);
    }
  }, [web3Account]);

  /// 계약서 전송 로직
  const sendContract = async () => {
    // localstorage 내부 데이터 변수로전송하기
    const formDataString = window.localStorage.getItem('contractFormData');
    const signaturepadString =
      window.localStorage.getItem('lessorSignaturePad');
    const sendingDataArray: SendingData[] = [];

    if (formDataString && signaturepadString) {
      const formData = JSON.parse(formDataString);

      // 객체를 배열에 추가
      sendingDataArray.push({
        ...formData,
        lessorSignaturePad: signaturepadString,
      });
    }
    console.log(sendingDataArray, '아악');
    // 구조분해 할당이라 sendingDataArray[0]에 접근
    if (sendingDataArray.length > 0) {
      const {
        propertyAddress,
        deposit,
        rentAmount,
        specialTerms,
        lessorSignaturePad,
      } = sendingDataArray[0];

      console.log(
        typeof propertyAddress,
        propertyAddress,
        typeof rentAmount,
        rentAmount,
        sendingDataArray[0],
        'GMR',
      );

      if (contract instanceof Contract && web3 instanceof Web3) {
        const tenantAddress = '0x9522762832215abfdD70F61B4651F61aF2B975eB';
        contract.methods
          .sendContract(
            tenantAddress,
            rentAmount,
            deposit,
            propertyAddress,
            specialTerms,
            lessorSignaturePad,
          )
          .send({
            from: account,
            gas: '7000000',
            // gasPrice: '200000000000',
            gasPrice: '200000000000',
          })
          .on('receipt', function (receipt) {
            // receipt example
            console.log(receipt);
          });
        // gasLimit => 사용할 가스의 최대량, gasPrice => 가스의 가격(Wei단위)
      } else {
        console.log('Contract 가 없습니다..');
      }
    }
  };
  useEffect(() => {
    const signMessage = async () => {
      if (web3 instanceof Web3 && account) {
        const message = '부동산 계약을 완료하기 위해 전자 서명을 해주세요. ';
        try {
          const eSignature = await web3.eth.personal.sign(message, account, '');
          setSignature(eSignature);
          console.log('전자서명 서명 완료:', eSignature);
          sendContract();
        } catch (error) {
          console.error('서명 실패:', error);
        }
      }
    };

    if (account) {
      signMessage();
    }
  }, [account, web3]);

  if (isLoading) {
    return <Modal>계약 완료를 위해 메타마스크 계정 연동 중...</Modal>;
  }

  return (
    <Modal>
      {account ? (
        <div>
          <div>{account} 계정이 연결되었습니다.</div>
          {signature ? (
            <div>서명: {signature}</div>
          ) : (
            <div>서명 요청 중...</div>
          )}
        </div>
      ) : (
        <div>계정 정보를 불러오지 못했습니다.</div>
      )}
    </Modal>
  );
}
export default CompletionModal;
