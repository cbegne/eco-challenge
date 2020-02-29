import React from 'react';
import moment from 'moment-timezone';
import humanizeDuration from 'humanize-duration';
import { Logo } from '../../challenge/components/Logo';
import { Title } from '../../challenge/components/Title';
import { ActionButton } from '../../challenge/components/ActionButton';

import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer, Circle, ImgCoach } from './Validated.style.js';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { coachList } from '../../constants';
import { Share } from '../../share/Share';

export const Validated = ({ infos, id, validate }) => {
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);
  if (!coachInfos) return null;
  return (
    <Layout>
      <Page>
        <TopContainer>
          <Logo />
          <Circle>
            <ImgCoach src={coachInfos.src} alt="jc" />
          </Circle>
          <Title>
            {validate === 'true'
              ? "Bravo l'équipe !! Vous pouvez être fiers de vous"
              : 'Merci pour ta participation !'}
          </Title>
          <ActionButton
            type="submit"
            onClick={() => (window.location.href = '/')}
          >
            {validate === 'true'
              ? 'Lance un nouveau défi'
              : 'Retente ta chance'}
          </ActionButton>
          <br />
          <br />
          <Share />
        </TopContainer>
      </Page>
    </Layout>
  );
};
