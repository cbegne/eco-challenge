import React, { useState, useEffect } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { ChallengeFirstStep } from './1-step/ChallengeFirstStep';
import { ChallengeRewardStep } from './2-step/ChallengeRewardStep';
import { ChallengeCoachStep } from './3-step/ChallengeCoachStep';
import { ChallengeSupporterStep } from './4-step/ChallengeSupporterStep';
import { ChallengeContactStep } from './5-step/ChallengeContactStep';
import { ChallengeFinalStep } from './6-step/ChallengeFinalStep';
import { ChallengeRuleStep } from './7-step/ChallengeRuleStep';
import { ChallengeCreatedStep } from './8-step/ChallengeCreatedStep';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { yellow } from '../_variables';

export const Challenge = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState({
    challenged: { name: '', phone: '' },
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

  const saveChallengerAndNextStep = ({ challenger }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      challenger,
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

  const saveSoloOrNotAndNextStep = ({ solo }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      solo,
    }));
    goNext();
  };

  const saveRulesAndNextStep = ({ challengeId }) => {
    setStatus((prevStatus) => ({
      ...cloneDeep(prevStatus),
      challengeId,
    }));
    goNext();
  };

  // useEffect(() => {
  //   if (idStart) {
  //     goNext();
  //   }
  // }, [idStart]);

  const { challenged, challenger, duration, reward, coach } = status;

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
              challenged={challenged}
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
      {step === 7 && (
        <Layout>
          <Page>
            <ChallengeRuleStep
              returnToPreviousStep={returnToPreviousStep}
              goNext={saveRulesAndNextStep}
              status={status}
            />
          </Page>
        </Layout>
      )}
      {step === 8 && (
        <Layout>
          <Page>
            <ChallengeCreatedStep status={status} />
          </Page>
        </Layout>
      )}
    </>
  );
};
