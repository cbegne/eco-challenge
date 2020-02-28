import React from 'react';
import { TopContainer, Subtitle } from './SharePage.style.js';
import { ReturnButton } from '../../challenge/components/ReturnButton';
import { Title } from '../../challenge/components/Title';

export const SharePage = ({ infos }) => {
  const { length } = infos.supporters;
  return (
    <>
      <TopContainer>
        <ReturnButton />
        <Subtitle>Screenshot et partage</Subtitle>
      </TopContainer>
      <Title>
        {infos.challenger.name} me défie de manger végétarien pendant{' '}
        {infos.duration} jours
      </Title>
      <img src="img/lavache.png" alt="challenge" />
      <img
        src="img/accepted.png"
        alt="accept"
        style={{ maxWidth: '200px', marginTop: '-100px' }}
      />
      <Subtitle>
        Merci{' '}
        {length === 1
          ? `au supporter ${infos.supporters[0].name} `
          : `aux supporters ${infos.supporters[0].name}, ${
              infos.supporters[1].name
            }${infos.supporters[2] ? `, ${infos.supporters[2].name}` : ''} `}
        pour le soutien 💪
      </Subtitle>
      <img src="img/logo.png" alt="logo" style={{ maxWidth: '100px' }} />
    </>
  );
};
