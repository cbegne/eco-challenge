import React from 'react';
import isMobile from 'ismobilejs';
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
      ? `${challengedName}, je te mets au défi de manger végétarien pendant ${duration} jours avec une jolie récompense à la clef. Découvre ici les règles du jeu : https://baslessteaks.org/${challengeId}`
      : 'Bas les Steaks';
  const textWithoutUrl =
    challengeId && challengedName && duration
      ? `${challengedName}, je te mets au défi de manger végétarien pendant ${duration} jours avec une jolie récompense à la clef. Découvre ici les règles du jeu : `
      : 'Bas les Steaks';
  const isPhone = isMobile(window.navigator).phone;
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
      <div>
        {!challengeId && (
          <>
            <FacebookShareButton
              url="https://baslessteaks.org/"
              quote="Bas les Steaks"
            >
              <img
                src="img/social/Facebook.png"
                alt="accept"
                style={{ maxWidth: '55px', marginRight: 20 }}
              />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Bas les Steaks">
              <img
                src="img/social/Twitter.png"
                alt="accept"
                style={{ maxWidth: '55px', marginRight: 20 }}
              />
            </TwitterShareButton>
          </>
        )}
        {!isPhone && (
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
              style={{ maxWidth: '55px', marginRight: 20 }}
            />
          </a>
        )}
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

        <WhatsappShareButton
          separator=""
          url={url}
          title={textWithoutUrl}
        >
          <img
            src="img/social/WhatsApp.png"
            alt="accept"
            style={{ maxWidth: '55px' }}
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
};
