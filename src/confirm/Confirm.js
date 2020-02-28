import React, { useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { getChallengeInfos } from './api';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { ConfirmPending } from './pending/ConfirmPending';
import { ConfirmAccepted } from './accepted/ConfirmAccepted';
import { yellow } from '../_variables';

export const Confirm = ({ id }) => {
  const [infos, setInfos] = useState({
    id,
    challenged: { name: '', email: '', phone: '' },
    supporters: [{ name: '', email: '' }],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 3,
    reward: '',
    status: '',
    created_at: null,
    accepted_at: null,
  });

  const setStatus = () => {
    setInfos(prevState => ({ ...cloneDeep(prevState), status: 'ACCEPTED' }));
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await getChallengeInfos(id);
      console.log('data', data);
      setInfos(data);
    };

    loadData();
  }, [id]);

  console.log(infos);

  // if (!infos) return null;
  const { status } = infos;
  return (
    <Layout color={yellow}>
      <Page>
        {status === 'PENDING' && (
          <ConfirmPending id={id} infos={infos} acceptChallenge={setStatus} />
        )}
        {status === 'ACCEPTED' && <ConfirmAccepted id={id} infos={infos} />}
      </Page>
    </Layout>
  );
};
