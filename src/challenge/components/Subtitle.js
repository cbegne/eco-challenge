import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  font-family: Calibre;
  font-size: 18px;
  line-height: 120%;
  color: #574f62;
  text-align: center;
  margin-bottom: 30px;
`;

export const Subtitle = ({ children }) => <Container>{children}</Container>;
