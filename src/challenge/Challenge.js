import React, { useState } from 'react';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeSecondStep } from './2-step/ChallengeSecondStep';
import { Container, Page } from './Challenge.style';

export const Challenge = () => {
  const [step, setStep] = useState(1);
  const saveAndNextStep = data => {
    console.log('main next step', data);
    setStep(prevState => prevState + 1);
    // save in local state
  };

  const returnToPreviousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const saveAndFinish = data => {
    console.log('main finish', data);
    // send to backend when finished
  };

  console.log('step', step);

  return (
    <Container>
      <Page>
        {step === 1 && <ChallengeFirstStep saveAndNextStep={saveAndNextStep} />}
        {step === 2 && (
          <ChallengeSecondStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
      </Page>
    </Container>
  );
};
