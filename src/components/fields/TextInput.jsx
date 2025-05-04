// src/components/fields/TextInput.jsx
import React from 'react';

export default function TextInput({
  label,
  name,
  placeholder,
  value,
  onChange,
  required = false
}) {
  return (
    <div className="mb-3 text-start">
      <label className="form-label" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {label}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
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
      />
    </div>
  );
}
