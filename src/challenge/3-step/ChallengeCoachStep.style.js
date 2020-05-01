import styled from 'styled-components';

export const Selection = styled.div`
  // display: flex;
  // flex-direction: column;
  // flex: 5;
  /* &:not(:first-child) {
    margin-left: 10px;
  } */
`;

export const Block = styled.div`
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  justify-content: center;
`;

export const Column = styled.div`
  float: left;
  display: inline-block;
  width: 50%;
  padding: 5px;
`;

export const Radio = styled.input`
  opacity: 0;
  height: 0;
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
  height: 300px;
  width: 100%;
  text-align: center;
  display: block;
  background: #f9ed61;
  border-radius: 6px;
  padding: 20px;
  ${Radio}:checked + & {
    background: #ff7793;
    color: white;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 160px;
`;

export const Name = styled.div`
  font-family: Sharp Comp;
  font-size: 28px;
  line-height: 110%;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  margin-top: 10px;
  padding: 0 10px;
  color: #370972;
`;

export const SubName = styled.div`
  font-family: Sharp Comp;
  font-size: 12px;
  line-height: 110%;
  letter-spacing: 0.02em;
  padding: 0 10px;
  margin-bottom: 10px;
  color: #ff7793;
`;
