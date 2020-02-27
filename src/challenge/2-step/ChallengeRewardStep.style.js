import styled from 'styled-components';

export const Icon = styled.span`
  :before {
    font-family: 'Material Icons';
    content: 'check_circle';
  }
`;

export const Radio = styled.input`
  opacity: 0;
  height: 0;
`;

export const Label = styled.label`
  display: block;
  cursor: pointer;
  padding: 4px 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 295px;
  height: 48px;
  font-weight: bold;
  margin: auto;
  ${Radio}:checked + & {
    border: 3px solid black;
  }
`;
