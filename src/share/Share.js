import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export const Share = () => {
  return (
    <div
      style={{
        maxWidth: 400,
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      <span>Fais connaître Bas les Steaks à tes amis !</span><br/><br/>
      <FacebookShareButton
        url="https://baslessteaks.org/"
        quote="Bas les Steaks"
      >
        <img
          src="img/social/Facebook.png"
          alt="accept"
          style={{ maxWidth: '40px', marginRight: 20 }}
        />
      </FacebookShareButton>
      <a
        onClick={() =>
          window.open(
            'http://www.facebook.com/dialog/send?app_id=192967905313120&link=https://baslessteaks.org/&redirect_uri=https://baslessteaks.org/',
            'Share to messenger',
            'height=600,width=1200,top=100,left=100,modal=yes,alwaysRaised=yes',
          )
        }
        style={{cursor: 'pointer'}}
      >
        <img
          src="img/social/Messenger.png"
          alt="accept"
          style={{ maxWidth: '40px', marginRight: 20 }}
        />
      </a>
      <WhatsappShareButton url="https://baslessteaks.org/">
        <img
          src="img/social/WhatsApp.png"
          alt="accept"
          style={{ maxWidth: '40px', marginRight: 20 }}
        />
      </WhatsappShareButton>
      <TwitterShareButton
        url="https://baslessteaks.org/"
        title="Bas les Steaks"
      >
        <img
          src="img/social/Twitter.png"
          alt="accept"
          style={{ maxWidth: '40px' }}
        />
      </TwitterShareButton>
    </div>
  );
};
