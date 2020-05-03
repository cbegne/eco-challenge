import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export const Share = ({ challengeId, duration, challengedName }) => {
  const url = challengeId
    ? `https://baslessteaks.org/${challengeId}`
    : 'https://baslessteaks.org/';
  const text =
    challengeId && challengedName && duration
      ? `${challengedName}, nous te mettons au défi de manger végétarien pendant ${duration} jours avec une jolie récompense à la clef. Découvre ici les règles du jeu : http://bls.org/${challengeId}`
      : 'Bas les Steaks';
  return (
    <div
      style={{
        maxWidth: 400,
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {/* <span>Fais connaître Bas les Steaks à tes amis !</span> */}
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {!challengeId && (
          <>
            <FacebookShareButton
              url="https://baslessteaks.org/"
              quote="Bas les Steaks"
            >
              <img
                src="img/social/Facebook.png"
                alt="accept"
                style={{ maxWidth: '55px'}}
              />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Bas les Steaks">
              <img
                src="img/social/Twitter.png"
                alt="accept"
                style={{ maxWidth: '55px' }}
              />
            </TwitterShareButton>
          </>
        )}
        <a
          onClick={() =>
            window.open(
              `http://www.facebook.com/dialog/send?app_id=192967905313120&link=${url}&redirect_uri=${url}`,
              'Share to messenger',
              'height=600,width=1200,top=100,left=100,modal=yes,alwaysRaised=yes',
            )
          }
          style={{ cursor: 'pointer' }}
        >
          <img
            src="img/social/Messenger.png"
            alt="accept"
            style={{ maxWidth: '55px' }}
          />
        </a>
        {navigator.share && (
          <a
            onClick={() => {
              navigator.share({
                title: text,
                url,
              });
            }}
            style={{ cursor: 'pointer' }}
          >
            <img
              src="img/social/Share.png"
              alt="accept"
              style={{ maxWidth: '55px', marginRight: 20 }}
            />
          </a>
        )}

        <WhatsappShareButton url={url} title={text}>
          <img
            src="img/social/WhatsApp.png"
            alt="accept"
            style={{ maxWidth: '55px', marginRight: 20 }}
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
