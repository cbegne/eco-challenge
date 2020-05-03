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
import { MainPadding } from '../../challenge/components/MainPadding';

export const SharePage = ({ infos, goBack }) => {
  console.log(infos);
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <Container>
      <MainPadding
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <TopContainer style={{marginBottom: '30px'}}>
          <ReturnButton onClick={goBack} />
          <Subtitle
            style={{
              fontFamily: 'Calibre',
              fontWeight: 800,
              fontSize: '18px',
              color: '#370972',
              marginRight: 'auto',
              marginLeft: 'auto',
              paddingRight: '56px',
            }}
          >
            Screenshot et partage
            <br />
            en story&nbsp;!&nbsp;🔥
          </Subtitle>
        </TopContainer>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#F9ED61',
            borderRadius: '8px',
            padding: '40px 10px 20px 10px',
          }}
        >
          <Title>
            {infos.challenger.name} me défie de manger végétarien pendant{' '}
            <span style={{ color: '#FF7793' }}>{infos.duration} jours</span>
          </Title>
          <img
            src="img/accepted.png"
            alt="accept"
            style={{ maxWidth: '200px' }}
          />
          <img
            src={coachInfos.src}
            alt="challenge"
            style={{ maxWidth: '200px', marginTop: '-25px' }}
          />
          <Coach>avec coach {coachInfos.name}</Coach>
          {!infos.solo && (
            <SubtitleBottom>
              Merci aux supporters pour le soutien{'\u00A0'}💪
            </SubtitleBottom>
          )}

          <img src="img/Logo.png" alt="logo" style={{ maxWidth: '100px' }} />
        </div>
      </MainPadding>
    </Container>
  );
};
