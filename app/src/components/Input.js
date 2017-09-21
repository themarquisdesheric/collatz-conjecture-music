import React from 'react';
import styled from 'styled-components';

var SpacedInput = styled.input`
  margin: 1em .5em;
  width: 55px;
`;

export default function Input({ label, type, value, onChange }) {
  return (
    <label>
      {label}
      <SpacedInput 
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}