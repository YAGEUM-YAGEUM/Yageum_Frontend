'use client';

import FirstStep from './firstStep/page';

// import { useState } from 'react';
// import useFunnel from 'next-use-funnel';
// import { atom, useSetAtom } from 'jotai';
// import {secondStep} from "./secondStep";
// import {thirdStep} from "./thirdStep";
// import {fourthStep} from "./fourthStep";
// import {endStep} from "./endStep";
// import { sendGAEvent } from "@next/third-parties/google";

export type FunnelState = {
  name: string;
  phone: string;
};
function RegisterFunnel() {
  //   const [Funnel, state, setState] = useFunnel([ 'first' , 'second' , 'third' , 'fourth' , 'end'] as const, {
  //     initialStep: 'first',
  //     onStepChange : (step) => sendGAEvent({event : "funnel_Step", step })
  //   }).withState<FunnelState>({});

  //   const [step, setStep] = useState<
  //     'first' | 'second' | 'third' | 'fourth' | 'end'
  //   >('first');
  return <FirstStep />;
}

export default RegisterFunnel;
