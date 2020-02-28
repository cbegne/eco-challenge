import React, { useState } from 'react';
import {
  Label,
  Radio,
  Selection,
  Block,
  Image,
  Name,
  Column,
  SubName,
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
  const onSubmit = event => {
    event.preventDefault();
    saveAndNextStep({ coach: coachSaved });
  };

  const subtitleByCoach = {
    ANGELA: "La saucisse, c'est derrière moi",
    JCVD: 'Le mangeur de patates',
    MYLENE: "C'est une belle journée, je mange végééé",
    HUBERT: "J'aime me beurrer la biscotte au blé complet",
    OBAMA: 'Yes We Kale',
    JULIETTE: 'Fraîche comme la quatre fromage du dimanche après-midi',
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
                  <SubName>{coachSaved === id && subtitleByCoach[id]}</SubName>
                </Label>
              </Selection>
            </Column>
          ))}
        </Block>
        <ButtonBlock>
          <ReturnButton onClick={returnToPreviousStep} />
          <ActionButton type="submit" disabled={!coachSaved}>
            Suivant
          </ActionButton>
        </ButtonBlock>
      </Form>
    </FormContainer>
  );
};
