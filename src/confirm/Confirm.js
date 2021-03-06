import React, { useEffect, useState } from 'react';
import cloneDeep from 'lodash/cloneDeep';
import { getChallengeInfos, validateChallenge } from './api';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { ConfirmPending } from './pending/ConfirmPending';
import { ConfirmAccepted } from './accepted/ConfirmAccepted';
import { Validated } from './validated/Validated';
import { CertificateSuccess } from './CertificateSuccess';
import { yellow } from '../_variables';
import { getParametersFromUrl } from './confirmUtils';

export const Confirm = ({ id }) => {
  console.log('WOWOWOWO');
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
    setInfos((prevState) => ({ ...cloneDeep(prevState), status: 'ACCEPTED' }));
  };

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getChallengeInfos(id);
        if (!data) {
          // Not found, redirect
          window.document.location = '/';
        }
        setInfos(data);
      } catch (error) {
        window.document.location = '/';
      }
    };

    const confirmValidation = async ({ validate_id, validate }) => {
      try {
        const data = await validateChallenge({ id, validate_id, validate });
        setInfos(data);
      } catch (e) {
        window.document.location = `/${id}`;
      }
    };

    const params = getParametersFromUrl(window.location.search);
    if (params.validate_id && params.validate) {
      const { validate_id, validate } = params;
      confirmValidation({ validate_id, validate });
    } else {
      loadData();
    }
  }, [id]);

  const { status } = infos;
  const params = getParametersFromUrl(window.location.search);

  return (
    <>
      {(status === 'PENDING' || status === 'RELAUNCHED') && (
        <Layout color={yellow}>
          <Page>
            <ConfirmPending id={id} infos={infos} acceptChallenge={setStatus} />
          </Page>
        </Layout>
      )}
      {status === 'ACCEPTED' && <ConfirmAccepted id={id} infos={infos} />}
      {status === 'COMPLETED' && !params.validate_id && !params.validate && (
        <Layout>
          <Page>
            <CertificateSuccess infos={infos} />
          </Page>
        </Layout>
      )}
      {params.validate_id && params.validate && (
        <Layout>
          <Page>
            <Validated infos={infos} id={id} validate={params.validate} />
          </Page>
        </Layout>
      )}
      {status === 'FAILED' && (
        <Layout>
          <Page>
            <Validated infos={infos} id={id} validate={'false'} />
          </Page>
        </Layout>
      )}
    </>
  );
};
