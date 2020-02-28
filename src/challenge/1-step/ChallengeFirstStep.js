import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Form,
  Select,
  Subtext,
  FiguresBlock,
  Subtitle,
  FiguresItem,
  TopContainer,
  HowContainer,
  HowItem,
  HowText,
} from './ChallengeFirstStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ErrorMessage } from '../components/ErrorMessage';

export const ChallengeFirstStep = ({ saveAndNextStep, duration, name }) => {
  const numbers = [
    { id: 3, name: '3' },
    { id: 4, name: '4' },
    { id: 5, name: '5' },
    { id: 6, name: '6' },
    { id: 7, name: '7' },
  ];
  const [durationSaved, setDurationSaved] = useState(duration);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    const { name } = data;
    saveAndNextStep({ name, duration: durationSaved });
  };

  return (
    <>
      <TopContainer>
        <img src="/img/baslessteaks.png" alt="title" />
        <Subtitle>LE CHALLENGE</Subtitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <span>Je défie </span>
          <Input
            name="name"
            defaultValue={name}
            ref={register({
              required: { value: true, message: 'Le prénom est obligatoire.' },
              maxLength: {
                value: 10,
                message: 'Le prénom ne peut pas dépasser 10 caractères',
              },
              pattern: {
                value: /^[A-Z][A-Za-zéèê-]+$/i,
                message: 'Le prénom n’est pas valide',
              },
            })}
            placeholder="Michel"
          />
          <br />
          <span> de se passer de viande pendant </span>
          <Select
            name="duration"
            onChange={e => setDurationSaved(e.target.value)}
            value={durationSaved}
          >
            {numbers.map(({ id, name }) => (
              <option value={id} key={id}>
                {name}
              </option>
            ))}
          </Select>
          <span> jours.</span>

          <div style={{ margin: '30px 0' }}>
            <ActionButton type="submit" color="#FF7793">
              SUIVANT
            </ActionButton>
          </div>
          <Subtext>Michel en sera-t-il capable ?</Subtext>
          {errors?.name?.type && errors?.name?.message && (
            <ErrorMessage>{errors.name.message}</ErrorMessage>
          )}
        </Form>
      </TopContainer>
      <FiguresBlock>
        <FiguresItem>
          <div>
            <img src="/img/home1.png" alt="-50%" />
          </div>
          <span style={{ marginLeft: '10px' }}>
            D’émissions de CO2 alimentaire pendant le défi
          </span>
        </FiguresItem>
        <FiguresItem>
          <div style={{ width: '30%' }}>
            <img src="/img/home2.png" alt="2/3" />
          </div>
          <span style={{ marginLeft: '10px' }}>
            Des participants diminuent leur consommation de viande après le défi
          </span>
        </FiguresItem>
        <FiguresItem>
          <div style={{ width: '25%' }}>
            <img src="/img/home3.png" alt="743" />{' '}
          </div>
          <span style={{ marginLeft: '10px' }}>
            Steaks épargnés depuis le lancement  de Bas Les Steaks
          </span>
        </FiguresItem>
      </FiguresBlock>
      <HowContainer>
        <img
          src="/img/commentmarche.png"
          alt="comment"
          style={{ margin: 'auto' }}
        />
        <HowItem>
          <img src="/img/angela.png" alt="angela" />
          <img
            src="/img/1.png"
            alt="1"
            style={{ marginTop: '-25px', marginBottom: '10px' }}
          />
          <HowText>
            Choisis ton poulain, une récompense et des supporters
          </HowText>
        </HowItem>
        <HowItem>
          <img src="/img/Harry.png" alt="harry" />
          <img
            src="/img/2.png"
            alt="2"
            style={{ marginTop: '-25px', marginBottom: '10px' }}
          />
          <HowText>
            Lance une conversation groupée, encourage et surveille ton ami.e
          </HowText>
        </HowItem>
        <HowItem>
          <img src="/img/lavache.png" alt="jc" />
          <img
            src="/img/3.png"
            alt="3"
            style={{ marginTop: '-25px', marginBottom: '10px' }}
          />
          <HowText>
            Donne ton verdict et mesure  l’impact environnemental
          </HowText>
        </HowItem>
      </HowContainer>
    </>
  );
};
