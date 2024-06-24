'use client';

import useFunnel from 'next-use-funnel';
import FirstStep from './firstStep/page';
import SecondStep from './secondStep/page';
import ThirdStep from './thirdStep/page';

export type FunnelState = {
  name: any;
};

export { FirstStep, SecondStep, ThirdStep };

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
      <Funnel.Step name="third">
        <ThirdStep next={() => console.log('Third step complete')} />
      </Funnel.Step>
    </Funnel>
  );
}

export default RegisterFunnel;
