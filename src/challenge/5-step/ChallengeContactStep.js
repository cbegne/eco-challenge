import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './ChallengeContactStep.style.js';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Title } from '../components/Title';

export const ChallengeContactStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data fifth step', data);
    saveAndNextStep(data);
  };

  // console.log(errors);

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Contacter le défié</Title>
        <Input name="mailChallenged" ref={register} placeholder="Email*" />
        <Input
          name="phoneChallenged"
          ref={register}
          placeholder="Numéro de téléphone*"
        />
        <Input name="twitterChallenged" ref={register} placeholder="@twitter" />
        <Input name="cityChallenged" ref={register} placeholder="Ville" />
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
