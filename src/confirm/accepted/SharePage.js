import React from 'react';
import {
  TopContainer,
  Subtitle,
  SubtitleBottom,
  Coach,
  Container,
} from './SharePage.style.js';
import { ReturnButton } from '../../challenge/components/ReturnButton';
import { Title } from '../../challenge/components/Title';
import { coachList } from '../../constants';

export const SharePage = ({ infos, goBack }) => {
  const { length } = infos.supporters;
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <Container>
      <TopContainer>
        <ReturnButton onClick={goBack} />
        <Subtitle>Screenshot et partage</Subtitle>
      </TopContainer>
      <Title>
        {infos.challenger.name} me défie de manger végétarien pendant{' '}
        <span style={{ color: '#FF7793' }}>{infos.duration} jours</span>
      </Title>
      <img src="img/accepted.png" alt="accept" style={{ maxWidth: '200px' }} />
      <img
        src={coachInfos.src}
        alt="challenge"
        style={{ maxWidth: '200px', marginTop: '-25px' }}
      />
      <Coach>avec coach {coachInfos.name}</Coach>
      <SubtitleBottom>
        Merci{' '}
        {length === 1
          ? `au supporter ${infos.supporters[0].name} `
          : `aux supporters ${infos.supporters[0].name}, ${
              infos.supporters[1].name
            }${infos.supporters[2] ? `, ${infos.supporters[2].name}` : ''} `}
        pour le soutien{'\u00A0'}💪
      </SubtitleBottom>
      <img src="img/logo.png" alt="logo" style={{ maxWidth: '100px' }} />
    </Container>
  );
};
