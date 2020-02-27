import React from 'react';
import { useForm } from 'react-hook-form';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Label, Radio } from './ChallengeRewardStep.style.js';
import { Title } from '../components/Title';

export const ChallengeRewardStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log('data second step', data);
    saveAndNextStep(data);
  };

  const rewards = [
    { id: 'BEER', text: 'Une bière' },
    { id: 'RESTAURANT', text: 'Un restaurant' },
    { id: 'COOKIE', text: 'Un cookie' },
    { id: 'PATATE', text: 'Une patate' },
    { id: 'CALIN', text: 'Un câlin' },
  ];

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>En échange {name} sera récompensé par...</Title>
        {rewards.map(({ id, text }) => (
          <div key={id}>
            <Radio
              id={id}
              name="reward"
              type="radio"
              value={id}
              ref={register}
            />
            <Label htmlFor={id}>{text}</Label>
          </div>
        ))}
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
