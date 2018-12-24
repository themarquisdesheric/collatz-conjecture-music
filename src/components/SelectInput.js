import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Label = styled.label`
  padding-right: 1em;
  text-transform: lowercase;
  font-size: .9em;
`;

const Select = styled.select` margin: 1em .5em .5em; `;

const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

const SelectInput = ({ label, selected, onChange }) => (
  <Label>
    {label}
    <Select 
      value={selected}
      onChange={onChange}
    >
      {waveTypes.map( (wave) => (
        <option key={wave} value={wave}>
          {wave}
        </option>
      ))}
    </Select>
  </Label>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;
