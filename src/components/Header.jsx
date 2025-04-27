import React from 'react';

const Header = () => {
  return (
    <div className="row w-100 p-3 p-md-4">
      <div className="col-12 d-flex justify-content-end">
        <button
          className="btn fw-medium px-3 px-md-4"
          style={{
            backgroundColor: "#1D2D44",
            color: "white",
          }}
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default Header;
