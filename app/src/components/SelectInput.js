import React from 'react';
import styled from 'styled-components';

var Select = styled.select`
  margin: 1em .5em .5em;
`;

var Label = styled.label`
  font-family: 'Oswald', sans-serif;  
`;

export default function SelectInput({ label, selected, waveTypes = [], onChange }) {
  return (
    <Label>
      {label}
      <Select value={selected} onChange={onChange}>
        {waveTypes.map(function(wave, i) {
          return (
            <option key={i} value={wave}>
              {wave}
            </option>
          );
        })}
      </Select>
    </Label>
  );
}