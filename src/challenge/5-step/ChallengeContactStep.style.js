import styled from 'styled-components';

export const Input = styled.input`
  font-family: Calibre Semi;
  font-size: 20px;
  line-height: 120%;
  color: #130623;
  padding: 12px 12px 8px;
  border: 2px solid #ffbcc9;
  color: #130623;
  margin-bottom: 10px;
  border: 2px solid #ffbcc9;
  border-radius: 6px;
  &::placeholder {
    color: #ababab;
  }
  &:focus {
    color: #130623;
    border: 2px solid #ff7793;
  }
`;

export const InputContainer = styled.div`
  padding: 12px 12px 8px;
  margin-bottom: 10px;
  border: 2px solid #ffbcc9;
  border-radius: 6px;
`;

export const Subinput = styled.div`
  font-family: Calibre;
  font-size: 15px;
  line-height: 120%;
  color: #130623;
  margin-bottom: 30px;
`;

export const SmsImageContainer = styled.div`
  max-width: 300px;
  margin: auto;
  text-align: center;
  position: relative;
`;

export const SmsImage = styled.img`
  width: 100%;
`;

export const SmsText = styled.div`
  position: absolute;
  top: 8%;
  right: 4%;
  width: 53%;
  height: 27%;
  text-align: left;
  font-size: 10px;
  display: flex;
  align-items: center;
`;
