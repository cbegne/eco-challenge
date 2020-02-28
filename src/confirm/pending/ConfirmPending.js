import React, { useState } from 'react';
import { confirmChallenge } from '../api';
import {
  Note,
  Form,
  SignContainer,
  Label,
} from '../pending/ConfirmPending.style.js';
import { rewards, coachList } from '../../constants';
import { ActionButton } from '../../challenge/components/ActionButton';

export const ConfirmPending = ({ infos, id }) => {
  const [accepted, setAccepted] = useState(false);
  const onSubmit = event => {
    event.preventDefault();
    confirmChallenge(id);
    console.log('confirmed');
  };

  const acceptContract = () => {
    setAccepted(prevState => !prevState);
  };

  const rewardsInfos = rewards.find(({ id }) => infos.reward === id);
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <>
      <img src="/img/hubertjournal.png" alt="hubert" />
      <Form onSubmit={onSubmit}>
        <Note>
          <span style={{ fontWeight: '600' }}>
            Salut {infos.challenged.name},
          </span>
          <br />
          <br />
          Je te mets au défi de manger végétarien pendant {infos.duration}{' '}
          jours.
          <br />
          <br />
          En échange {infos.challenger.name} s’engage à te payer{' '}
          {rewardsInfos.text}. Sache que {infos.supporters[0].name} sera là pour
          veiller sur toi.
          <br />
          Ne t’en fais pas, je serais là pour te soutenir dans les moments
          difficiles.
          <br />
          <br />
          Grâce à toi les boeufs pourront gambader dans les paturages plutôt que
          d’être dans des abbatoires.
          <br />
          Ton chère et tendre,
          <br />
          <br />
          {coachInfos.name}
        </Note>
        <SignContainer>
          <div style={{ marginBottom: '10px', display: 'flex' }}>
            <input
              checked={accepted}
              type="checkbox"
              id="sign"
              onChange={acceptContract}
            />
            <Label>Okay {coachInfos.firstName}, je relève le défi</Label>
          </div>
          <ActionButton type="submit" disabled={!accepted}>
            Signer ici
          </ActionButton>
        </SignContainer>
      </Form>
    </>
  );
};
