import React, { useState } from 'react';
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
import { ActionButton } from '../../challenge/components/ActionButton';
import { SharePage } from './SharePage';

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
  const hasEnded = now.isAfter(end);
  const readableTimer = shortFrenchHumanizer(remainingTime._milliseconds, {
    units: ['d', 'h', 'm'],
    maxDecimalPoints: 0,
    spacer: '',
    delimiter: ' ',
  });
  const [showShare, setShowShare] = useState(false);

  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  if (showShare) {
    return <SharePage goBack={() => setShowShare(false)} infos={infos} />;
  }

  return (
    <div>
      <Layout>
        <Page>
          <TopContainer>
            <Logo />
            <Circle>
              <ImgCoach src={coachInfos.src} alt="jc" />
            </Circle>
            {!infos.accepted_at || today ? (
              <>
                <Title>Le défi démarre demain&nbsp;!</Title>
                <Subtitle>Be ready {infos.challenged.name}.</Subtitle>
                <ActionButton onClick={() => setShowShare(true)}>
                  Préviens tes potes
                </ActionButton>
              </>
            ) : (
              <>
                {!hasEnded && (
                  <Title>
                    Encore {readableTimer}
                    <br />
                    avant la victoire
                  </Title>
                )}
                {hasEnded && <Title>Ton challenge est terminé</Title>}
                {!hasEnded && (
                  <>
                    <div
                      style={{
                        color: '#FF7793',
                        fontWeight: 600,
                        fontFamily: 'Calibre',
                        fontSize: '20px',
                      }}
                    >
                      Tu peux le faire {infos.challenged.name} !<br/><br/>
                    </div>
                    <ActionButton onClick={() => setShowShare(true)}>
                      Partage ton défi
                    </ActionButton>
                  </>
                )}
                {hasEnded && <Subtitle>J'attends le verdict.</Subtitle>}
              </>
            )}
          </TopContainer>
        </Page>
      </Layout>
    </div>
  );
};
