import React, { useRef } from 'react';
import { Copy, Subtext, ImgSocial } from './ChallengeFinalStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { FormContainer } from '../components/FormContainer';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { rewards } from '../../constants';

export const ChallengeFinalStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
  duration,
  reward,
  idStart,
}) => {
  const copyRef = useRef(null);
  const copyToClipboard = () => {
    copyRef.current.select();
    document.execCommand('copy');
  };

  const rewardsInfos = rewards.find(({ id }) => reward === id);

  return (
    <FormContainer>
      <Title>
        <div style={{ padding: '0 50px' }}>
          Lance une conversation groupée{'\u00A0'}!
          <ImgSocial
            src="/img/Snapchat.png"
            alt="snap"
            style={{ left: '0px', top: '5px' }}
          />
          <ImgSocial
            src="/img/Messenger.png"
            alt="messenger"
            style={{ top: '0px', right: '5px' }}
          />
          <ImgSocial
            src="/img/WhatsApp.png"
            alt="whatsapp"
            style={{ left: '40px' }}
          />
        </div>
      </Title>

      <Subtitle>
        Crée un chat avec {name} et ses supporters sur ton appli préférée pour
        rassembler l’équipe et copie-colle ce message :
      </Subtitle>
      <img
        src="/img/quote.png"
        alt="quote"
        style={{ margin: 'auto', zIndex: '10', width: '60px' }}
      />
      <Copy
        readOnly
        ref={copyRef}
        value={`${name},\n\nJe te mets aujourd'hui au défi de relever le “Bas les Steaks Challenge” : manger végétarien pendant ${duration} jours.\n\nSi tu acceptes, nous serons là pour te motiver. Et si tu réussis, je m’engage à t’offrir ${
          rewardsInfos ? rewardsInfos.text : ''
        }.\n\nEn es-tu capable ? Pour découvrir ton coach d’élite et accepter le défi, clique ici : https://baslessteaks.org/${idStart}`}
      />
      <ActionButton onClick={copyToClipboard} style={{ marginTop: '-30px', width: '300px' }}>
        Copier le texte
      </ActionButton>
      <Subtext>On a plus qu’a attendre que Michel accepte :)</Subtext>
    </FormContainer>
  );
};
