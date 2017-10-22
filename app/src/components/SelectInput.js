import React from 'react';
import styled from 'styled-components';

const Select = styled.select` margin: 1em .5em .5em; `;

const Label = styled.label`
  padding-right: 1em; 
  font-family: 'Oswald', sans-serif;
  text-transform: lowercase;
  font-size: .9em;
`;

const SelectInput = ({ label, selected, waveTypes, onChange }) => (
  <Label>
    {label}
    <Select 
      value={selected}
      onChange={onChange}
    >
      {waveTypes.map( (wave, i) => (
        <option 
          key={i}
          value={wave}
        >
          {wave}
        </option>
      ))}
    </Select>
  </Label>
);

export default SelectInput;