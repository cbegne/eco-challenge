import React from 'react';
import moment from 'moment-timezone';
import humanizeDuration from 'humanize-duration';
import { Logo } from '../../challenge/components/Logo';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer, Circle, ImgCoach } from './Validated.style.js';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { coachList } from '../../constants';
import { Share } from '../../share/Share';

export const Validated = ({ infos, id }) => {
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
            Merci pour ta participation !
          </Title>
          <Share />
        </TopContainer>
      </Page>
    </Layout>
  );
};
