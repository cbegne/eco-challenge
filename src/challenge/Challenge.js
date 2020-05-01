import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeCoachStep } from './3-step/ChallengeCoachStep';
import { ChallengeSupporterStep } from './4-step/ChallengeSupporterStep';
import { ChallengeContactStep } from './5-step/ChallengeContactStep';
import { ChallengeFinalStep } from './6-step/ChallengeFinalStep';
import { startChallenge } from './api';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { yellow } from '../_variables';

export const Challenge = () => {
  const [step, setStep] = useState(6);
  const [status, setStatus] = useState({
    challenged: { name: '', phone: '' },
    supporters: [{ email: '', name: '' }],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 5,
    reward: '',
  });
  const [idStart, setIdStart] = useState('');

  const goNext = () => {
    setStep((prevState) => prevState + 1);
    window.scrollTo(0, 0);
  };

  const returnToPreviousStep = () => {
    setStep((prevState) => prevState - 1);
    window.scrollTo(0, 0);
  };

  const saveAndNextStep = (data) => {
    Object.keys(data).forEach((item) =>
      setStatus((prevStatus) => ({
        ...cloneDeep(prevStatus),
        [item]: data[item],
      })),
    );
    goNext();
  };

  const saveNameAndDuration = ({ name, duration }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      challenged: { name, phone: '' },
      duration,
    }));
    goNext();
  };

  const saveChallengerAndNextStep = ({ challenger, supporters }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      challenger,
      supporters,
    }));
    goNext();
  };

  const saveChallengedAndNextStep = ({ phone }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      challenged: {
        name: prevStatus.challenged.name,
        phone: phone,
      },
    }));
    goNext();
  };

  const saveSoloOrNotAndNextStep = ({ isSolo }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      isSolo,
    }));
    goNext();
  };

  // useEffect(() => {
  //   const sendData = async () => {
  //     const { id } = await startChallenge(status);
  //     setIdStart(id);
  //   };

  //   if (status.challenged.phone) {
  //     sendData();
  //   }
  // }, [status.challenged.phone]);

  useEffect(() => {
    if (idStart) {
      goNext();
    }
  }, [idStart]);

  const {
    challenged,
    challenger,
    duration,
    reward,
    supporters,
    coach,
  } = status;

  console.log('STATUS IS', status);
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
            <ChallengeCoachStep
              saveAndNextStep={saveAndNextStep}
              returnToPreviousStep={returnToPreviousStep}
              coach={coach}
              name={challenged.name}
            />
          </Page>
        </Layout>
      )}

      {step === 4 && (
        <Layout>
          <Page>
            <ChallengeContactStep
              saveAndNextStep={saveChallengedAndNextStep}
              returnToPreviousStep={returnToPreviousStep}
              name={challenged.name}
              coach={coach}
            />
          </Page>
        </Layout>
      )}
      {step === 5 && (
        <Layout>
          <Page>
            <ChallengeSupporterStep
              saveAndNextStep={saveChallengerAndNextStep}
              returnToPreviousStep={returnToPreviousStep}
              challenger={challenger}
              challenged={challenged}
              supporters={supporters}
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
              challenger={challenger}
              duration={duration}
              reward={reward}
              idStart={idStart}
              saveAndNextStep={saveSoloOrNotAndNextStep}
            />
          </Page>
        </Layout>
      )}
    </>
  );
};
