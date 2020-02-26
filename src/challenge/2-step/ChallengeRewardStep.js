import React from 'react';
import { useForm } from 'react-hook-form';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Input } from './ChallengeRewardStep.style.js';
import { Title } from '../components/Title';

export const ChallengeRewardStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { unregister, register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data second step', data);
    saveAndNextStep(data);
  };

  const onChangeInput = () => {
    unregister('reward');
    document.getElementById('beer').checked = false;
    document.getElementById('restaurant').checked = false;
  };

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>La récompense</Title>
        <input
          id="beer"
          name="reward"
          type="radio"
          value="beer"
          ref={register}
        />
        <label htmlFor="beer">Une bière</label>
        <input
          id="restaurant"
          name="reward"
          type="radio"
          value="restaurant"
          ref={register}
        />
        <label htmlFor="restaurant">Un restaurant</label>
        <Input
          name="otherReward"
          placeholder="Autre..."
          ref={register}
          onChange={onChangeInput}
        />
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
