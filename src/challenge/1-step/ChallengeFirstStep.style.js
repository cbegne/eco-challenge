import styled from 'styled-components';

export const Input = styled.input`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  padding: 10px;
  margin: 10px 0;
  border: transparent;
  border-bottom: 2px solid black;
  width: 150px;
  text-align: center;
  height: 35px;
  background-color: transparent;
  &::placeholder {
    color: lightgray;
  }
`;

export const Form = styled.form`
  font-family: Calibre;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: #130623;
  border-radius: 8px;
  background-color: white;
`;

export const Select = styled.select`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
  border-bottom-left-radius: 0px;
  border: transparent;
  background-color: transparent;
  border-bottom: 2px solid black;
`;
