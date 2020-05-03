import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  Input,
  InputContainer,
  Subinput,
  SmsImageContainer,
  SmsImage,
  SmsText,
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
import { ProgressBar } from '../components/ProgressBar';
import smsAngela from './sms-ANGELA.png';
import smsHubert from './sms-HUBERT.png';
import smsJCVD from './sms-JCVD.png';
import smsJuliette from './sms-JULIETTE.png';
import smsMylene from './sms-MYLENE.png';
import smsObama from './sms-OBAMA.png';

export const ChallengeContactStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
  coach,
}) => {
  const [phone, setPhone] = useState('');
  const [hasError, setHasError] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    if (isValidPhoneNumber(phone)) {
      console.log('LOLILOL');
      console.log(saveAndNextStep);
      saveAndNextStep({ phone });
    } else {
      setHasError(true);
    }
  };

  const coachInfos = coachList.find(({ id, name }) => coach === id);
  const smsImages = {
    ANGELA: smsAngela,
    HUBERT: smsHubert,
    JCVD: smsJCVD,
    JULIETTE: smsJuliette,
    MYLENE: smsMylene,
    OBAMA: smsObama,
  };
  const smsImage =
    coachInfos && coachInfos.id ? smsImages[coachInfos.id] : null;

  return (
    <FormContainer>
      <ProgressBar step={4} />

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>
          A quel numéro
          <br />
          {coachInfos ? coachInfos.firstName : ''} peut
          <br />
          contacter {name}
          {'\u00A0'}?
        </Title>
        <Subtitle>
          Dès que {name} aura accepté le défi,
          <br />
          {coachInfos ? coachInfos.firstName : ''} lui enverra son premier
          texto.
        </Subtitle>
        <SmsImageContainer>
          <SmsImage src={smsImage} />
          <SmsText>
          Tu relèves le défi! Bravo {name} 😃 Ici {coachInfos ? coachInfos.firstName : ''}. Pour te préparer, découvre les 5 erreurs à éviter : http://bit.ly/vegtip1
          </SmsText>
        </SmsImageContainer>
        <InputContainer>
          <PhoneInput
            name="phone"
            onChange={setPhone}
            value={phone}
            defaultCountry="FR"
            countries={['FR']}
            limitMaxLength
            addInternationalOption={false}
            placeholder={`Téléphone de ${name}`}
          />
        </InputContainer>
        <Subinput>
          {name} recevra en tout 5 textos de coaching.
          <br />
          Promis juré, pas de spam.
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
