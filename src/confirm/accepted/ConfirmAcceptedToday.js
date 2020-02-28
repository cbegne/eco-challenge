import React, { useState } from 'react';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer } from './ConfirmAccepted.style.js';
import { ActionButton } from '../../challenge/components/ActionButton';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { SharePage } from './SharePage';
import { yellow } from '../../_variables';

export const ConfirmAcceptedToday = ({ infos }) => {
  const [showShare, setShowShare] = useState(false);

  return showShare ? (
    <Layout color={yellow}>
      <Page>
        <SharePage />
      </Page>
    </Layout>
  ) : (
    <Layout>
      <Page>
        <TopContainer>
          <img src="/img/Logo.png" alt="logo" style={{ width: '100%' }} />
          <img
            src="/img/img-jc-1.png"
            alt="jc"
            style={{ maxWidth: ' 175px', marginBottom: '20px' }}
          />
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
