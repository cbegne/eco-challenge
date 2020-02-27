import React from 'react';
import { useForm } from 'react-hook-form';
import { Label, Selection, Block } from './ChallengeCoachStep.style.js';
import { ValidationButton } from '../components/ValidationButton';
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
  ];
  const fathersSecond = [
    'Jean-Claude Viand',
    'Jean-Claude Vian',
    'Jean-Claude Via',
  ];

  // 6 coachs

  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Le coach</Title>
        <Block>
          {fathersFirst.map(father => (
            <Selection key={father}>
              <input
                id={father}
                name="coach"
                type="radio"
                value={father}
                ref={register}
              />
              <Label htmlFor={father}>{father}</Label>
            </Selection>
          ))}
        </Block>
        <Block>
          {fathersSecond.map(father => (
            <Selection key={father}>
              <input
                id={father}
                name="coach"
                type="radio"
                value={father}
                ref={register}
              />
              <Label htmlFor={father}>{father}</Label>
            </Selection>
          ))}
        </Block>
        <ValidationButton type="submit">Continuer</ValidationButton>
      </Form>
    </FormContainer>
  );
};
