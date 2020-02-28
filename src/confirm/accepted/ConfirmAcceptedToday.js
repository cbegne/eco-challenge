import React, { useState } from 'react';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer } from './ConfirmAccepted.style.js';
import { ImgCoach, Circle } from './ConfirmAcceptedToday.style.js';
import { ActionButton } from '../../challenge/components/ActionButton';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SharePage } from './SharePage';
import { yellow } from '../../_variables';
import { coachList } from '../../constants';

export const ConfirmAcceptedToday = ({ infos }) => {
  const [showShare, setShowShare] = useState(false);
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return showShare ? (
    <Layout color={yellow}>
      <Page>
        <SharePage infos={infos} goBack={() => setShowShare(false)} />
      </Page>
    </Layout>
  ) : (
    <Layout>
      <Page>
        <TopContainer>
          <img src="/img/Logo.png" alt="logo" style={{ width: '100%' }} />
          <Circle>
            <ImgCoach src={coachInfos.src} alt="jc" />
          </Circle>
          <Title>Le défi démarre demain</Title>
          <Subtitle>Be ready {infos.challenged.name}.</Subtitle>
          <ActionButton onClick={() => setShowShare(true)}>
            Partage la news
          </ActionButton>
        </TopContainer>
      </Page>
    </Layout>
  );
};
