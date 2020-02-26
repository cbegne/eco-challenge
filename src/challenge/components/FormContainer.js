import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormContainer = ({ children }) => (
  <Container>{children}</Container>
);
