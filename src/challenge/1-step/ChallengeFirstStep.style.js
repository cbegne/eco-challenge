import styled from 'styled-components';

export const Form = styled.form`
  font-family: Calibre Semi;
  font-style: normal;
  font-size: 36px;
  line-height: 110%;
  color: #370972;
  text-align: center;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
`;

export const Input = styled.input`
  font-family: Calibre Semi;
  font-size: 36px;
  line-height: 110%;
  display: inline-block;
  width: 100%;
  outline: none;
  text-align: center;
  background-color: #f2f2f2;
  color: #ff7793;
  padding-top: 8px;
  margin-bottom: 8px;
  border-radius: 6px;
  border: 2px solid transparent;
  &::placeholder {
    color: #ff7793;
  }
  &:focus {
    border: 2px solid #FF7793;
  }
`;

export const Select = styled.select`
  font-family: Calibre Semi;
  font-size: 36px;
  line-height: 110%;
  color: #ff7793;
  background-color: #f2f2f2;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  padding: 12px 32px 0 16px;
  margin-bottom: 8px;
  border-radius: 6px;
  border: 2px solid transparent;
  // CARRET DOWN
  background-image:
    linear-gradient(45deg, transparent 50%, #FF7793 50%),
    linear-gradient(135deg, #FF7793 50%, transparent 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em - 12px),
    calc(100% - 15px) calc(1em - 12px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  &:focus {
    border: 2px solid #FF7793;
  }
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
  text-align: center;
  color: #ff7793;
  text-shadow: rgb(255, 255, 255) 5px 0px 0px,
    rgb(255, 255, 255) 4.90033px 0.993347px 0px,
    rgb(255, 255, 255) 4.60531px 1.94709px 0px,
    rgb(255, 255, 255) 4.12668px 2.82321px 0px,
    rgb(255, 255, 255) 3.48353px 3.58678px 0px,
    rgb(255, 255, 255) 2.70151px 4.20736px 0px,
    rgb(255, 255, 255) 1.81179px 4.6602px 0px,
    rgb(255, 255, 255) 0.849836px 4.92725px 0px,
    rgb(255, 255, 255) -0.145998px 4.99787px 0px,
    rgb(255, 255, 255) -1.13601px 4.86924px 0px,
    rgb(255, 255, 255) -2.08073px 4.54649px 0px,
    rgb(255, 255, 255) -2.94251px 4.04248px 0px,
    rgb(255, 255, 255) -3.68697px 3.37732px 0px,
    rgb(255, 255, 255) -4.28444px 2.57751px 0px,
    rgb(255, 255, 255) -4.71111px 1.67494px 0px,
    rgb(255, 255, 255) -4.94996px 0.7056px 0px,
    rgb(255, 255, 255) -4.99147px -0.291871px 0px,
    rgb(255, 255, 255) -4.83399px -1.27771px 0px,
    rgb(255, 255, 255) -4.48379px -2.2126px 0px,
    rgb(255, 255, 255) -3.95484px -3.05929px 0px,
    rgb(255, 255, 255) -3.26822px -3.78401px 0px,
    rgb(255, 255, 255) -2.4513px -4.35788px 0px,
    rgb(255, 255, 255) -1.53666px -4.75801px 0px,
    rgb(255, 255, 255) -0.560763px -4.96845px 0px,
    rgb(255, 255, 255) 0.437495px -4.98082px 0px,
    rgb(255, 255, 255) 1.41831px -4.79462px 0px,
    rgb(255, 255, 255) 2.34258px -4.41727px 0px,
    rgb(255, 255, 255) 3.17346px -3.86382px 0px,
    rgb(255, 255, 255) 3.87783px -3.15633px 0px,
    rgb(255, 255, 255) 4.4276px -2.32301px 0px,
    rgb(255, 255, 255) 4.80085px -1.39708px 0px,
    rgb(255, 255, 255) 4.98271px -0.415447px 0px;
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

export const Text = styled.div`
  font-family: Calibre Semi;
  font-size: 20px;
  line-height: 120%;
  color: #370972;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 30px;
`;

export const WhyContainer = styled.div`
  background-color: #ffbcc9;
  padding: 30px;
  font-family: Calibre Semi;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
`;

export const AboutContainer = styled.div`
  background-color: white;
  padding: 30px;
  font-family: Calibre;
  font-style: normal;
  font-weight: 100;
  font-size: 20px;
  line-height: 120%;
  width: 100%;
  text-align: center;
`;
