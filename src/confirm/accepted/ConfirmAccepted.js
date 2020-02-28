import React from 'react';
import moment from 'moment';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer } from './ConfirmAccepted.style.js';

export const ConfirmAccepted = ({ infos, id }) => {
  const today = moment(infos.accepted_at).isSame(moment(), 'day');
  // add timer
  return (
    <div>
      {today ? (
        <TopContainer>
          <img src="/img/Logo.png" alt="logo" style={{ width: '100%' }} />
          <img
            src="/img/img-jc-1.png"
            alt="jc"
            style={{ maxWidth: ' 175px', marginBottom: '20px' }}
          />
          <Title>Le défi démarre demain à 9h…</Title>
          <Subtitle>Be ready {infos.challenged.name}.</Subtitle>
        </TopContainer>
      ) : (
        <TopContainer>
          <img src="/img/Logo.png" alt="logo" style={{ width: '100%' }} />
          <img
            src="/img/img-jc-1.png"
            alt="jc"
            style={{ maxWidth: ' 175px', marginBottom: '20px' }}
          />
          <Title>Encore xxx avant la victoire</Title>
          <Subtitle>Tu peux le faire {infos.challenged.name} !</Subtitle>
        </TopContainer>
      )}
    </div>
  );
};
