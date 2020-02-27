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
} from './ChallengeSupporterStep.style.js';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';

export const ChallengeSupporterStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [supportersToCount, setSupportersToCount] = useState([
    { name: '', email: '' },
  ]);
  const onSubmit = data => {
    console.log('data third step', data);
    const challenger = {
      name: data['name-0'],
      email: data['email-0'],
    };
    const supporters = supportersToCount.map((supporter, index) => ({
      name: data[`name-${index + 1}`],
      email: data[`email-${index + 1}`],
    }));
    saveAndNextStep({ challenger, supporters });
  };

  const createSupporter = () => {
    setSupportersToCount(prevState => [...prevState, { name: '', email: '' }]);
  };

  // console.log(errors);

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Rassemble des supporters</Title>
        <Subtitle>
          Ajouter un supporter multiplie par 3 les chances de réussite d'un défi
        </Subtitle>
        <InputTop
          name="name-0"
          ref={register}
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
          placeholder="Ton prénom"
        />
        <InputBottom
          name="email-0"
          ref={register}
          // type="email"
          // ref={register({
          //   required: { value: true, message: 'Le mail est obligatoire.' },
          //   pattern: {
          //     value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
          //     message: 'L'email n’est pas valide',
          //   },
          // })}
          placeholder="Ton Email"
        />
        {supportersToCount.map((supporter, index) => (
          <InputGroupSupporter
            register={register}
            index={index + 1}
            key={index}
          />
        ))}
        {supportersToCount.length < 3 && (
          <AddButton type="button" onClick={createSupporter}>
            Ajouter un supporter
          </AddButton>
        )}
        <ActionButton type="submit">Continuer</ActionButton>
      </Form>
    </FormContainer>
  );
};

const InputGroupSupporter = ({ index, register }) => (
  <>
    <InputTop
      name={`name-${index}`}
      ref={register}
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
      placeholder="Prénom"
    />
    <InputBottom
      name={`email-${index}`}
      ref={register}
      // type="email"
      // ref={register({
      //   required: { value: true, message: 'Le mail est obligatoire.' },
      //   pattern: {
      //     value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      //     message: 'L'email n’est pas valide',
      //   },
      // })}
      placeholder="Email"
    />
  </>
);
