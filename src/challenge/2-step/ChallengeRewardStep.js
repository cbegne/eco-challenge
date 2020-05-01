import React, { useState } from 'react';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Label, Radio } from './ChallengeRewardStep.style.js';
import { Title } from '../components/Title';
import { ButtonBlock } from '../components/ButtonBlock';
import { rewards } from '../../constants';
import { MainPadding } from '../components/MainPadding';
import { ProgressBar } from '../components/ProgressBar';

export const ChallengeRewardStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  reward,
  name,
}) => {
  const [rewardSaved, setRewardSaved] = useState(reward);
  const onSubmit = (event) => {
    event.preventDefault();
    saveAndNextStep({ reward: rewardSaved });
  };
  return (
    <FormContainer>
      <MainPadding>
        <ProgressBar step={2} />
        <Form onSubmit={onSubmit}>
          <Title>
            Si {name} réussit,
            <br />
            je m’engage à lui offrir...
          </Title>
          {rewards.map(({ id, text, emoji }) => (
            <div key={id}>
              <Radio
                id={id}
                name="reward"
                type="radio"
                value={id}
                checked={rewardSaved === id}
                onChange={() => setRewardSaved(id)}
              />
              <Label htmlFor={id}>
                {emoji} {text}
              </Label>
            </div>
          ))}
          <ButtonBlock>
            <ReturnButton onClick={returnToPreviousStep} />
            <ActionButton type="submit" disabled={!rewardSaved}>
              Suivant
            </ActionButton>
          </ButtonBlock>
        </Form>
      </MainPadding>
    </FormContainer>
  );
};
