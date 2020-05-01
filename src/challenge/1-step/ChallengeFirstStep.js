import React, { useState, useRef } from 'react';
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
  Title,
  TitleContainer,
} from './ChallengeFirstStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ErrorMessage } from '../components/ErrorMessage';
import { MainPadding } from '../components/MainPadding';
import { TitleSticker } from '../components/TitleSticker';
import { Logo } from '../components/Logo';
import AutosizeInput from 'react-input-autosize';
import coaches from './coaches.png';
import JCVD1 from './1JCVD.png';
import JCVD2 from './2JCVD.png';
import step3 from './step3.png';
import { Link } from 'react-router-dom';

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
  const onSubmit = (data) => {
    const { name } = data;
    saveAndNextStep({ name, duration: durationSaved });
  };
  const formRef = useRef(null);

  return (
    <>
      <TitleContainer>
        <MainPadding>
          <Logo />
          <Title style={{ marginBottom: '40px' }}>
            Le défi végé pour tes
            <br />
            potes carnivores
          </Title>
          <img
            src={coaches}
            style={{ marginBottom: '-5px', width: '100%', textAlign: 'center' }}
          />
          <ActionButton
            color="#FF7793"
            onClick={() => {
              window.scrollTo({
                top: formRef.current.offsetTop,
                left: 0,
                behavior: 'smooth',
              });
            }}
          >
            CRÉER TON DÉFI
          </ActionButton>
        </MainPadding>
      </TitleContainer>
      <HowContainer>
        <MainPadding>
          <TitleSticker style={{ marginTop: '40px' }}>
            Comment ça marche ?
          </TitleSticker>
          <HowItem>
            <img
              src={JCVD1}
              alt="JCVD1"
              style={{ width: '80%', marginTop: '40px' }}
            />
            <img
              src="/img/1.png"
              alt="1"
              style={{ marginTop: '-25px', marginBottom: '10px' }}
            />
            <HowText>
              Choisis ton poulain, la durée du défi et sa récompense
            </HowText>
          </HowItem>
          <HowItem>
            <img
              src={JCVD2}
              alt="2JCVD"
              style={{ width: '70%', maxWidth: '300px', marginBottom: '20px' }}
            />
            <HowText>
              Sélectionne son coach qui l'encouragera{' '}
              <span style={{ color: '#ff7592' }}>par SMS</span>
            </HowText>
          </HowItem>
          <HowItem>
            <img src={step3} alt="step3" style={{ width: '100%' }} />
            <HowText>
              Collecte les photos de tous ses repas et donne ton verdict&nbsp;!
            </HowText>
          </HowItem>
        </MainPadding>
      </HowContainer>
      <TopContainer ref={formRef}>
        <MainPadding>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <span>Je défie </span>
            <Input
              name="name"
              defaultValue={name}
              ref={register({
                required: {
                  value: true,
                  message: 'Le prénom est obligatoire.',
                },
                maxLength: {
                  value: 40,
                  message: 'Le prénom ne peut pas dépasser 40 caractères',
                },
              })}
              placeholder="Prénom"
            />
            <br />
            <span> de manger végétarien pendant </span>
            <Select
              name="duration"
              onChange={(e) => setDurationSaved(e.target.value)}
              value={durationSaved}
            >
              {numbers.map(({ id, name }) => (
                <option value={id} key={id}>
                  {name}
                </option>
              ))}
            </Select>
            <span> jours.</span>

            <ErrorMessage style={{ textAlign: 'center' }}>
              {errors?.name?.message}
            </ErrorMessage>

            <div style={{ margin: '30px 0' }}>
              <ActionButton type="submit" color="#FF7793">
                Suivant
              </ActionButton>
            </div>
          </Form>
        </MainPadding>
      </TopContainer>
      <FiguresBlock>
        <MainPadding>
          <FiguresItem>
            <div style={{ width: '27%' }}>
              <Figure>-50%</Figure>
            </div>
            <span style={{ marginLeft: '10px' }}>
              D’émissions de CO2 alimentaire pendant le défi (WWF)
            </span>
          </FiguresItem>
          <FiguresItem>
            <div style={{ width: '41%' }}>
              <Figure>2/3</Figure>
            </div>
            <span style={{ marginLeft: '10px' }}>
              Des participants diminuent leur conso de viande après avoir
              remporté le challenge.
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
        </MainPadding>
      </FiguresBlock>

      <WhyContainer>
        <MainPadding>
          <TitleSticker style={{ marginBottom: '40px' }}>
            Pourquoi on s’en bat
            <br />
            <span style={{ color: '#ff7592' }}>pas</span> les steaks ?
          </TitleSticker>
          À l’échelle mondiale, l’élevage émet aujourd’hui autant de gaz à effet
          de serre (14.5%) que les transports (14%) d’après la FAO. Il
          s’accompagne d’une consommation d’eau très importante (1400L pour 1kg
          de boeuf), accélère la déforestation et la pollution des sols, sans
          parler des souffrances animales engendrées.
          <br />
          <br /> Face à la crise climatique actuelle, chacun se demande comment
          agir à son échelle.
          <br />
          <br /> Alors que la culpabilisation et le découragement accompagnent
          parfois le discours écologique, nous croyons en un changement positif
          par le plaisir et le jeu, de manière collective et créative. <br />
          <br />
          Quoi de mieux qu’un défi en équipe pour explorer des alternatives à
          nos modes de vie traditionnels ? <br />
          <br />
          C’est l’objet de notre expérimentation, le Bas les Steaks Challenge.{' '}
          <br />
          <br />
          Alors, qui allez-vous défier ?
        </MainPadding>
      </WhyContainer>
      <AboutContainer>
        Cuisiné avec amour dans le sud de la France
        <br />
        <br />
        Instagram •{' '}
        <Link
          to="/about"
          style={{ color: 'black', textDecoration: 'underline' }}
        >
          A propos
        </Link>
        <br />
      </AboutContainer>
    </>
  );
};
