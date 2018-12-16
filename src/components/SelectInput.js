import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label } from './Input';

const Select = styled.select` margin: 1em .5em .5em; `;

const SelectInput = ({ label, selected, waveTypes, onChange }) => (
  <Label>
    {label}
    <Select 
      value={selected}
      onChange={onChange}
    >
      {waveTypes.map( (wave, i) => (
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
  waveTypes: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;