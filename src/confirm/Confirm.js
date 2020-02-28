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
      if (!data) {
        // Not found, redirect
        window.document.location = '/';
      }
      setInfos(data);
    };

    loadData();
  }, [id]);

  const { status } = infos;
  return (
    <>
      {status === 'PENDING' ||
        (status === 'RELAUNCHED' && (
          <Layout color={yellow}>
            <Page>
              <ConfirmPending
                id={id}
                infos={infos}
                acceptChallenge={setStatus}
              />
            </Page>
          </Layout>
        ))}
      {status === 'ACCEPTED' && <ConfirmAccepted id={id} infos={infos} />}
    </>
  );
};
