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
import { MainPadding } from '../../challenge/components/MainPadding';
import CheckBox from '../../components/Checkbox';

export const ConfirmPending = ({ infos, id, acceptChallenge }) => {
  const [accepted, setAccepted] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    confirmChallenge(id);
    acceptChallenge();
  };

  const acceptContract = () => {
    setAccepted((prevState) => !prevState);
  };

  const rewardsInfos = rewards.find(({ id }) => infos.reward === id);
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <MainPadding>
      <Logo />
      <img
        src={coachInfos.src}
        alt={coachInfos.name}
        style={{
          display: 'block',
          margin: 'auto',
          marginBottom: '-40px',
          maxWidth: '50%',
        }}
      />
      <Form onSubmit={onSubmit}>
        <Note>
          <span
            style={{
              fontFamily: 'Sharp',
              fontSize: '24px',
              textTransform: 'uppercase',
            }}
          >
            Salut {infos.challenged.name},
          </span>
          <br />
          <br />
          Pour la planète et le bien-être animal, {infos.challenger.name} te
          défie de ne pas manger de viande ni de poisson pendant{' '}
          {infos.duration} jours. Si tu réussis, tu recevras de sa part{' '}
          <b>{rewardsInfos ? rewardsInfos.text.toLowerCase() : ''}</b>.<br />
          <br />
          Pendant ce challenge, tu devras envoyer des photos de chacun de tes
          repas dans votre conversation.
          <br />
          <br />
          Et moi, {coachInfos.name}, je m’engage à te coacher tous les jours. Tu
          peux me faire confiance.
          <br />
          <br />
          Plus que jamais, nous croyons en toi. Ne nous déçois pas.
          <br />
          <br />
          Alors, quelle est ta réponse ?
        </Note>
        <SignContainer>
          <div style={{ marginBottom: '10px', display: 'flex' }}>
            <CheckBox checked={accepted} onClick={acceptContract} />

            <Label
              style={{
                fontSize: '21px',
                color: '#130623',
                fontFamily: 'Calibre',
                fontWeight: 800,
              }}
            >
              J'accèpte les règles du
              <br />
              Bas les Steaks challenge
            </Label>
          </div>
          <ActionButton type="submit" disabled={!accepted}>
            Je relève le défi
          </ActionButton>
        </SignContainer>
      </Form>
    </MainPadding>
  );
};
