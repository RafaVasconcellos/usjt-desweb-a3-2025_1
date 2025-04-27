import React from 'react';

const ActionButton = ({ text }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mb-4">
      <button
        className="btn fw-medium py-2 w-100"
        style={{
          backgroundColor: "#1D2D44",
          color: "white",
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default ActionButton;
