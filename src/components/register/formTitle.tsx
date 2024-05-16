import styled from 'styled-components';

const Title = styled.div`
  width: 70px;
  font-size: 13px;
  font-weight: 600;
  margin-right: 30px;
  margin-left: 5px;
`;
interface FormTitleProps {
  title: string; // 문자열을 props로 받음
}

function FormTitle({ title }: FormTitleProps) {
  return <Title>{title}</Title>;
}

export default FormTitle;
