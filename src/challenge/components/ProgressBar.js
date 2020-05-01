import React from 'react';
import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  margin: auto;
  width: 315px;
  margin-bottom: 20px;
`;

export const DoneStep = styled.span`
  display: inline-block;
  width: 45px;
  border-radius: 10px;
  margin-left: 7px;
  overflow: hidden;
  border: 2px solid #370872;
`;

export const EmptyStep = styled.span`
  display: inline-block;
  width: 45px;
  border-radius: 10px;
  margin-left: 7px;
  overflow: hidden;
  border: 2px solid #ffbcc9;
`;

export const ProgressBar = ({ step = 1 }) => {
  return (
    <ProgressBarContainer>
      {Array(step - 1).fill(<DoneStep />)}
      {Array(6 - step + 1).fill(<EmptyStep />)}
    </ProgressBarContainer>
  );
};
