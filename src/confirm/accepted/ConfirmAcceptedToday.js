import React, { useState } from 'react';
import { Logo } from '../../challenge/components/Logo';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer, ImgCoach, Circle } from './ConfirmAccepted.style.js';
import { ActionButton } from '../../challenge/components/ActionButton';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SharePage } from './SharePage';
import { yellow } from '../../_variables';

export const ConfirmAcceptedToday = ({ infos, coachInfos }) => {
  const [showShare, setShowShare] = useState(false);

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
          <Logo />
          <Circle>
            <ImgCoach src={coachInfos.src} alt="jc" />
          </Circle>
          <Title>Le défi démarre demain</Title>
          <Subtitle>Be ready {infos.challenged.name}.</Subtitle>
          <ActionButton onClick={() => setShowShare(true)}>
            Préviens tes potes
          </ActionButton>
        </TopContainer>
      </Page>
    </Layout>
  );
};
