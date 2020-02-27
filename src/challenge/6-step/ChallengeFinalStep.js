import React, { useRef } from 'react';
import { Copy } from './ChallengeFinalStep.style.js';
import { ValidationButton } from '../components/ValidationButton';
import { ReturnButton } from '../components/ReturnButton';
import { FormContainer } from '../components/FormContainer';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';

export const ChallengeFinalStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
  duration,
  reward,
}) => {
  const copyRef = useRef(null);
  const onSubmit = data => {
    console.log('data fifth step', data);
    saveAndNextStep({
      challenged: { email: data.mail, phone: data.phone },
    });
  };

  const copyToClipboard = () => {
    console.log('ici');
    copyRef.current.select();
    document.execCommand('copy');
  };

  // console.log(errors);
  // récupérer lien
  return (
    <FormContainer>
      <ReturnButton onClick={returnToPreviousStep} />
      <Title>Bien joué Richard !</Title>
      <Subtitle>
        Next step: créer une conversation sur Whatsapp ou Messenger pour
        rassembler tous le monde, et copie/colle ce message.
      </Subtitle>
      <Copy
        readOnly
        ref={copyRef}
        value={`Hello ${name},\n\nJe te mets au défi de relever le “Bas les Steaks Challenge”: ne manger aucune viande pendant ${duration} jours. En échange je m’engage à te payer ${reward} :)\n\nEn es-tu capable ? Nous serons là pour te motiver, accepte le défi et découvre ton coach sur : blsc.org/fX48jd`}
      />
      <ValidationButton onClick={copyToClipboard}>
        Copier le texte
      </ValidationButton>
    </FormContainer>
  );
};
