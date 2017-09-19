import React from 'react';

export default function Input({ label, type, value, onChange }) {
  return (
    <div>
      <label>
        {label}<br />
        <input 
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}