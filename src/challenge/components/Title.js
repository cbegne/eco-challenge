import React from 'react';
import styled from 'styled-components';

export const Container = styled.h1`
  font-family: Calibre;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #370972;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
`;

export const Title = ({ children }) => <Container>{children}</Container>;
