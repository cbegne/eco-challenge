import React from 'react';
import {
  TopContainer,
  Subtitle,
  SubtitleBottom,
  Container,
} from './CertificateSuccess.style.js';
import { Title } from '../challenge/components/Title';
import { MainPadding } from '../challenge/components/MainPadding';
import certifLogo from './certifLogo.png';
import { coachList } from '../constants';
import { Share } from '../share/Share';

import duration3 from './3.png';
import duration4 from './4.png';
import duration5 from './5.png';
import duration6 from './6.png';
import duration7 from './7.png';

const DURATION_IMAGE = {
  3: duration3,
  4: duration4,
  5: duration5,
  6: duration6,
  7: duration7,
};

export const CertificateSuccess = ({ infos }) => {
  const coachInfos = coachList.find(({ id, name }) => infos.coach === id);

  return (
    <Container>
      <MainPadding style={{ height: '100%', minWidth: '400px' }}>
        <TopContainer style={{ marginBottom: '60px' }}>
          <div
            style={{
              color: '#370972',
              fontSize: '20px',
              fontFamily: 'Calibre',
              fontWeight: 600,
              textAlign: 'center',
              width: '100%',
              lineHeight: '25px',
            }}
          >
            Screenshot et partage
            <br />
            en story ! 🔥
          </div>
        </TopContainer>
        <div
          style={{
            padding: '20px',
            backgroundColor: '#F9ED61',
            borderRadius: '8px',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          <img
            src={certifLogo}
            style={{ maxWidth: '280px', marginTop: '-70px' }}
          />
          <img src={DURATION_IMAGE[infos.duration]} />
          <div style={{ marginTop: '75px', width: '45%' }}>
            <div
              style={{
                textAlign: 'left',
                fontFamily: 'Sharp',
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#370972',
              }}
            >
              RESPECT
              <br />
              {infos.challenged.name}
            </div>
            <div
              style={{
                textAlign: 'left',
                fontFamily: 'Calibre',
                fontWeight: 'normal',
                fontSize: '18px',
                color: '#370972',
                marginTop: '20px',
                marginBottom: '60px',
              }}
            >
              Merci {infos.challenger.name}
              {infos.solo ? '' : ' et mes supporters'} pour le soutien 💪
            </div>
          </div>
          <img
            src={coachInfos.src}
            style={{
              maxWidth: '62%',
              bottom: '-10px',
              right: '0',
              maxHeight: '300px',
              position: 'absolute',
            }}
          />
        </div>
        <p
          style={{
            fontFamily: 'Calibre',
            fontSize: '18px',
            color: '#370972',
            fontWeight: 'bold',
            marginTop: '30px',
            textAlign: 'center',
          }}
        >
          Fais connaître Bas les Steaks à tes amis !
        </p>
        <Share />
      </MainPadding>
    </Container>
  );
};
