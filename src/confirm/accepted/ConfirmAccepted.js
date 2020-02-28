import React from 'react';
import moment from 'moment-timezone';
import humanizeDuration from 'humanize-duration';
import { Logo } from '../../challenge/components/Logo';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer, Circle, ImgCoach } from './ConfirmAccepted.style.js';
import { ConfirmAcceptedToday } from './ConfirmAcceptedToday';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';
import { coachList } from '../../constants';

const shortFrenchHumanizer = humanizeDuration.humanizer({
  language: 'shortFr',
  languages: {
    shortFr: {
      d: () => 'J',
      h: () => 'H',
      m: () => 'MIN',
    },
  },
});

export const ConfirmAccepted = ({ infos, id }) => {
  const now = moment().tz('Europe/Paris');
  const today = moment(infos.accepted_at).isSame(now, 'day');
  const begin = moment(infos.accepted_at)
    .add(1, 'days')
    .hours(0)
    .minutes(0)
    .seconds(0)
    .milliseconds(0);
  const end = moment(begin).add(infos.duration, 'days');
  const remainingTime = moment.duration(end.diff(now));
  const readableTimer = shortFrenchHumanizer(remainingTime._milliseconds, {
    units: ['d', 'h', 'm'],
    maxDecimalPoints: 0,
    spacer: '',
    delimiter: ' ',
  });

  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <div>
      {!infos.accepted_at || today ? (
        <ConfirmAcceptedToday infos={infos} coachInfos={coachInfos} />
      ) : (
        <Layout>
          <Page>
            <TopContainer>
              <Logo />
              <Circle>
                <ImgCoach src={coachInfos.src} alt="jc" />
              </Circle>
              <Title>
                Encore {readableTimer}
                <br />
                avant la victoire
              </Title>
              <Subtitle>Tu peux le faire {infos.challenged.name} !</Subtitle>
            </TopContainer>
          </Page>
        </Layout>
      )}
    </div>
  );
};
