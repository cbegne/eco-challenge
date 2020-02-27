import React, { useState, useEffect } from 'react';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeSupporterStep } from './3-step/ChallengeSupporterStep';
import { ChallengeCoachStep } from './4-step/ChallengeCoachStep';
import { ChallengeContactStep } from './5-step/ChallengeContactStep';
import { ChallengeFinalStep } from './6-step/ChallengeFinalStep';
import { Container, Page } from './Challenge.style';
import { startChallenge } from './api';

export const Challenge = () => {
  const [step, setStep] = useState(4);
  const [status, setStatus] = useState({
    challenged: { name: '', email: '', phone: '' },
    supporters: [],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 0,
    reward: '',
  });
  const [idStart, setIdStart] = useState('');

  const goNext = () => setStep(prevState => prevState + 1);

  const returnToPreviousStep = () => {
    setStep(prevState => prevState - 1);
  };

  const saveAndNextStep = data => {
    Object.keys(data).forEach(item =>
      setStatus(prevStatus => ({ ...prevStatus, [item]: data[item] })),
    );
    goNext();
  };

  const saveNameAndDuration = ({ name, duration }) => {
    setStatus(prevStatus => ({
      ...prevStatus,
      challenged: { name, email: '', phone: '' },
      duration,
    }));
    goNext();
  };

  const saveSupportersAndNextStep = ({ challenger, supporters }) => {
    setStatus(prevStatus => ({ ...prevStatus, challenger, supporters }));
    goNext();
  };

  const saveAndFinish = ({ email, phone }) => {
    setStatus(prevStatus => ({
      ...prevStatus,
      challenged: {
        name: prevStatus.challenged.name,
        email: email,
        phone: phone,
      },
    }));
  };

  useEffect(() => {
    const sendData = async () => {
      const id = await startChallenge(status);
      setIdStart(id);
    };

    if (status.challenged.phone) {
      sendData();
    }
  }, [status.challenged.phone]);

  useEffect(() => {
    if (idStart) {
      goNext();
    }
  }, [idStart]);

  console.log('step & status', step, status);
  const { challenged, duration, reward } = status;
  return (
    <Container>
      <Page>
        {step === 1 && (
          <ChallengeFirstStep saveAndNextStep={saveNameAndDuration} />
        )}
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
            idStart={idStart}
          />
        )}
      </Page>
    </Container>
  );
};
