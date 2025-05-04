import React from 'react';

export default function RadioGroup({
  label,
  name,
  options,
  value,
  onChange
}) {
  return (
    <div className="mb-3 text-start">
      <label className="form-label d-block" style={{ fontFamily: "'Poppins', sans-serif" }}>{label}</label>
      <div className="d-flex flex-wrap gap-3">
        {options.map((opt, i) => (
          <div className="form-check" key={i}>
            <input
              className="form-check-input"
              type="radio"
              name={name}
              id={`${name}${i}`}
              value={opt}
              checked={value === opt}
              onChange={onChange}
              style={{ width: '1rem', height: '1rem' }}
            />
            <label
              className="form-check-label ms-2"
              htmlFor={`${name}${i}`}
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {opt}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}