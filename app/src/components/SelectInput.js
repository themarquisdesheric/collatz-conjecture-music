import React from 'react';
import styled from 'styled-components';

var Select = styled.select`
  margin: 1em .5em .5em;
`;

export default function SelectInput({ label, selected, waveTypes = [], onChange }) {
  return (
    <label>
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
    </label>
  );
}