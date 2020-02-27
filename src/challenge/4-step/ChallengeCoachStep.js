import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Label,
  Radio,
  Selection,
  Block,
  Image,
} from './ChallengeCoachStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Title } from '../components/Title';

export const ChallengeCoachStep = ({
  saveAndNextStep,
  returnToPreviousStep,
}) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log('data fourth step', data);
    saveAndNextStep(data);
  };

  // console.log(errors);

  const fathersFirst = [
    'Jean-Claude Viandame',
    'Jean-Claude Viandam',
    'Jean-Claude Vianda',
    'Jean-Claude Vian',
    'Jean-Claude Via',
    'Jean-Claude Vi',
  ];

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Choisis un coach</Title>
        <Block>
          {fathersFirst.map(father => (
            <Selection key={father}>
              <Radio
                id={father}
                name="coach"
                type="radio"
                value={father}
                ref={register}
              />
              <Label htmlFor={father}>
                <div>{father}</div>
                <Image src="/img/JC.png" />
              </Label>
            </Selection>
          ))}
        </Block>
        <ActionButton type="submit">Continuer</ActionButton>
      </Form>
    </FormContainer>
  );
};
