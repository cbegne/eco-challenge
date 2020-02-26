import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Container,
  Form,
  Button,
  ReturnButton,
} from './ChallengeSecondStep.style.js';

export const ChallengeSecondStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data second step', data);
    saveAndNextStep(data);
  };

  console.log(errors);

  return (
    <Container>
      <ReturnButton onClick={returnToPreviousStep}>Retour</ReturnButton>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div>Etape 2</div>

        <Button type="submit">Continuer</Button>
      </Form>
    </Container>
  );
};
