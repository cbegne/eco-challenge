import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: left;
  margin-bottom: 25px;
  padding: 0;
`;

export const ReturnButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    Retour
  </Button>
);
