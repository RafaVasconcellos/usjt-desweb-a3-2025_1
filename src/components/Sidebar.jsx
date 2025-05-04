// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

export default function Sidebar() {
  return (
    <div
      className="d-flex flex-column align-items-center text-light"
      style={{
        width: '20vw',
        minWidth: 200,
        backgroundColor: '#1D2D44',
        height: '100%',
        padding: '2rem 0' 
      }}
    >
      
      <Link to="/" className="d-inline-block mb-5">
        <img
          src={logo}
          alt="TripBuddy Logo"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Link>
    </div>
  );
}
