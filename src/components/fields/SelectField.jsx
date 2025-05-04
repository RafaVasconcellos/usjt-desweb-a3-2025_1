// src/components/fields/SelectField.jsx
import React from 'react';

export default function SelectField({
  label,
  name,
  options,
  value,
  onChange,
  required = false
}) {
  return (
    <div className="mb-3 text-start">
      <label
        className="form-label"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-100"
        style={{
          backgroundColor: '#DFDFDF',
          border: '1px solid #ccc',
          borderRadius: '20px',
          height: '40px',
          padding: '0 16px',
          fontFamily: "'Poppins', sans-serif",
          fontSize: '1rem'
        }}
      >
        <option value="" disabled hidden>
          Selecione...
        </option>
        {options.map((opt, i) => (
          <option key={i} value={opt.value ?? opt}>
            {opt.label ?? opt}
          </option>
        ))}
      </select>
    </div>
  );
}
