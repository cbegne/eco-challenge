import React from 'react';
import styled from 'styled-components';

export const Container = styled.img`
  display: block;
  width: 100%;
  max-width: 360px;
  margin: 0 auto 30px;
  height: auto;
`;

export const Logo = () => <Container src='/img/Logo.png' alt="logo"/>

