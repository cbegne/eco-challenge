import React from 'react';
import {
  TopContainer,
  Subtitle,
  SubtitleBottom,
  Container,
} from './CertificateSuccess.style.js';
import { Title } from '../challenge/components/Title';

export const CertificateSuccess = ({ infos }) => {
  const { length } = infos.supporters;

  return (
    <Container>
      <TopContainer>
        <Subtitle>Screenshot et partage</Subtitle>
      </TopContainer>
      <Title>
        J'ai réussi à manger végétarien pendant{' '}
        <span style={{ color: '#FF7793' }}>{infos.duration} jours</span>
      </Title>
      <img src="img/lavache.png" alt="challenge" style={{ width: '100%' }} />
      <img
        src="img/success.png"
        alt="accept"
        style={{ maxWidth: '200px', marginTop: '-100px' }}
      />
      <SubtitleBottom>
        Merci{' '}
        {length === 1
          ? `au supporter ${infos.supporters[0].name} `
          : `aux supporters ${infos.supporters[0].name}, ${
              infos.supporters[1].name
            }${infos.supporters[2] ? `, ${infos.supporters[2].name}` : ''} `}
        pour le soutien{'\u00A0'}💪
      </SubtitleBottom>
      <img src="img/Logo.png" alt="logo" style={{ maxWidth: '100px' }} />
    </Container>
  );
};
