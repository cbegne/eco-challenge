import React from 'react';
import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  margin: 0 auto 20px auto;
  width: 315px;
  display: flex;
`;

export const DoneStep = styled.span`
  display: inline-block;
  border-radius: 10px;
  margin-left: 7px;
  overflow: hidden;
  border: 2px solid #370872;
  flex-grow: 1;
`;

export const EmptyStep = styled.span`
  display: inline-block;
  border-radius: 10px;
  margin-left: 7px;
  overflow: hidden;
  border: 2px solid #ffbcc9;
  flex-grow: 1;
`;

export const ProgressBar = ({ step = 1 }) => {
  return (
    <ProgressBarContainer>
      {Array(step - 1).fill(<DoneStep />)}
      {Array(7 - step + 1).fill(<EmptyStep />)}
    </ProgressBarContainer>
  );
};
