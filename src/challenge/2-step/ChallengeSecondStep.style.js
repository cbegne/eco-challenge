import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 3px;
  width: 295px;
  height: 48px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin-top: 100px;
`;

export const Input = styled.input`
  border: 1px solid gray;
  font-size: 15px;
  margin: 25px 0;
`;

export const ReturnButton = styled.button`
  text-align: left;
  margin-bottom: 25px;
  padding: 0;
`;
