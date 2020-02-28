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
import { ErrorMessage } from '../components/ErrorMessage';
import { coachList } from '../../constants';

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
    if (isValidPhoneNumber(phone)) {
      saveAndNextStep({ email: data.email, phone });
    } else {
      setHasError(true);
    }
  };

  const coachInfos = coachList.find(({ id, name }) => coach === id);

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
        <Input
          name="email"
          type="email"
          ref={register({
            required: { value: true, message: 'Le mail est obligatoire.' },
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
              message: 'L‘email n’est pas valide',
            },
          })}
          placeholder="Email*"
        />
        <Subinput>
          Pour lui envoyer des idées de recettes & bonnes astuces
        </Subinput>
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
        <Subinput>
          Pour que {coachInfos ? coachInfos.name : ''} puisse l'encourager par
          SMS !
        </Subinput>
        {errors?.email?.type && errors?.email?.message && (
          <ErrorMessage>{errors.email.message}</ErrorMessage>
        )}
        {hasError && (
          <ErrorMessage>Le numéro de téléphone n'est pas valide.</ErrorMessage>
        )}
        <ButtonBlock>
          <ReturnButton onClick={returnToPreviousStep} />
          <ActionButton type="submit">Suivant</ActionButton>
        </ButtonBlock>
      </Form>
    </FormContainer>
  );
};
