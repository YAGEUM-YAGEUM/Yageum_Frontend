import styled from 'styled-components';

interface NextButtonProps {
  onClick: () => void;
}

const Button = styled.button`
  margin-top: 20px;
  width: 160px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
`;

function NextButton({ onClick }: NextButtonProps) {
  return <Button onClick={onClick}>{'Next >'}</Button>;
}

export default NextButton;
