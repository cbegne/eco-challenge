import React, { useState } from 'react';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Label, Radio } from './ChallengeRewardStep.style.js';
import { Title } from '../components/Title';

export const ChallengeRewardStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
  reward,
}) => {
  const [rewardSaved, setRewardSaved] = useState(reward);
  const onSubmit = () => {
    console.log('data second step');
    saveAndNextStep({ reward: rewardSaved });
  };

  const rewards = [
    { id: 'BEER', text: 'Une bière' },
    { id: 'RESTAURANT', text: 'Un resto' },
    { id: 'SURPRISE', text: 'Une surprise' },
    { id: 'GOUTER', text: 'Un goûter' },
    { id: 'QUINOA', text: 'Ton poids en quinoa' },
    { id: 'GATERIE', text: 'Une gâterie' },
  ];

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={onSubmit}>
        <Title>En échange {name} sera récompensé par...</Title>
        {rewards.map(({ id, text }) => (
          <div key={id}>
            <Radio
              id={id}
              name="reward"
              type="radio"
              value={id}
              checked={rewardSaved === id}
              onChange={() => setRewardSaved(id)}
            />
            <Label htmlFor={id}>{text}</Label>
          </div>
        ))}
        <ActionButton type="submit">Continuer</ActionButton>
      </Form>
    </FormContainer>
  );
};
