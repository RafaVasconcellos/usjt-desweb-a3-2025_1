import React from 'react';
import { Link } from 'react-router-dom';

const ActionButton = ({ text, to }) => {
  const wrapperClasses = "col-10 col-sm-8 col-md-6 col-lg-4 mb-4";
  const buttonClasses = "btn fw-medium py-2 w-100";
  const buttonStyle = { backgroundColor: "#1D2D44", color: "white" };

  return (
    <div className={wrapperClasses}>
      {to ? (
        <Link to={to} className={buttonClasses} style={buttonStyle}>
          {text}
        </Link>
      ) : (
        <button className={buttonClasses} style={buttonStyle}>
          {text}
        </button>
      )}
    </div>
  );
};

export default ActionButton;
