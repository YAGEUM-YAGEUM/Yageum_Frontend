'use client';

import useFunnel from 'next-use-funnel';
import FirstStep from './firstStep/page';
import SecondStep from './secondStep/page';

// import { useState } from 'react';
// import { atom, useSetAtom } from 'jotai';
// import {secondStep} from "./secondStep";
// import {thirdStep} from "./thirdStep";
// import {fourthStep} from "./fourthStep";
// import {endStep} from "./endStep";
// import { sendGAEvent } from "@next/third-parties/google";

export type FunnelState = {
  name: any;
  // ?? 지금 어따 필요한 지 모르겠음 ㅜㅜ
};
export { FirstStep, SecondStep };
function RegisterFunnel() {
  const [Funnel, state, setState] = useFunnel(
    ['first', 'second', 'third'] as const,
    {
      initialStep: 'first',
      onStepChange: (step) => console.log(step),
    },
  ).withState<FunnelState>({});
  console.log(state);

  return (
    <Funnel>
      <Funnel.Step name="first">
        <FirstStep next={() => setState({ step: 'second' })} />
      </Funnel.Step>
      <Funnel.Step name="second">
        <SecondStep next={() => setState({ step: 'third' })} />
      </Funnel.Step>
    </Funnel>
  );
}

export default RegisterFunnel;
