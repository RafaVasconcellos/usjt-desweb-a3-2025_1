import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Carroussel from './components/Carroussel';


const App = () => {
  return (
    <div
      className="container-fluid d-flex flex-column vh-100 position-relative"
      style={{ backgroundColor: "#F0EBD8", overflowX: "hidden" }}
    >
      <Header />
      <MainContent carroussel={<Carroussel />} />
    </div>
  );
};

export default App;
