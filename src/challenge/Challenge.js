import React, { useState } from 'react';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeCoachStep } from './3-step/ChallengeCoachStep';
import { ChallengeFatherStep } from './4-step/ChallengeFatherStep';
import { ChallengeFifthStep } from './5-step/ChallengeFifthStep';
import { Container, Page, PageCenter } from './Challenge.style';

export const Challenge = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState({
    name: '',
    numberOfDays: '',
    reward: '',
    otherReward: '',
    nameCoach: '',
    mailCoach: '',
    father: '',
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
  return (
    <Container>
      <Page>
        {step === 1 && <ChallengeFirstStep saveAndNextStep={saveAndNextStep} />}
        {step === 2 && (
          <ChallengeRewardStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
        {step === 3 && (
          <ChallengeCoachStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
        {step === 4 && (
          <ChallengeFatherStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
        {step === 5 && (
          <ChallengeFifthStep
            saveAndNextStep={saveAndNextStep}
            returnToPreviousStep={returnToPreviousStep}
          />
        )}
      </Page>
    </Container>
  );
};
