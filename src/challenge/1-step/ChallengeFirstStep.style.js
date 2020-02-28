import styled from 'styled-components';

export const Input = styled.input`
  font-family: Calibre;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  padding: 10px;
  margin: 10px 0;
  border: transparent;
  border-bottom: 3px solid white;
  width: 150px;
  text-align: center;
  height: 35px;
  background-color: transparent;
  color: #ff7793;
  &::placeholder {
    color: #ff7793;
  }
`;

export const Form = styled.form`
  font-family: Calibre;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #130623;
`;

export const Select = styled.select`
  font-size: 24px;
  line-height: 40px;
  font-weight: bold;
  border-bottom-left-radius: 0px;
  border: transparent;
  background-color: transparent;
  border-bottom: 3px solid white;
  color: #ff7793;
`;

export const Subtext = styled.div`
  font-family: Calibre;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  color: #370972;
  opacity: 0.6;
`;

export const FiguresBlock = styled.div`
  background-color: #370972;
  font-family: Calibre;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
  padding: 40px 20px;
  margin-bottom: 45px;
`;

export const Subtitle = styled.div`
  font-family: Calibre;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ff7793;
  margin-bottom: 55px;
`;

export const FiguresItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 30px;
`;
