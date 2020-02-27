import React, { useEffect, useState } from 'react';
import { getChallengeInfos } from './api';

export const Confirm = ({ id }) => {
  useEffect(() => {
    const loadData = async () => {
      const infos = await getChallengeInfos();
    };

    loadData();
  }, [id]);

  return <div>My confirmation page</div>;
};
