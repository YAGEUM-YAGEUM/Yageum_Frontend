'use client';

import { useRef } from 'react';
import Modal from '@/components/common/Modal';
import SignatureCanvas from 'react-signature-canvas';
import styled from 'styled-components';
import Spacer from '@/components/common/Spacer';

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
const Button = styled.button`
  margin: 5px;
`;
const Line = styled.hr`
  width: 80%;
`;
const CanvasWrapper = styled.div`
  border: 1px solid #848484;
  background-color: black;
  width: 80%;
  height: 300px;
  border-radius: 10px;
`;
// const Signaturecanvas = styled(SignatureCanvas)`
//   width: 80%;
// `;
function SignatureModal() {
  const sigCanvas = useRef<SignatureCanvas | null>(null);
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
        <Spacer size={80} />

        <Title>서명하기</Title>
        <Spacer size={20} />

        <Line />
        <Spacer size={20} />

        <CanvasWrapper>
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{
              // width: 400,
              // height: 200,
              className: 'sigCanvas',
              style: { width: '100%', height: '100%', borderRadius: '10px' },
            }}
            backgroundColor="#F5F5F5"
          />
        </CanvasWrapper>
        <Button onClick={clear}>지우기</Button>
        <Button onClick={save}>저장하기</Button>
      </Wrapper>
    </Modal>
  );
}
export default SignatureModal;
