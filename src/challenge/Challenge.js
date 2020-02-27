import React, { useState } from 'react';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeSupporterStep } from './3-step/ChallengeSupporterStep';
import { ChallengeCoachStep } from './4-step/ChallengeCoachStep';
import { ChallengeContactStep } from './5-step/ChallengeContactStep';
import { Container, Page } from './Challenge.style';

export const Challenge = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState({
    challenged: { name: '', email: '', phone: '' },
    supporters: [],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 0,
    reward: '',
  });
  const saveAndNextStep = data => {
    console.log('main next step', data);
    setStep(prevState => prevState + 1);
    Object.keys(data).forEach(item =>
      setStatus(prevStatus => ({ ...prevStatus, [item]: data[item] })),
    );
    // save in local state
  };

  const returnToPreviousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const saveAndFinish = data => {
    console.log('main finish', data);
    // send to backend when finished
  };

  console.log('step & status', step, status);
  const { challenged } = status;
  return (
    <Container>
      <Page>
        {step === 1 && <ChallengeFirstStep saveAndNextStep={saveAndNextStep} />}
        {step === 2 && (
          <ChallengeRewardStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
            name={challenged.name}
          />
        )}
        {step === 3 && (
          <ChallengeSupporterStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
        {step === 4 && (
          <ChallengeCoachStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
        {step === 5 && (
          <ChallengeContactStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
      </Page>
    </Container>
  );
};
