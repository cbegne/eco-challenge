import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 3px;
  width: 295px;
  height: 48px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-top: 100px;
`;

export const ValidationButton = ({ children }) => (
  <Button type="submit">{children}</Button>
);
