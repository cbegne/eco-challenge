import styled from 'styled-components';

export const InputTop = styled.input`
  position: relative;
  font-family: Calibre Semi;
  font-size: 20px;
  line-height: 120%;
  color: #130623;
  padding: 12px 12px 8px;
  border: 2px solid #ffbcc9;
  border-radius: 6px 6px 0px 0px;
  width: 100%;
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    z-index: 10;
    color: #130623;
    border: 2px solid #ff7793;
  }
`;

export const InputBottom = styled.input`
  position: relative;
  top: -2px;
  font-family: Calibre Semi;
  font-size: 20px;
  line-height: 120%;
  color: #130623;
  padding: 12px 12px 8px;
  margin-bottom: 10px;
  border: 2px solid #ffbcc9;
  border-radius: 0px 0px 6px 6px;
  width: 100%;
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    color: #130623;
    border: 2px solid #ff7793;
  }
`;

export const AddButton = styled.button`
  font-family: Calibre Semi;
  font-size: 20px;
  line-height: 120%;
  text-decoration: underline;
  color: #370972;
  text-align: left;
  margin-top: 30px;
`;

export const Label = styled.div`
  font-family: Calibre Semi;
  font-size: 15px;
  line-height: 120%;
  color: #574F62;
  margin-top: 30px;
  margin-bottom: 5px;
`;
