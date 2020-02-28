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
  display: none;
`;

export const Label = styled.label`
  cursor: pointer;
  display: block;
  padding: 16px 12px 12px;
  width: 100%;
  font-family: Calibre Semi;
  font-size: 20px;
  line-height: 120%;
  background: #f9ed61;
  border-radius: 6px;
  margin-bottom: 10px;
  ${Radio}:checked + & {
    background: #ff7793;
    color: white;
  }
`;
