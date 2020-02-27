import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input, Form, Select } from './ChallengeFirstStep.style.js';
import { ActionButton } from '../components/ActionButton';

export const ChallengeFirstStep = ({ saveAndNextStep, duration, name }) => {
  const numbers = [
    { id: 2, name: 'deux' },
    { id: 3, name: 'trois' },
    { id: 4, name: 'quatre' },
    { id: 5, name: 'cinq' },
    { id: 6, name: 'six' },
    { id: 7, name: 'sept' },
  ];
  const [durationSaved, setDurationSaved] = useState(duration);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data first step', data);
    const { name } = data;
    saveAndNextStep({ name, duration: durationSaved });
  };

  // console.log('errors', errors);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <span>Je défie </span>
      <Input
        name="name"
        ref={register}
        defaultValue={name}
        // ref={register({
        //   required: { value: true, message: 'Le prénom est obligatoire.' },
        //   maxLength: {
        //     value: 10,
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
      <Select
        name="duration"
        ref={register}
        onChange={e => setDurationSaved(e.target.value)}
        defaultValue={durationSaved}
      >
        {numbers.map(({ id, name }) => (
          <option value={id} key={id}>
            {name}
          </option>
        ))}
      </Select>
      <span> jours.</span>
      {errors?.name?.type && errors?.name?.message && (
        <p>{errors.name.message}</p>
      )}
      <ActionButton type="submit">Continuer</ActionButton>
    </Form>
  );
};
