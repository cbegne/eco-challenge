import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 32px;
  margin-top: auto;
`;

export const ButtonBlock = ({ children }) => <Container>{children}</Container>;
