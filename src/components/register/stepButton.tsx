import styled from 'styled-components';

interface StepButtonProps {
  num: number;
}

const Button = styled.div`
  font-size: 15px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  width: 55px;
  padding: 3px;
  font-weight: 600;
  letter-spacing: 0.6px;
`;
function StepButton({ num }: StepButtonProps) {
  return <Button>step{num}.</Button>;
}
export default StepButton;
