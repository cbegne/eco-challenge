import React, { useState } from 'react';
import {
  Label,
  Radio,
  Selection,
  Block,
  Image,
  Name,
  Column,
} from './ChallengeCoachStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Form } from '../components/Form';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { ButtonBlock } from '../components/ButtonBlock';
import { coachList } from '../../constants';

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

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Title>Choisis un.e coach qui lui correspond !</Title>
        <Subtitle>
          Nos coachs seront là pour conseiller et motiver Michel tout au long du
          challenge.
        </Subtitle>
        <Block>
          {coachList.map(({ id, name, src }) => (
            <Column>
            <Selection key={name}>
              <Radio
                id={id}
                name="coach"
                type="radio"
                value={id}
                checked={coachSaved === id}
                onClick={() => setCoachSaved(id)}
              />
              <Label htmlFor={id}>
                <Image src={src} />
                <Name>{name}</Name>
              </Label>
            </Selection>
            </Column>
          ))}
        </Block>
        <ButtonBlock>
          <ReturnButton onClick={returnToPreviousStep} />
          <ActionButton type="submit">SUIVANT</ActionButton>
        </ButtonBlock>
      </Form>
    </FormContainer>
  );
};
