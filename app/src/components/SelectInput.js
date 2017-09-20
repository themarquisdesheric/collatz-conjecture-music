import React from 'react';

export default function SelectInput({ label, selected, waveTypes = [], onChange }) {
  return (
    <label>
      {label}
      <select value={selected} onChange={onChange}>
        {waveTypes.map(function(wave, i) {
          return (
            <option key={i} value={wave}>
              {wave}
            </option>
          );
        })}
      </select>
    </label>
  );
}