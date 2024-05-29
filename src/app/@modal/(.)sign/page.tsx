'use client';

import { useRef, useState } from 'react';
import Modal from '@/components/common/Modal';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import Spacer from '@/components/common/Spacer';
import Button from '@/components/common/Button';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.div`
  text-align: center;
  font-size: x-large;
  font-weight: bold;
`;

const Line = styled.hr`
  width: 600px;
`;
const CanvasWrapper = styled.div`
  /* border: 1px solid #848484; */
  background-color: black;
  width: 600px;
  height: 300px;
  border-radius: 10px;
`;
// const Signaturecanvas = styled(SignatureCanvas)`
//   width: 80%;
// `;
const CanvasButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;
const CanvasButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 15px;
`;
const CPlaceHolder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #d9d9d9;
  letter-spacing: 0.5px;
`;
function SignatureModal() {
  const sigCanvas = useRef<SignatureCanvas | null>(null);
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const clear = () => {
    sigCanvas.current?.clear();
  };

  const save = () => {
    if (sigCanvas.current) {
      const dataUrl = sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL('image/png');
      console.log(dataUrl);
      // You can also send this dataUrl to your server or use it in other ways
    }
  };

  return (
    <Modal>
      <Wrapper>
        {!isSigned && <CPlaceHolder>서명해주세요</CPlaceHolder>}
        <Spacer size={60} />

        <Title>서명하기</Title>
        <Spacer size={20} />

        <Line />
        <Spacer size={30} />

        <CanvasWrapper>
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{
              // width: 400,
              // height: 200,
              className: 'sigCanvas',
              style: {
                width: '100%',
                height: '100%',
                borderRadius: '10px',
                border: 'solid 1px #848484',
              },
            }}
            clearOnResize={false}
            backgroundColor="#F5F5F5"
            onBegin={() => {
              setIsSigned(true);
            }}
          />
        </CanvasWrapper>
        <Spacer size={20} />
        <CanvasButtonWrapper>
          <CanvasButton
            onClick={() => {
              clear();
              setIsSigned(false);
            }}
          >
            지우기
          </CanvasButton>
          <CanvasButton onClick={save}>저장하기</CanvasButton>
        </CanvasButtonWrapper>
        <Spacer size={20} />
        <Button width={110}>계약서 완성하기</Button>
      </Wrapper>
    </Modal>
  );
}
export default SignatureModal;
