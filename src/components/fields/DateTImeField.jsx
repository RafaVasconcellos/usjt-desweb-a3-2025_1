// src/components/fields/DateTimeField.jsx
import React from 'react';

export default function DateTimeField({
  label,
  name,
  value,
  onChange,
  required = false
}) {
  return (
    <div className="mb-3 col text-start">
      <label
        className="form-label"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {label}
      </label>
      <input
        type="datetime-local"
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
      />
    </div>
  );
}
