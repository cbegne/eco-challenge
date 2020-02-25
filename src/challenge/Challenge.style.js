import styled from 'styled-components';
import { fontColor, small } from '../_variables';

export const Container = styled.div`
  min-height: 100vh;
  color: ${fontColor};
  width: 100%;
  margin: 0;
  padding: 40px 24px 56px;
  @media (max-width: ${small}) {
    padding-right: 0;
    padding-left: 0;
    padding-bottom: 24px;
  }
`;
