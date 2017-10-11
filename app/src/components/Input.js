import React from 'react';
import styled from 'styled-components';

var SpacedInput = styled.input`
  margin: 1em .5em;
  width: 55px;
`;

var Label = styled.label`
  font-family: 'Oswald', sans-serif;  
`;

export default function Input({ label, type, value, onChange }) {
  return (
    <Label>
      {label}
      <SpacedInput 
        type={type}
        value={value}
        onChange={onChange}
      />
    </Label>
  );
}