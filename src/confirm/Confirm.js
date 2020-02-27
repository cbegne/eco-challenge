import React, { useEffect, useState } from 'react';
import { getChallengeInfos } from './api';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { ConfirmPending } from './pending/ConfirmPending';
import { ConfirmAccepted } from './accepted/ConfirmAccepted';

export const Confirm = ({ id }) => {
  const [infos, setInfos] = useState({
    challenged: { name: '', email: '', phone: '' },
    supporters: [],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 0,
    reward: '',
    status: '',
    created_at: null,
  });
  const [status, setStatus] = useState('PENDING');

  useEffect(() => {
    const loadData = async () => {
      const data = await getChallengeInfos(id);
      setInfos(data);
    };

    loadData();
  }, [id]);

  console.log(id);

  // if (!infos) return null;

  return (
    <Layout>
      <Page>
        {status === 'PENDING' && (
          <ConfirmPending id={id} infos={infos} acceptChallenge={setStatus} />
        )}
        {status === 'ACCEPTED' && <ConfirmAccepted id={id} infos={infos} />}
      </Page>
    </Layout>
  );
};
