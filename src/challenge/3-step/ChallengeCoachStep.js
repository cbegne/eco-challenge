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
import { Subtitle } from '../components/Subtitle';
import { ButtonBlock } from '../components/ButtonBlock';

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
    { name: 'Jean-Claude Viandame', src: '/img/viandame.png' },
    { name: 'Angela Merkale', src: '/img/angela2.png' },
    { name: 'Mylène Fermière', src: '/img/mylene.png' },
    { name: 'Hubert Bonisseur de la Blette', src: '/img/oss.png' },
    { name: 'Barbaque Obame', src: '/img/barack.png' },
    // { name: 'Juliette Bidoche', src: '/img/' },
  ];

  return (
    <FormContainer>
      <Form onSubmit={onSubmit}>
        <Title>Choisis un.e coach qui lui correspond !</Title>
        <Subtitle>
          Nos coachs seront là pour conseiller et motiver Michel tout au long du
          challenge.
        </Subtitle>
        <Block>
          {list.map(({ name, src }) => (
            <Selection key={name}>
              <Radio
                id={name}
                name="coach"
                type="radio"
                value={name}
                checked={coachSaved === name}
                onClick={() => setCoachSaved(name)}
              />
              <Label htmlFor={name}>
                <Image src={src} />
                <div>{name}</div>
              </Label>
            </Selection>
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
