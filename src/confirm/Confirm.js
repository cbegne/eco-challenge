import React, { useEffect, useState } from 'react';
import { getChallengeInfos, confirmChallenge } from './api';
import { Layout } from '../components/Layout';
import { Page } from '../components/Page';
import { Note, Form, Button } from './Confirm.style.js';

export const Confirm = ({ id }) => {
  const [infos, setInfos] = useState({
    challenged: { name: '', email: '', phone: '' },
    supporters: [],
    challenger: { email: '', name: '' },
    coach: '',
    duration: 0,
    reward: '',
  });

  const onSubmit = event => {
    event.preventDefault();
    confirmChallenge(id);
    console.log('confirmed');
  };

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
        <Form onSubmit={onSubmit}>
          <Note>
            {infos.challenged.name},
            <br />
            <br />
            Je te mets au défi de ne pas manger de viande pendant{' '}
            {infos.duration} jours.
            <br />
            <br />
            En échange {infos.challenger.name} s’engages à te payer{' '}
            {infos.reward}. Sache que {infos.supporters[0]} sera là pour veiller
            sur toi.
            <br />
            Ne t’en fait pas, je serais là pour te soutenir dans les moments
            difficiles.
            <br />
            <br />
            Grâce à toi les boeufs pourront gambader dans les paturages plutôt
            que d’être dans des abbatoires.
            <br />
            Ton chère et tendre,
            <br />
            <br />
            {infos.coach}
          </Note>
          <Button type="submit">Signer de mon sang</Button>
        </Form>
      </Page>
    </Layout>
  );
};
