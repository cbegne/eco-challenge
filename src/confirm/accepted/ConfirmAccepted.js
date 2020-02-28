import React from 'react';
import moment from 'moment-timezone';
import humanizeDuration from 'humanize-duration';

import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer } from './ConfirmAccepted.style.js';
import { ConfirmAcceptedToday } from './ConfirmAcceptedToday';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';

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
  });
  return (
    <div>
      {!infos.accepted_at || today ? (
        <ConfirmAcceptedToday infos={infos} />
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
              <Title>Encore {readableTimer} avant la victoire</Title>
              <Subtitle>Tu peux le faire {infos.challenged.name} !</Subtitle>
            </TopContainer>
          </Page>
        </Layout>
      )}
    </div>
  );
};
