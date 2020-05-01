import React from 'react';
import styled from 'styled-components';

export const Container = styled.h2`
  font-family: Sharp Comp;
  font-size: 28px;
  line-height: 110%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #370972;
  text-align: center;
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

export const TitleSticker = ({ children, style = {} }) => (
  <Container style={style}>{children}</Container>
);
