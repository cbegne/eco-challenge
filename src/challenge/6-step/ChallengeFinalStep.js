import React, { useRef } from 'react';
import { Copy } from './ChallengeFinalStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { ReturnButton } from '../components/ReturnButton';
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
      <ReturnButton onClick={returnToPreviousStep} />
      <Title>Lance une conversation groupée{'\u00A0'}!</Title>
      <Subtitle>
        Crée un chat avec {name} et ses supporters sur ton appli préférée pour
        rassembler l’équipe et copie-colle ce message :
      </Subtitle>
      <Copy
        readOnly
        ref={copyRef}
        value={`Hello ${name},\n\nJe te mets au défi de relever le “Bas les Steaks Challenge”: ne manger aucune viande pendant ${duration} jours. En échange je m’engage à te payer ${rewardsInfos &&
          rewardsInfos.text} :)\n\nEn es-tu capable ? Nous serons là pour te motiver, accepte le défi et découvre ton coach sur : www.baslessteaks.org/${idStart}`}
      />
      <ActionButton onClick={copyToClipboard}>Copier le texte</ActionButton>
    </FormContainer>
  );
};
