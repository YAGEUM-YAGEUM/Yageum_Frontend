'use client';

import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';

export interface ChatModalProps {
  children: React.ReactNode;
  onClose: () => void; // 추가된 props
}
const ModalOuterWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
const ModalInnerWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 80vw;
  height: 80vh;
  overflow: auto;
`;
const CloseButton = styled.button`
  text-decoration: none;
  border: none;
  cursor: pointer;
  font-size: 13px;
  background: none;
  position: absolute;
  right: 10%;
`;

function ChatModal({ children, onClose }: ChatModalProps) {
  const clickedRef = useRef<EventTarget>();

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    clickedRef.current = e.target;
  }, []);

  const handleMouseUp = useCallback((e: React.MouseEvent<HTMLElement>) => {
    clickedRef.current = e.target;
  }, []);

  function handleClickClose(e: React.MouseEvent<HTMLElement>) {
    if (clickedRef.current) {
      clickedRef.current = undefined;
      return;
    }

    e.stopPropagation();
    onClose(); // onClose 함수 호출
  }

  return (
    // 모달 외부
    <ModalOuterWrapper onMouseUp={(e) => handleClickClose(e)}>
      {/* // 모달 내부 */}
      <ModalInnerWrapper
        onMouseDown={(e) => handleMouseDown(e)}
        onMouseUp={(e) => handleMouseUp(e)}
      >
        <CloseButton type="button" onClick={(e) => handleClickClose(e)}>
          X 닫기
        </CloseButton>
        {children}
      </ModalInnerWrapper>
    </ModalOuterWrapper>
  );
}

export default ChatModal;
