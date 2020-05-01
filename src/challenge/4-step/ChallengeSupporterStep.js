import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import {
  InputTop,
  InputBottom,
  AddButton,
  Label,
} from './ChallengeSupporterStep.style.js';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { ButtonBlock } from '../components/ButtonBlock';
import { ErrorMessage } from '../components/ErrorMessage';
import { MainPadding } from '../components/MainPadding';
import { ProgressBar } from '../components/ProgressBar';

export const ChallengeSupporterStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  challenged,
  challenger,
  supporters,
  name,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [supportersToCount, setSupportersToCount] = useState(supporters);
  const onSubmit = (data) => {
    const challenger = {
      name: data['name'],
      email: data['email'],
    };
    const supporters = supportersToCount
      .map((supporter, index) => ({
        name: data[`name-${index}`],
        email: data[`email-${index}`],
      }))
      .filter((supporter) => supporter.name !== '');
    saveAndNextStep({ challenger, supporters });
  };

  const createSupporter = () => {
    setSupportersToCount((prevState) => [
      ...prevState,
      { name: '', email: '' },
    ]);
  };

  return (
    <FormContainer>
      <MainPadding>
        <ProgressBar step={4} />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Qui lance ce Bas Les Steaks challenge&nbsp;?</Title>
          <InputTop
            name="name"
            defaultValue={challenger.name}
            ref={register({
              required: {
                value: true,
                message: 'Le prénom est obligatoire.',
              },
              maxLength: {
                value: 40,
                message: 'Le prénom ne peut pas dépasser 40 caractères',
              },
            })}
            placeholder="Ton prénom"
          />
          <InputBottom
            name="email"
            defaultValue={challenger.email}
            type="email"
            ref={register({
              required: { value: true, message: 'Le mail est obligatoire.' },
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                message: 'L’email n’est pas valide',
              },
            })}
            placeholder="Ton Email"
          />
          {errors?.name?.type && errors?.name?.message && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
          {errors?.email?.type && errors?.email?.message && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
          <Label>
            Tu recevras un email dès que {challenged.name} aura accepté le défi
            et pour donner ton verdict final&nbsp;!
          </Label>
          {/* <div>
            <br />
            Rajoute jusqu'à 3 supporters qui soutiendront {name} avec toi dans
            une conversation groupée.
          </div>
          {supportersToCount.map((supporter, index) => (
            <InputGroupSupporter
              register={register}
              index={index}
              key={index}
              supporters={supporters}
              errors={errors}
              required={index === 0}
            />
          ))}
          {supportersToCount.length < 3 && (
            <AddButton type="button" onClick={createSupporter}>
              Ajouter un supporter
            </AddButton>
          )} */}
          <br />
          <br />
          <br />
          <ButtonBlock>
            <ReturnButton onClick={returnToPreviousStep} />
            <ActionButton type="submit">Suivant</ActionButton>
          </ButtonBlock>
        </Form>
      </MainPadding>
    </FormContainer>
  );
};

const InputGroupSupporter = ({
  index,
  register,
  supporters,
  errors,
  required,
}) => (
  <>
    <Label>Les informations d’une personne qui va t’aider</Label>
    <InputTop
      name={`name-${index}`}
      defaultValue={supporters && supporters[index] && supporters[index].name}
      ref={register({
        required: { value: required, message: 'Le prénom est obligatoire.' },
        maxLength: {
          value: 20,
          message: 'Le prénom ne peut pas dépasser 20 caractères',
        },
        pattern: {
          value: /^[A-Z][A-Za-zéèê-]+$/i,
          message: 'Le prénom n’est pas valide',
        },
      })}
      placeholder="Prénom"
    />
    <InputBottom
      name={`email-${index}`}
      defaultValue={supporters && supporters[index] && supporters[index].email}
      type="email"
      ref={register({
        pattern: {
          value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
          message: 'L‘email n’est pas valide',
        },
      })}
      placeholder="Email"
    />
    {index === 0 && errors && errors['name-0'] && (
      <ErrorMessage>
        Rajoute au moins un.e supporter. Promis pas de spam.
      </ErrorMessage>
    )}
    {index === 0 && errors && errors['name-0'] && !errors['email-0'] && (
      <ErrorMessage>{errors['name-0'].message}</ErrorMessage>
    )}
    {index === 0 && errors && !errors['name-0'] && errors['email-0'] && (
      <ErrorMessage>{errors['email-0'].message}</ErrorMessage>
    )}
    {index > 0 &&
      errors &&
      errors[`name-${index}`] &&
      errors[`name-${index}`].type &&
      errors[`name-${index}`].message && (
        <ErrorMessage>{errors[`name-${index}`].message}</ErrorMessage>
      )}
    {index > 0 &&
      errors &&
      errors[`email-${index}`] &&
      errors[`email-${index}`].type &&
      errors[`email-${index}`].message && (
        <ErrorMessage>{errors[`email-${index}`].message}</ErrorMessage>
      )}
  </>
);
