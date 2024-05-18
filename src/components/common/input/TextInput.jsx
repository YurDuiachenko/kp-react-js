import React from 'react';
import './TextInput.css';

const TextInput = ({id, label, value, onChange, type = "text"}) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
