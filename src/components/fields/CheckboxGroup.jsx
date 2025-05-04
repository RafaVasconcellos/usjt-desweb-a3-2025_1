import React from 'react';

export default function CheckboxGroup({
  label,
  name,
  options,
  selectedValues,
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
              type="checkbox"
              name={name}
              id={`${name}${i}`}
              value={opt}
              checked={selectedValues.includes(opt)}
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