import styled from 'styled-components';

export const Label = styled.label`
  width: 100px;
  height: 100px;
  text-align: center;
`;

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
