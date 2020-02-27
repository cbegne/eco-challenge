import React from 'react';
import { useForm } from 'react-hook-form';
import { Input, Form, Select } from './ChallengeFirstStep.style.js';
import { ValidationButton } from '../components/ValidationButton';

export const ChallengeFirstStep = ({ saveAndNextStep, duration }) => {
  const numbers = {
    deux: 2,
    trois: 3,
    quatre: 4,
    cinq: 5,
    six: 6,
    sept: 7,
  };
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data first step', data);
    const { name, duration } = data;
    saveAndNextStep({ challenged: { name }, duration: numbers[duration] });
  };

  // console.log('errors', errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <span>Je défie </span>
      <Input
        name="name"
        ref={register}
        // ref={register({
        //   required: { value: true, message: 'Le prénom est obligatoire.' },
        //   maxLength: {
        //     value: 30,
        //     message: 'Le prénom ne peut pas dépasser 10 caractères',
        //   },
        //   pattern: {
        //     value: /^[A-Z][A-Za-z\é\è\ê\-]+$/i,
        //     message: 'Le prénom n’est pas valide',
        //   },
        // })}
        placeholder="Michel"
      />
      <br />
      <span> de se passer de viande pendant </span>
      <Select name="duration" ref={register}>
        <option name={2}>deux</option>
        <option name={3}>trois</option>
        <option name={4}>quatre</option>
        <option name={5}>cinq</option>
        <option name={6}>six</option>
        <option name={7}>sept</option>
      </Select>
      <span> jours.</span>
      {errors?.name?.type && errors?.name?.message && (
        <p>{errors.name.message}</p>
      )}
      <ValidationButton type="submit">Continuer</ValidationButton>
    </Form>
  );
};
