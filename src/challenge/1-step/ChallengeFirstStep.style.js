import styled from 'styled-components';

export const Form = styled.form`
  font-family: Calibre Semi;
  font-style: normal;
  font-size: 36px;
  line-height: 110%;
  color: #370972;
  text-align: center;
`;

export const Input = styled.input`
  font-family: Calibre Semi;
  font-size: 36px;
  line-height: 110%;
  display: inline-block;
  width: auto;
  text-align: center;
  background-color: transparent;
  color: #ff7793;
  padding-top: 8px;
  margin-bottom: 8px;
  border-bottom: 5px solid white;
  &::placeholder {
    color: #ff7793;
  }
`;

export const Select = styled.select`
  font-family: Calibre Semi;
  font-size: 36px;
  line-height: 110%;
  color: #ff7793;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: transparent;
  padding: 8px 12px 0 12px;
  margin-bottom: 8px;
  border-radius: 0;
  border-color: transparent;
  border-bottom: 5px solid white;
`;

export const Subtext = styled.div`
  font-family: Calibre;
  font-size: 18px;
  line-height: 120%;
  text-align: center;
  color: #370972;
  opacity: 0.7;
`;

export const FiguresItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Subtitle = styled.div`
  font-family: Calibre;
  font-size: 18px;
  text-align: center;
  line-height: 120%;
  letter-spacing: 0.02em;
  color: #ff7793;
  margin-bottom: 55px;
`;

export const Figure = styled.div`
  font-family: Sharp;
  font-size: 28px;
  line-height: 120%;
  text-align:center;
  color: #FF7793;
  text-shadow: rgb(255, 255, 255) 5px 0px 0px, rgb(255, 255, 255) 4.90033px 0.993347px 0px, rgb(255, 255, 255) 4.60531px 1.94709px 0px, rgb(255, 255, 255) 4.12668px 2.82321px 0px, rgb(255, 255, 255) 3.48353px 3.58678px 0px, rgb(255, 255, 255) 2.70151px 4.20736px 0px, rgb(255, 255, 255) 1.81179px 4.6602px 0px, rgb(255, 255, 255) 0.849836px 4.92725px 0px, rgb(255, 255, 255) -0.145998px 4.99787px 0px, rgb(255, 255, 255) -1.13601px 4.86924px 0px, rgb(255, 255, 255) -2.08073px 4.54649px 0px, rgb(255, 255, 255) -2.94251px 4.04248px 0px, rgb(255, 255, 255) -3.68697px 3.37732px 0px, rgb(255, 255, 255) -4.28444px 2.57751px 0px, rgb(255, 255, 255) -4.71111px 1.67494px 0px, rgb(255, 255, 255) -4.94996px 0.7056px 0px, rgb(255, 255, 255) -4.99147px -0.291871px 0px, rgb(255, 255, 255) -4.83399px -1.27771px 0px, rgb(255, 255, 255) -4.48379px -2.2126px 0px, rgb(255, 255, 255) -3.95484px -3.05929px 0px, rgb(255, 255, 255) -3.26822px -3.78401px 0px, rgb(255, 255, 255) -2.4513px -4.35788px 0px, rgb(255, 255, 255) -1.53666px -4.75801px 0px, rgb(255, 255, 255) -0.560763px -4.96845px 0px, rgb(255, 255, 255) 0.437495px -4.98082px 0px, rgb(255, 255, 255) 1.41831px -4.79462px 0px, rgb(255, 255, 255) 2.34258px -4.41727px 0px, rgb(255, 255, 255) 3.17346px -3.86382px 0px, rgb(255, 255, 255) 3.87783px -3.15633px 0px, rgb(255, 255, 255) 4.4276px -2.32301px 0px, rgb(255, 255, 255) 4.80085px -1.39708px 0px, rgb(255, 255, 255) 4.98271px -0.415447px 0px;
`;


export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20px;
`;

export const FiguresBlock = styled.div`
  background-color: #370972;
  font-family: Calibre;
  font-size: 18px;
  line-height: 120%;
  color: white;
  padding: 50px 20px;
`;

export const HowContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const HowItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const HowText = styled.div`
  font-family: Calibre Semi;
  font-size: 24px;
  line-height: 120%;
  color: #130623;
  text-align: center;
  padding-top: 10px;
`;
