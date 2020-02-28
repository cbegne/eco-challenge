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
  height: 238px;
  width: 150px;
  text-align: center;
  display: block;
  cursor: pointer;
  padding: 4px 10px;
  font-weight: bold;
  margin: auto;
  background: #f9ed61;
  border-radius: 4px;
  ${Radio}:checked + & {
    background: #ff7793;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 80px;
  margin-bottom: 30px;
  margin-top: 15px;
`;
