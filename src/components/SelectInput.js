import React from 'react';

import { string, func } from '../proptypes-constants';

const waveTypes = ['sine', 'sawtooth', 'triangle', 'square'];

const SelectInput = ({ label, wave, onChange }) => (
  <label>
    {label}
    <div>{wave}</div>
    <select value={wave} onChange={onChange}>
      {waveTypes.map( (wave) => (
        <option key={wave} value={wave}>
          {wave}
        </option>
      ))}
    </select>
  </label>
);

SelectInput.propTypes = {
  label: string.isRequired,
  wave: string.isRequired,
  onChange: func.isRequired
};

export default SelectInput;
