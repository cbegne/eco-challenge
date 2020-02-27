import React, { useState } from 'react';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeSupporterStep } from './3-step/ChallengeSupporterStep';
import { ChallengeCoachStep } from './4-step/ChallengeCoachStep';
import { ChallengeContactStep } from './5-step/ChallengeContactStep';
import { ChallengeFinalStep } from './6-step/ChallengeFinalStep';
import { Container, Page } from './Challenge.style';

export const Challenge = () => {
  const [step, setStep] = useState(6);
  const [status, setStatus] = useState({
    challenged: { name: '', email: '', phone: '' },
    supporters: [],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 0,
    reward: '',
  });
  const goNext = () => setStep(prevState => prevState + 1);

  const saveAndNextStep = data => {
    console.log('main next step', data);
    goNext();
    Object.keys(data).forEach(item =>
      setStatus(prevStatus => ({ ...prevStatus, [item]: data[item] })),
    );
  };

  const saveSupportersAndNextStep = ({ challenger, supporters }) => {
    console.log('main supporter next step', challenger, supporters);
    goNext();
    setStatus(prevStatus => ({ ...prevStatus, challenger, supporters }));
  };

  const returnToPreviousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const saveAndFinish = data => {
    console.log('main finish', data);
    goNext();
    // send to backend when finished
  };

  console.log('step & status', step, status);
  const { challenged, duration, reward } = status;
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
            saveAndNextStep={saveSupportersAndNextStep}
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
            saveAndNextStep={saveAndFinish}
            returnToPreviousStep={returnToPreviousStep}
            name={challenged.name}
          />
        )}
        {step === 6 && (
          <ChallengeFinalStep
            returnToPreviousStep={returnToPreviousStep}
            name={challenged.name}
            duration={duration}
            reward={reward}
          />
        )}
      </Page>
    </Container>
  );
};
