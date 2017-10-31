import React from 'react';
import styled from 'styled-components';

const SpacedInput = styled.input`
  margin: 1em .5em;
  width: 55px;
`;

export const Label = styled.label`
  padding-right: 1em;
  text-transform: lowercase;
  font-size: .9em;
`;

const Input = ({ label, type, value, onChange }) => (
  <Label>
    {label}
    <SpacedInput 
      type={type}
      value={value}
      onChange={onChange}
    />
  </Label>
);

export default Input;