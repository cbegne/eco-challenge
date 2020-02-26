import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  text-align: left;
  margin-bottom: 25px;
  padding: 0;
`;

export const Icon = styled.span`
  :before {
    font-family: 'Material Icons';
    content: 'arrow_back';
    font-size: 24px;
  }
`;

export const ReturnButton = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    <Icon />
  </Button>
);
