import React from 'react';
import { useForm } from 'react-hook-form';
import { Form } from './ChallengeFourthStep.style.js';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';

export const ChallengeFourthStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data fourth step', data);
    saveAndNextStep(data);
  };

  console.log(errors); // gestion d'erreurs

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep}>Retour</ReturnButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>Etape 4</div>

        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
