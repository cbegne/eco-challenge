import React from 'react';
import styled from 'styled-components';

export const Container = styled.h1`
  font-family: Sharp;
  font-size: 28px;
  line-height: 120%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #370972;
  text-align: center;
  position: relative;
  margin-bottom: 30px;
`;

export const Title = ({ children }) => <Container>{children}</Container>;
