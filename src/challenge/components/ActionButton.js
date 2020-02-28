import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => props.color};
  box-shadow: 4px 4px 0px #ffc8dc;
  border-radius: 8px;
  color: white;
  max-width: 295px;
  width: 100%;
  height: 48px;
  font-family: Sharp Grotesk Bold 12;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  align-self: center;
  text-transform: uppercase;
  &:disabled {
    background-color: #d8c7ef;
    box-shadow: none;
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
