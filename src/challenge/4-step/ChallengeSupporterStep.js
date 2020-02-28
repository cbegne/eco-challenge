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
  challenger,
  supporters,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const [supportersToCount, setSupportersToCount] = useState(supporters);
  const onSubmit = data => {
    console.log('data third step', data);
    const challenger = {
      name: data['name'],
      email: data['email'],
    };
    const supporters = supportersToCount.map((supporter, index) => ({
      name: data[`name-${index}`],
      email: data[`email-${index}`],
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
          name="name"
          ref={register}
          defaultValue={challenger.name}
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
          name="email"
          ref={register}
          defaultValue={challenger.email}
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
            index={index}
            key={index}
            supporters={supporters}
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

const InputGroupSupporter = ({ index, register, supporters }) => (
  <>
    <InputTop
      name={`name-${index}`}
      ref={register}
      defaultValue={supporters && supporters[index] && supporters[index].name}
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
      defaultValue={supporters && supporters[index] && supporters[index].email}
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
