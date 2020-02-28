import React from 'react';
import moment from 'moment';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer } from './ConfirmAccepted.style.js';
import { ConfirmAcceptedToday } from './ConfirmAcceptedToday';
import { Layout } from '../../components/Layout';
import { Page } from '../../components/Page';

export const ConfirmAccepted = ({ infos, id }) => {
  const today = moment(infos.accepted_at).isSame(moment(), 'day');
  console.log(today);
  // add timer
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
              <Title>Encore xxx avant la victoire</Title>
              <Subtitle>Tu peux le faire {infos.challenged.name} !</Subtitle>
            </TopContainer>
          </Page>
        </Layout>
      )}
    </div>
  );
};
