import React, { useState } from 'react';
import Clipboard from 'react-clipboard.js';
import { ProgressBar } from '../components/ProgressBar';
import { Title } from '../components/Title';
import { coachList } from '../../constants';
import { Share } from '../../share/Share';

import copiedImage from './copied.png';

export const ChallengeCreatedStep = ({ status }) => {
  const [copied, setCopied] = useState(false);
  const textToCopy = `${status.challenged.name}, ${status.solo ? 'je te mets' : 'nous te mettons'} au défi de manger végétarien pendant 5 jours avec une jolie récompense à la clef. Découvre ici les règles du jeu : https://baslessteaks.org/${status.challengeId}`;
  const theCoach = coachList.find((c) => c.id === status.coach);
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <ProgressBar step={8} />
      <Title>
        <div style={{ padding: '0 10px' }}>On y est presque&nbsp;!</div>
      </Title>
      <p style={{ textAlign: 'center' }}>{`Envoie maintenant son défi à ${
        status.challenged.name
      }${
        status.solo
          ? '.'
          : ' et ses supporters dans la conversation groupée !'
      }`}</p>
      <div
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          backgroundColor: '#F9ED61',
          position: 'relative',
          textAlign: 'center',
          margin: '40px auto',
        }}
      >
        <img
          src={theCoach && theCoach.src}
          style={{ width: 200, position: 'relative', top: 10 }}
        />
      </div>
      <div
        style={{
          margin: '0 auto',
          maxWidth: '500px',
          padding: 30,
          backgroundColor: '#FFE4EA',
          borderRadius: 5,
          lineHeight: '25px',
          position: 'relative',
        }}
      >
        {textToCopy}
        <img
          src={copiedImage}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: '10px',
            visibility: copied ? 'visible' : 'hidden',
            width: 135,
          }}
        />
      </div>
      <Clipboard
        data-clipboard-text={textToCopy}
        onSuccess={() => setCopied(true)}
        style={{
          backgroundColor: '#370972',
          padding: 20,
          color: 'white',
          fontFamily: 'Sharp',
          fontSize: '22px',
          borderRadius: '0 0 8px 8px',
        }}
      >
        COPIER LE DÉFI
      </Clipboard>
      {copied && (
        <div
          style={{
            textAlign: 'center',
            fontFamily: 'Calibre',
            fontSize: '23px',
            fontWeight: 600,
            marginTop: 30,
          }}
        >
          {status.solo
            ? `Maintenant, envoie le défi à ${status.challenged.name}`
            : `Envoie le défi à ${status.challenged.name} et ses supporters`}
          <Share
            challengedName={status.challenged.name}
            challengeId={status.challengeId}
            duration={status.duration}
          />
        </div>
      )}
    </div>
  );
};
