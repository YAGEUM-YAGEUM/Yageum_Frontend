import styled from 'styled-components';

const Button = styled.button`
  margin-top: 20px;
  width: 160px;
  height: 40px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 10px;
`;

function NextButton() {
  return <Button>{'Next >'}</Button>;
}

export default NextButton;
