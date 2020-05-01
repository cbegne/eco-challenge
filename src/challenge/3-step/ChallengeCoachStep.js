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
import { MainPadding } from '../components/MainPadding';
import { ProgressBar } from '../components/ProgressBar';

export const ChallengeCoachStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  coach,
  name,
}) => {
  const [coachSaved, setCoachSaved] = useState(coach);
  const onSubmit = (event) => {
    event.preventDefault();
    saveAndNextStep({ coach: coachSaved });
  };

  const subtitleByCoach = {
    ANGELA: "La saucisse, c'est derrière moi",
    JCVD: 'Le mangeur de patates',
    MYLENE: "C'est une belle journée, je mange végééé 🎵",
    HUBERT: "J'aime me beurrer la biscotte au blé complet",
    OBAMA: 'Yes We Kale',
    JULIETTE: 'Fraîche comme un smoothie aux fruits de saison',
  };

  return (
    <FormContainer>
      <MainPadding>
        <ProgressBar step={3} />
        <Form onSubmit={onSubmit}>
          <Title>Qui coachera {name} par sms&nbsp;?</Title>
          <Subtitle>
            Nos coachs seront là pour conseiller et motiver {name} tout au long
            du challenge.
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
                    <Name style={{ color: coachSaved === id ? 'white' : '' }}>
                      {name}
                    </Name>
                    <SubName
                      style={{ color: coachSaved === id ? '#370972' : '' }}
                    >
                      {subtitleByCoach[id]}
                    </SubName>
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
      </MainPadding>
    </FormContainer>
  );
};
