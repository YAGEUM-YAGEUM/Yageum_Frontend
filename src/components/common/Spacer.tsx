import styled from 'styled-components';

// Vertical only
// Horizontal 은 굳이 만들지 않았음

interface SpacerProps {
  size: number;
}

const VerticalSpacer = styled.div<{ size: number }>`
  width: 100%;
  height: ${({ size }) => size}px;
`;

function Spacer({ size }: SpacerProps) {
  return <VerticalSpacer size={size} />;
}

export default Spacer;
