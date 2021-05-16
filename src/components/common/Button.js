import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background: #f8049c;
  font-weight: bold;
  border-radius: 4px;
  padding: 8px;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;
  cursor: pointer;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

export {Button};