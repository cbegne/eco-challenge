import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.color};
  box-shadow: 4px 4px 0px rgba(255,119,147,0.4);
  border-radius: 6px;
  color: white;
  max-width: 280px;
  width: 100%;
  font-family: Sharp;
  font-size: 24px;
  line-height: 120%;
  padding: 16px 0 12px 0;
  letter-spacing: 0.05em;
  align-self: center;
  text-transform: uppercase;
  &:disabled {
    background-color: gray;
  }
  &:active {
    position: relative;
    left: 4px;
    top: 4px;
    background-color: #FA6280;
    box-shadow: 0px 0px 0px rgba(255,119,147,0.4);
  }
`;

export const ActionButton = ({
  children,
  type = 'button',
  onClick = () => {},
  disabled = false,
  color = '#370972',
  style = {},
}) => (
  <Button
    type={type}
    onClick={onClick}
    disabled={disabled}
    color={color}
    style={style}
  >
    {children}
  </Button>
);
