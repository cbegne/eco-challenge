import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeSupporterStep } from './3-step/ChallengeSupporterStep';
import { ChallengeCoachStep } from './4-step/ChallengeCoachStep';
import { ChallengeContactStep } from './5-step/ChallengeContactStep';
import { ChallengeFinalStep } from './6-step/ChallengeFinalStep';
import { startChallenge } from './api';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { yellow, white } from '../_variables';

export const Challenge = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState({
    challenged: { name: '', email: '', phone: '' },
    supporters: [{ email: '', name: '' }],
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
      setStatus(prevStatus => ({
        ...cloneDeep(prevStatus),
        [item]: data[item],
      })),
    );
    goNext();
  };

  const saveNameAndDuration = ({ name, duration }) => {
    setStatus(prevStatus => ({
      ...cloneDeep(prevStatus),
      challenged: { name, email: '', phone: '' },
      duration,
    }));
    goNext();
  };

  const saveSupportersAndNextStep = ({ challenger, supporters }) => {
    setStatus(prevStatus => ({
      ...cloneDeep(prevStatus),
      challenger,
      supporters,
    }));
    goNext();
  };

  const saveAndFinish = ({ email, phone }) => {
    setStatus(prevStatus => ({
      ...cloneDeep(prevStatus),
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
  const {
    challenged,
    challenger,
    duration,
    reward,
    supporters,
    coach,
  } = status;
  return (
    <>
      {step === 1 && (
        <Layout color={yellow} padding={0}>
          <Page>
            <ChallengeFirstStep
              saveAndNextStep={saveNameAndDuration}
              name={challenged.name}
              duration={duration}
            />
          </Page>
        </Layout>
      )}
      {step === 2 && (
        <Layout>
          <Page>
            <ChallengeRewardStep
              saveAndNextStep={saveAndNextStep}
              returnToPreviousStep={returnToPreviousStep}
              reward={reward}
              name={challenged.name}
            />
          </Page>
        </Layout>
      )}
      {step === 3 && (
        <Layout>
          <Page>
            <ChallengeSupporterStep
              saveAndNextStep={saveSupportersAndNextStep}
              returnToPreviousStep={returnToPreviousStep}
              challenger={challenger}
              supporters={supporters}
            />
          </Page>
        </Layout>
      )}
      {step === 4 && (
        <Layout>
          <Page>
            <ChallengeCoachStep
              saveAndNextStep={saveAndNextStep}
              returnToPreviousStep={returnToPreviousStep}
              coach={coach}
            />
          </Page>
        </Layout>
      )}
      {step === 5 && (
        <Layout>
          <Page>
            <ChallengeContactStep
              saveAndNextStep={saveAndFinish}
              returnToPreviousStep={returnToPreviousStep}
              name={challenged.name}
            />
          </Page>
        </Layout>
      )}
      {step === 6 && (
        <Layout>
          <Page>
            <ChallengeFinalStep
              returnToPreviousStep={returnToPreviousStep}
              name={challenged.name}
              duration={duration}
              reward={reward}
              idStart={idStart}
            />
          </Page>
        </Layout>
      )}
    </>
  );
};
