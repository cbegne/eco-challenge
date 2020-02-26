import styled from 'styled-components';
import { fontColor, small } from '../_variables';

export const Container = styled.div`
  min-height: 100vh;
  color: ${fontColor};
  width: 100%;
  margin: 0;
  padding: 40px 24px 56px;
`;

export const Page = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
  position: relative;
  justify-content: center;
  max-width: 760px;
`;
