import React, { useState } from 'react';
import { Title } from '../../challenge/components/Title';
import { Subtitle } from '../../challenge/components/Subtitle';
import { TopContainer } from './ConfirmAccepted.style.js';
import { ActionButton } from '../../challenge/components/ActionButton';
import { ReturnButton } from '../../challenge/components/ReturnButton';

export const SharePage = ({ infos }) => {
  return (
    <>
      <TopContainer>
        <ReturnButton />
        <Subtitle>Screenshot et partage</Subtitle>
      </TopContainer>
    </>
  );
};
