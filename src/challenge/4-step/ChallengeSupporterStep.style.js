import styled from 'styled-components';

export const InputTop = styled.input`
  border-left: 1px solid gray;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  font-size: 15px;
  height: 50px;
  padding: 10px;
  &::placeholder {
    font-weight: bold;
    color: black;
  }
`;

export const InputBottom = styled.input`
  border: 1px solid gray;
  font-size: 15px;
  height: 50px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const AddButton = styled.button`
  color: gray;
  text-decoration: underline;
  font-size: 16px;
  line-height: 20px;
  margin-top: 20px;
`;
