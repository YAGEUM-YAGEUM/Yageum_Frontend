import { useDaumPostcodePopup } from 'react-daum-postcode';
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  border-radius: 10px;
  width: 50px;
  height: 40px;
  margin-left: 20px;
  border: none;
  align-items: center;
  color: white;
  font-size: 10px;
`;
interface Props {
  scriptUrl: string;
  setAddressForm: any;
}
export default function SearchAddress({ scriptUrl, setAddressForm }: Props) {
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    console.log(fullAddress);

    // 주소값을 상태값으로..
    setAddressForm((prev: Props) => ({ ...prev, address: fullAddress }));
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    open({ onComplete: handleComplete });
    e.preventDefault();
  };
  return <Button onClick={handleClick}>검색하기</Button>;
}
