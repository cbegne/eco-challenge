import styled from 'styled-components';

export const InputTop = styled.input`
  font-family: Calibre;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
  color: #130623;
  height: 50px;
  padding: 10px;
  border-top: 2px solid #ffbcc9;
  border-right: 2px solid #ffbcc9;
  border-left: 2px solid #ffbcc9;
  border-radius: 4px 4px 0px 0px;
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    color: #130623;
    border: 2px solid #ff7793;
  }
`;

export const InputBottom = styled.input`
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
  border-radius: 0px 0px 4px 4px;
  margin-bottom: 20px;
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    color: #130623;
    border: 2px solid #ff7793;
  }
`;

export const AddButton = styled.button`
  text-decoration: underline;
  margin: 20px 0;
  font-family: Calibre;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-decoration-line: underline;
  color: #370972;
  text-align: left;
`;

export const Label = styled.div`
  font-family: Calibre Semi;
  font-size: 15px;
  line-height: 120%;
  color: #130623;
  margin-bottom: 5px;
`;
