import styled from 'styled-components';

export const Input = styled.input`
  font-family: Calibre;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #130623;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ffbcc9;
  border-radius: 4px;
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    color: #130623;
    border: 2px solid #ff7793;
  }
`;

export const InputContainer = styled.div`
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid #ffbcc9;
  border-radius: 4px;
`;

export const Subinput = styled.div`
  font-family: Calibre;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  color: #130623;
  margin-bottom: 16px;
`;
