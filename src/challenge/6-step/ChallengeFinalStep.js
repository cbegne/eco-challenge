import React, { useRef, useState } from 'react';
import { Copy, Subtext, ImgSocial } from './ChallengeFinalStep.style.js';
import { ActionButton } from '../components/ActionButton';
import { FormContainer } from '../components/FormContainer';
import { Title } from '../components/Title';
import { Subtitle } from '../components/Subtitle';
import { rewards } from '../../constants';
import { ProgressBar } from '../components/ProgressBar';
import {
  Label,
  Radio,
  Selection,
  Block,
  Image,
  Name,
  Column,
  SubName,
} from '../3-step/ChallengeCoachStep.style.js';
import Solo from './solo.png';
import Supporters from './supporters.png';
import reussite from './reussite.png';
import { ReturnButton } from '../components/ReturnButton';
import { ButtonBlock } from '../components/ButtonBlock';

export const ChallengeFinalStep = ({
  saveAndNextStep,
  returnToPreviousStep,
  name,
  duration,
  reward,
  idStart,
  challenger,
}) => {
  const copyRef = useRef(null);
  const copyToClipboard = () => {
    copyRef.current.select();
    document.execCommand('copy');
  };

  const [withSupporter, setWithSupporter] = useState(true);

  const rewardsInfos = rewards.find(({ id }) => reward === id);

  return (
    <FormContainer>
      <ProgressBar step={6} />
      <Title>
        <div style={{ padding: '0 50px' }}>
          {challenger.name}, choisis ton type de défi
        </div>
      </Title>
      <br />
      <br />
      <Selection>
        <Radio
          id="supporter"
          name="coach"
          type="radio"
          value="supporter"
          checked={withSupporter}
          onClick={() => setWithSupporter(true)}
        />
        <Label
          htmlFor="supporter"
          style={{ display: 'flex', textAlign: 'left', position: 'relative' }}
        >
          <img
            src={reussite}
            style={{
              position: 'absolute',
              maxWidth: '40%',
              top: 0,
              left: 0,
              transform: 'translate(-10%, -40%)',
            }}
          />
          <div
            style={{
              minWidth: '130px',
              marginRight: 10,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={Supporters} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: '1',
            }}
          >
            <Name style={{ color: withSupporter ? 'white' : '' }}>
              Défi avec des supporters
            </Name>
            <SubName
              style={{
                color: withSupporter ? '#370972' : '',
                fontSize: 17,
                fontFamily: 'Calibre',
                fontWeight: 600,
              }}
            >
              Choisis des proches de {name} qui l'encourageront tout au long du
              défi. Il peut s'agir d'amis, de collègues ou de sa moitié&nbsp;!
            </SubName>
          </div>
        </Label>
      </Selection>
      <br />
      <br />
      <Selection>
        <Radio
          id="solo"
          name="coach"
          type="radio"
          value="solo"
          checked={!withSupporter}
          onClick={() => setWithSupporter(false)}
        />
        <Label htmlFor="solo" style={{ display: 'flex', textAlign: 'left' }}>
          <div
            style={{
              minWidth: '130px',
              marginRight: 10,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Image src={Solo} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: '1',
            }}
          >
            <Name style={{ color: !withSupporter ? 'white' : '' }}>
              Défi à deux uniquement
            </Name>
            <SubName
              style={{
                color: !withSupporter ? '#370972' : '',
                fontSize: 17,
                fontFamily: 'Calibre',
                fontWeight: 600,
              }}
            >
              Personne en tête&nbsp;?C'est pas grave, tu peux quand même faire
              un défi à deux. A toi de redoubler de motivation&nbsp;!
            </SubName>
          </div>
        </Label>
      </Selection>
      <ButtonBlock>
        <ReturnButton onClick={returnToPreviousStep} />
        <ActionButton
          onClick={() => {
            saveAndNextStep({ isSolo: !withSupporter });
          }}
        >
          Suivant
        </ActionButton>
      </ButtonBlock>
    </FormContainer>
  );
};
