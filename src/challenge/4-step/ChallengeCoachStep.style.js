import styled from 'styled-components';

export const Selection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  /* &:not(:first-child) {
    margin-left: 10px;
  } */
`;

export const Block = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Radio = styled.input`
  opacity: 0;
  height: 0;
`;

export const Label = styled.label`
  width: 100px;
  height: 100px;
  text-align: center;
  display: block;
  cursor: pointer;
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-weight: bold;
  margin: auto;
  ${Radio}:checked + & {
    border: 3px solid black;
  }
`;
