import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  position: relative;
  justify-content: center;
  min-height: calc(100vh - 100px);
`;

export const Page = ({ children }) => <Container>{children}</Container>;
