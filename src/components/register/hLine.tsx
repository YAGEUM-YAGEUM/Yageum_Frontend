import styled from 'styled-components';

const Line = styled.div`
  margin: 20px 0px;
  width: 500px;
  //width 조절
  background-color: #dfdfdf;
  border-radius: 50px;
  color: black;
  height: 1px;
`;
export default function HLine() {
  return <Line />;
}
