import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 32px;
`;

export const ButtonBlock = ({ children }) => <Container>{children}</Container>;
