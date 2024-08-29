'use client';

import useFunnel from 'next-use-funnel';
import FirstStep from './firstStep/page';
import SecondStep from './secondStep/page';
import ThirdStep from './thirdStep/page';
import EndStep from './endStep/page';

export type FunnelState = {
  name: any;
};

export { FirstStep, SecondStep, ThirdStep, EndStep };

function RegisterFunnel() {
  const [Funnel, state, setState] = useFunnel(
    ['first', 'second', 'third', 'end'] as const,
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
        <ThirdStep next={() => setState({ step: 'end' })} />
      </Funnel.Step>
      <Funnel.Step name="end">
        <EndStep />
      </Funnel.Step>
    </Funnel>
  );
}

export default RegisterFunnel;
