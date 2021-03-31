import React, { useRef, useState } from 'react';
import { ActionButton } from '../components/ActionButton';
import Checkbox from '../../components/Checkbox';

import { Title } from '../components/Title';

import { ProgressBar } from '../components/ProgressBar';
import { ErrorMessage } from '../components/ErrorMessage';

import { ReturnButton } from '../components/ReturnButton';
import { ButtonBlock } from '../components/ButtonBlock';
import { MainPadding } from '../components/MainPadding';

import doigt from './doigt.png';
import { startChallenge } from '../api';

export const ChallengeRuleStep = ({ status, returnToPreviousStep, goNext }) => {
  const { challenged, solo } = status;
  const { name } = challenged;
  const [is1checked, check1] = useState(false);
  const [is2checked, check2] = useState(false);
  const [error, showError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit = async () => {
    if (!is1checked || !is2checked) {
      showError('Accepte les règles du jeu pour lancer le défi !');
    } else {
      showError(false);
      setIsSubmitting(true);
      try {
        const { id } = await startChallenge(status);
        goNext({ challengeId: id });
      } catch (e) {
        showError('Une erreur inconnue est survenue.');
      }
      setIsSubmitting(false);
    }
  };
  return (
    <MainPadding
      style={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        minHeight: '100%',
      }}
    >
      <ProgressBar step={7} />
      <br />
      <Title>
        <div style={{ padding: '0 10px' }}>
          Lis et accepte les règles du jeu
        </div>
      </Title>
      <br />
      <br />
      <table
        style={{
          backgroundColor: '#FFE4EA',
          borderRadius: '8px',
          padding: '15px',
          fontFamily: 'Calibre',
          fontWeight: 600,
          fontSize: '17px',
        }}
        onClick={() => check1(!is1checked)}
      >
        <tr>
          <td>
            <Checkbox checked={is1checked} onClick={() => {}} />
          </td>
          <td>
            {solo
              ? `Je vais envoyer le défi à ${name} et l'encourager tout au long du challenge`
              : `Je vais créer une conversation groupée avec ${name} et ses supporters pour lui envoyer le défi et l'encourager`}
          </td>
        </tr>
      </table>
      <br />
      <table
        style={{
          backgroundColor: '#FFE4EA',
          borderRadius: '8px',
          padding: '15px',
          fontFamily: 'Calibre',
          fontWeight: 600,
          fontSize: '17px',
          display: 'flex',
        }}
        onClick={() => check2(!is2checked)}
      >
        <tr>
          <td>
            <Checkbox checked={is2checked} onClick={() => {}} />
          </td>
          <td>
            Je m'engage à vérifier les photos des plats que {name} enverra.
          </td>
        </tr>
      </table>
      {error && (
        <ErrorMessage>
          <br />
          {error}
        </ErrorMessage>
      )}

      <ButtonBlock>
        <div>
          <img
            src={doigt}
            style={{
              width: '60px',
              position: 'relative',
              zIndex: '0',
              top: '10px',
            }}
          />
          <ReturnButton onClick={returnToPreviousStep} />
        </div>
        <ActionButton
          disabled={isSubmitting}
          onClick={submit}
          style={{ marginTop: 'auto' }}
        >
          {isSubmitting ? 'Envoi en cours…' : 'Terminer'}
        </ActionButton>
      </ButtonBlock>
    </MainPadding>
  );
};
