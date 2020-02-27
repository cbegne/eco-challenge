import React from 'react';
import { confirmChallenge } from '../api';
import { Note, Form, Button } from '../pending/ConfirmPending.style.js';

export const ConfirmPending = ({ infos, id }) => {
  const onSubmit = event => {
    event.preventDefault();
    confirmChallenge(id);
    console.log('confirmed');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Note>
        {infos.challenged.name},
        <br />
        <br />
        Je te mets au défi de ne pas manger de viande pendant {
          infos.duration
        }{' '}
        jours.
        <br />
        <br />
        En échange {infos.challenger.name} s’engage à te payer {infos.reward}.
        Sache que {infos.supporters[0]} sera là pour veiller sur toi.
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
        {infos.coach}
      </Note>
      <Button type="submit">Signer de mon sang</Button>
    </Form>
  );
};
