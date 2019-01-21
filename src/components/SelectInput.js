import React from 'react';
import PropTypes from 'prop-types';

const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

const SelectInput = ({ label, selected, onChange }) => (
  <label>
    {label}
    <div>{selected}</div>
    <select 
      value={selected}
      onChange={onChange}
    >
      {waveTypes.map( (wave) => (
        <option key={wave} value={wave}>
          {wave}
        </option>
      ))}
    </select>
  </label>
);

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SelectInput;
