import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Calibre Semi;
  font-size: 15px;
  line-height: 120%;
  text-align: center;
  color: #EE0000;
`;

export const ErrorMessage = ({ children }) => <Container>{children}</Container>;
