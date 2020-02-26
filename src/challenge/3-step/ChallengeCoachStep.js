import React from 'react';
import { useForm } from 'react-hook-form';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Input } from './ChallengeCoachStep.style.js';
import { Title } from '../components/Title';

export const ChallengeCoachStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data third step', data);
    saveAndNextStep(data);
  };

  // console.log(errors);

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Le coach</Title>
        <Input
          name="nameCoach"
          ref={register}
          // ref={register({
          //   required: { value: true, message: 'Le prénom est obligatoire.' },
          //   maxLength: {
          //     value: 30,
          //     message: 'Le prénom ne peut pas dépasser 30 caractères',
          //   },
          //   pattern: {
          //     value: /^[A-Z][A-Za-z\é\è\ê\-]+$/i,
          //     message: 'Le prénom n’est pas valide',
          //   },
          // })}
          placeholder="Prénom"
        />
        <Input
          name="mailCoach"
          ref={register}
          type="email"
          // ref={register({
          //   required: { value: true, message: 'Le mail est obligatoire.' },
          //   pattern: {
          //     value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
          //     message: 'L'email n’est pas valide',
          //   },
          // })}
          placeholder="Email"
        />
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
