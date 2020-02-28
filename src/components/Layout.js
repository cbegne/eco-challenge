import React from 'react';
import styled from 'styled-components';
import { fontColor } from '../_variables';

const Container = styled.div`
  min-height: 100vh;
  color: ${fontColor};
  width: 100%;
  margin: 0;
  padding: 40px 24px 56px;
  background: ${props => props.color};
`;

export const Layout = ({ children, color = 'white' }) => (
  <Container color={color}>{children}</Container>
);
