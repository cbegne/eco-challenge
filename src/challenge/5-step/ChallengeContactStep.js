import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from './ChallengeContactStep.style.js';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';

export const ChallengeContactStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data fifth step', data);
    saveAndNextStep({
      challenged: { email: data.mail, phone: data.phone },
    });
  };

  // console.log(errors);

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Comment contacter {name} ?</Title>
        <Subtitle>xxx</Subtitle>
        <Input name="mail" ref={register} placeholder="Email*" />
        <Input
          name="phone"
          ref={register}
          // ref={register({
          //   required: {
          //     value: true,
          //     message: 'Le numéro de téléphone est obligatoire.',
          //   },
          //   pattern: {
          //     value: /^[+]?[0-9]{8,12}$/i,
          //     message: 'Le numéro de téléphone n’est pas valide',
          //   },
          // })}
          // placeholder="Numéro de téléphone*"
          // type="tel"
        />
        {/* <Input name="twitterChallenged" ref={register} placeholder="@twitter" />
        <Input name="cityChallenged" ref={register} placeholder="Ville" /> */}
        {errors?.phone?.type && errors?.phone?.message && (
          <p>{errors.phone.message}</p>
        )}
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
