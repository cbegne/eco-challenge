import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './ChallengeFirstStep.style.js';
import { ValidationButton } from '../components/ValidationButton';
import { Form } from '../components/Form';
import { Title } from '../components/Title';

export const ChallengeFirstStep = ({ saveAndNextStep }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data first step', data);
    saveAndNextStep(data);
  };

  // console.log('errors', errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Je défie</Title>
      <Input
        name="nameChallenged"
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
        name="numberOfDays"
        ref={register}
        // ref={register({
        //   required: {
        //     value: true,
        //     message: 'Le nombre de jours est obligatoire.',
        //   },
        //   pattern: {
        //     value: /^[1-9]+$/i,
        //     message: 'Le nombre de jours n’est pas valide',
        //   },
        // })}
        placeholder="Nombre de jours"
      />
      {errors?.name?.type && errors?.name?.message && (
        <p>{errors.name.message}</p>
      )}
      {errors?.numberOfDays?.type && errors?.numberOfDays?.message && (
        <p>{errors.numberOfDays.message}</p>
      )}
      <ValidationButton type="submit">Continuer</ValidationButton>
    </Form>
  );
};
