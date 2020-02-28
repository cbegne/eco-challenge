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
  width: 100%;
  height: 48px;
  line-height: 35px;
  font-weight: bold;
  margin: auto;
  background: #f9ed61;
  border-radius: 4px;
  ${Radio}:checked + & {
    background: #ff7793;
    color: white;
  }
`;
