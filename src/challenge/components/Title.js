import React from 'react';
import styled from 'styled-components';

export const Container = styled.h1`
  font-family: Sharp;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #370972;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
`;

export const Title = ({ children }) => <Container>{children}</Container>;
