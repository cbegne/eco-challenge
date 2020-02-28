import React from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';

export const Share = () => {
  return (
    <div>
      <FacebookShareButton
        url="https://baslessteaks.org/"
        quote="Bas les Steaks"
      >
        FB SHARE
      </FacebookShareButton>
      <a
        onClick={() =>
          window.open(
            'http://www.facebook.com/dialog/send?app_id=192967905313120&link=https://baslessteaks.org/&redirect_uri=https://baslessteaks.org/',
            'Share to messenger',
            'height=600,width=1200,top=100,left=100,modal=yes,alwaysRaised=yes',
          )
        }
      >
        MESSENGER SHARE
      </a>
      <WhatsappShareButton url="https://baslessteaks.org/">
        WHATSAPP SHARE
      </WhatsappShareButton>
      <TwitterShareButton
        url="https://baslessteaks.org/"
        title="Bas les Steaks"
      >
        TWITTER SHARE
      </TwitterShareButton>
    </div>
  );
};
