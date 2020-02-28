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
import { Logo } from '../../challenge/components/Logo';

export const ConfirmPending = ({ infos, id, acceptChallenge }) => {
  const [accepted, setAccepted] = useState(false);
  const onSubmit = event => {
    event.preventDefault();
    confirmChallenge(id);
    acceptChallenge();
  };

  const acceptContract = () => {
    setAccepted(prevState => !prevState);
  };

  const rewardsInfos = rewards.find(({ id }) => infos.reward === id);
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <>
      <img
        src={coachInfos.src}
        alt={coachInfos.name}
        style={{ marginBottom: '-40px' }}
      />
      <Form onSubmit={onSubmit}>
        <Note>
          <span style={{ fontFamily: 'Sharp', fontSize: '24px', textTransform: 'uppercase' }}>
            Salut {infos.challenged.name},
          </span>
          <br />
          <br />
          Je me présente, {coachInfos.name}. Mon rôle sera de te coacher au Bas les Steaks Challenge, si tu l’acceptes.
          <br />
          <br />
          Pour la planète, et le bien-être animal, {infos.challenger.name} te défie de ne pas manger de viande ni de poisson pendant {infos.duration}{' '} jours. 
          <br />
          <br />
          Si tu réussis, tu recevras de sa part {' '}{rewardsInfos.text}.
          <br />
          <br />
          En plus de mes conseils quotidiens, tu auras le soutien de {infos.supporters[0].name}.
          <br />
          <br />
          Plus que jamais, nous croyons en toi. Ne nous déçois pas.
          <br />
          <br />
          Quelle est ta réponse ?
        </Note>
        <SignContainer>
          <div style={{ marginBottom: '10px', display: 'flex' }}>
            <input
              checked={accepted}
              type="checkbox"
              id="sign"
              onChange={acceptContract}
            />
            <Label>Okay je relève le défi !</Label>
          </div>
          <ActionButton type="submit" disabled={!accepted}>
            Signer ici
          </ActionButton>
        </SignContainer>
      </Form>
      <Logo/>
    </>
  );
};
