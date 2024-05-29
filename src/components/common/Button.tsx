import styled from 'styled-components';

interface ButtonProps {
  width: number;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  children: string;
  type?: 'button' | 'submit' | 'reset'; // type 속성 추가
}
const ButtonWrapper = styled.div<ButtonProps>`
  height: 35px;
  width: ${({ width }) => width}px;
  cursor: pointer;
  border-radius: 10px;
  background-color: #2400ff;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 1px 10px;
  font-size: 12px;
  letter-spacing: 0.5px;
`;
function Button({ width, onClick, type, children }: ButtonProps) {
  return (
    <ButtonWrapper width={width} onClick={onClick} type={type}>
      {children}
    </ButtonWrapper>
  );
}
export default Button;
