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
  width: 100%;
  height: 48px;
  line-height: 35px;
  font-weight: bold;
  margin: auto;
  background: #fcf7e3;
  border-radius: 8px;
  ${Radio}:checked + & {
    background: #ffffff;
    box-shadow: 4px 4px 0px #33115f;
  }
`;

export const ButtonBlock = styled.div`
  display: flex;
  margin-top: 32px;
`;
