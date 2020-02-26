import React from 'react';
import { useForm } from 'react-hook-form';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import './challenge-reward.css';

export const ChallengeRewardStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { unregister, register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data second step', data);
    saveAndNextStep(data);
  };

  const onChange = () => {
    unregister('reward');
    document.getElementById('beer').checked = false;
    document.getElementById('restaurant').checked = false;
  };

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>Etape 2</div>

        <input
          id="beer"
          name="reward"
          type="radio"
          value="Une bière"
          ref={register}
        />
        <label htmlFor="beer">Une bière</label>

        <input
          id="restaurant"
          name="reward"
          type="radio"
          value="Un restaurant"
          ref={register}
        />
        <label htmlFor="restaurant">Un restaurant</label>

        <input
          name="otherReward"
          placeholder="Autre..."
          ref={register}
          onChange={onChange}
        />
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
