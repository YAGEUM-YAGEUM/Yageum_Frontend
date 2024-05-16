// import styled from 'styled-components';
import NextButton from '@/components/register/nextButton';
import Spacer from '@/components/common/Spacer';

// export interface secondValues {
//   active_floor: number;
//   total_floor: number;
//   location: string;
// }

function SecondStep({
  next,
}: {
  // defaultValues?: Partial<secondValues>;
  next: () => void;
}) {
  return (
    <>
      <Spacer size={20} />
      <NextButton onClick={next} />
      <Spacer size={80} />
    </>
  );
}
export default SecondStep;
