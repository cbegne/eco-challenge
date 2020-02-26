import React from 'react';
import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Form = ({ onSubmit, children }) => (
  <Container onSubmit={onSubmit}>{children}</Container>
);
