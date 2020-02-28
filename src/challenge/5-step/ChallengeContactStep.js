import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  Input,
  InputContainer,
  Subinput,
} from './ChallengeContactStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { ButtonBlock } from '../components/ButtonBlock';

export const ChallengeContactStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
  coach,
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
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          Comment contacter {name}
          {'\u00A0'}?
        </Title>
        <Subtitle>
          Personnalise son expérience pour mettre toutes les chances de son
          côté.
        </Subtitle>
        <Input name="email" ref={register} placeholder="Email*" />
        <Subinput>Pour lui envoyer des idées de recette</Subinput>
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
        <Subinput>Pour que {coach} puisse l'encourager par SMS !</Subinput>
        {/* <Input name="twitterChallenged" ref={register} placeholder="@twitter" />
        <Input name="cityChallenged" ref={register} placeholder="Ville" /> */}
        {hasError && <p>Le numéro de téléphone n'est pas valide</p>}
        <ButtonBlock>
          <ReturnButton onClick={returnToPreviousStep} />
          <ActionButton type="submit">SUIVANT</ActionButton>
        </ButtonBlock>
      </Form>
    </FormContainer>
  );
};
