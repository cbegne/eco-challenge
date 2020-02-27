import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Calibre;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 40px;
`;

export const Subtitle = ({ children }) => <Container>{children}</Container>;