import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { Input, InputContainer } from './ChallengeContactStep.style.js';
import { ActionButton } from '../components/ActionButton';
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
  const [phone, setPhone] = useState('');
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data fifth step', data, phone);
    if (isValidPhoneNumber(phone)) {
      saveAndNextStep({ email: data.email, phone });
    } else {
      setHasError(true);
    }
  };

  // console.log(errors);
  // console.log(phone);
  console.log(isValidPhoneNumber(phone));

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          Comment contacter {name}
          {'\u00A0'}?
        </Title>
        <Subtitle></Subtitle>
        <Input name="email" ref={register} placeholder="Email*" />
        <InputContainer>
          <PhoneInput
            name="phone"
            onChange={setPhone}
            value={phone}
            defaultCountry="FR"
            countries={['FR']}
            limitMaxLength
            addInternationalOption={false}
            placeholder="Numéro de téléphone*"
          />
        </InputContainer>
        {/* <Input name="twitterChallenged" ref={register} placeholder="@twitter" />
        <Input name="cityChallenged" ref={register} placeholder="Ville" /> */}
        {hasError && <p>Le numéro de téléphone n'est pas valide</p>}
        <ActionButton type="submit">Continuer</ActionButton>
      </Form>
    </FormContainer>
  );
};
