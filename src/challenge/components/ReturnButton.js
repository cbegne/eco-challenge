import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 48px;
  height: 48px;
  background: #ffffff;
  box-shadow: 4px 4px 0px #ffc8dc;
  border-radius: 8px;
  margin-right: 16px;
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
