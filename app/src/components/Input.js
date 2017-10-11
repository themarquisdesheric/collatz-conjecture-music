import React from 'react';
import styled from 'styled-components';

const SpacedInput = styled.input`
  margin: 1em .5em;
  width: 55px;
`;

const Label = styled.label`
  font-family: 'Oswald', sans-serif;  
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