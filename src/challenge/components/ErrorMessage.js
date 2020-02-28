import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Calibre;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  color: #370972;
`;

export const ErrorMessage = ({ children }) => <Container>{children}</Container>;
