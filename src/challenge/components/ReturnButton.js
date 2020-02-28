import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  min-width: 56px;
  height: 56px;
  background: #f2f2f2;
  box-shadow: 4px 4px 0px #ffc8dc;
  border-radius: 6px;
  margin-right: 16px;
  &:active {
    position: relative;
    left: 4px;
    top: 4px;
    background-color: #ABABAB;
    box-shadow: 0px 0px 0px rgba(255,119,147,0.4);
  }
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
