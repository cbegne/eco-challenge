import React from 'react';
import styled from 'styled-components';

export const Container = styled.h1`
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #000000;
  margin-bottom: 30px;
`;

export const Title = ({ children }) => <Container>{children}</Container>;
