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
  display: none;
`;

export const Label = styled.label`
  height: 238px;
  // width: 100%;
  text-align: center;
  display: block;
  cursor: pointer;
  font-family: Sharp Comp;
  font-size: 28px;
  line-height: 110%;
  text-transform: uppercase;
  padding: 4px 10px;
  
  margin: auto;
  background: #f9ed61;
  border-radius: 6px;
  ${Radio}:checked + & {
    background: #ff7793;
    color: white;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 80px;
  margin-bottom: 30px;
  margin-top: 15px;
`;
