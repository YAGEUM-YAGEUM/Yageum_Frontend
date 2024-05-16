import styled from 'styled-components';

interface InputFieldProps {
  unit: string;
}

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin: 0px 15px;
`;
const Input = styled.input`
  background-color: transparent;
  width: 100px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  padding-left: 20px;
  text-align: right;
  padding-right: 40px; /* 공간 확보 */
`;
const Unit = styled.div`
  position: absolute;
  right: 10px;
  font-size: 16px;
  pointer-events: none;
`;

function InputField({ unit }: InputFieldProps) {
  return (
    <Wrapper>
      <Input />

      <Unit>{unit}</Unit>
    </Wrapper>
  );
}

export default InputField;
