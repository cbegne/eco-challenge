import React, { useState } from 'react';
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
  coach,
}) => {
  const [coachSaved, setCoachSaved] = useState(coach);
  const onSubmit = () => {
    console.log('data fourth step');
    saveAndNextStep({ coach: coachSaved });
  };

  const list = [
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
      <Form onSubmit={onSubmit}>
        <Title>Choisis un coach</Title>
        <Block>
          {list.map(elem => (
            <Selection key={elem}>
              <Radio
                id={elem}
                name="coach"
                type="radio"
                value={elem}
                checked={coachSaved === elem}
                onClick={() => setCoachSaved(elem)}
              />
              <Label htmlFor={elem}>
                <div>{elem}</div>
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
