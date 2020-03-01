import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Input,
  Form,
  Select,
  Subtext,
  FiguresBlock,
  FiguresItem,
  Figure,
  TopContainer,
  HowContainer,
  HowItem,
  HowText,
  Text,
  WhyContainer,
  AboutContainer,
} from './ChallengeFirstStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ErrorMessage } from '../components/ErrorMessage';
import { TitleSticker } from '../components/TitleSticker';
import { Logo } from '../components/Logo';
import AutosizeInput from 'react-input-autosize';

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
        <Logo />
        <Text>
          Fais découvrir l'alimentation
          <br />
          végétarienne à ceux qui ne
          <br />
          s'en croient pas capables
        </Text>
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
            placeholder=". . ."
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
              Suivant
            </ActionButton>
          </div>
          {errors?.name?.type && errors?.name?.message && (
            <ErrorMessage style={{ textAlign: 'center' }}>{errors.name.message}</ErrorMessage>
          )}
        </Form>
      </TopContainer>
      <FiguresBlock>
        <FiguresItem>
          <div style={{ width: '27%' }}>
            <Figure>-50%</Figure>
          </div>
          <span style={{ marginLeft: '10px' }}>
            D’émissions de CO2 alimentaire pendant le défi (WWF)
          </span>
        </FiguresItem>
        <FiguresItem>
          <div style={{ width: '27%' }}>
            <Figure>2/3</Figure>
          </div>
          <span style={{ marginLeft: '10px' }}>
            Steaks épargnés depuis le lancement de Bas les Steaks.
          </span>
        </FiguresItem>
        <FiguresItem>
          <div style={{ width: '28%' }}>
            <Figure>743</Figure>
          </div>
          <span style={{ marginLeft: '10px' }}>
            Steaks épargnés depuis le lancement  de Bas Les Steaks
          </span>
        </FiguresItem>
      </FiguresBlock>
      <HowContainer>
        <TitleSticker style={{ marginBottom: '40px' }}>
          Comment ça marche ?
        </TitleSticker>
        <HowItem>
          <img src="/img/angela.png" alt="angela" style={{ width: '60%' }} />
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
          <img src="/img/Harry.png" alt="harry" style={{ width: '80%' }} />
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
          <img src="/img/lavache.png" alt="jc" style={{ width: '100%' }} />
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
      <WhyContainer>
        À l’échelle mondiale, l’élevage émet aujourd’hui autant de gaz à effet
        de serre (14.5%) que les transports (14%) d’après la FAO. Il
        s’accompagne d’une consommation d’eau très importante (1400L pour 1kg de
        boeuf), accélère la déforestation et la pollution des sols, sans parler
        des souffrances animales engendrées.
        <br />
        <br /> Face à la crise climatique actuelle, chacun se demande comment
        agir à son échelle.
        <br />
        <br /> Alors que la culpabilisation et le découragement accompagnent
        parfois le discours écologique, nous croyons en un changement positif
        par le plaisir et le jeu, de manière collective et créative. <br />
        <br />
        Quoi de mieux qu’un défi en équipe pour explorer des alternatives à nos
        modes de vie traditionnels ? <br />
        <br />
        C’est l’objet de notre expérimentation, le Bas les Steaks Challenge.{' '}
        <br />
        <br />
        Alors, qui allez-vous défier ?
      </WhyContainer>
      <AboutContainer>
        A propos
        <br />
        <br />
        Fait avec passion par
        <br />
        Mozza & Friends
        <br />
        salut@baslessteaks.org
      </AboutContainer>
    </>
  );
};
