import React from 'react';
import ActionButton from './ActionButton';
import SocialMediaIcon from './SocialMediaIcon';

const MainContent = ({ carroussel }) => {
  return (
    <div className="flex-grow-1 d-flex flex-column align-items-center justify-content-center text-center">


      <h1
        className="display-4 display-md-3 fw-bold mb-2 mb-md-3"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        Welcome TripBuddy
      </h1>

      <div className="d-flex justify-content-center align-items-center mb-4">
        <i className="fa-solid fa-map-location-dot me-2" style={{ color: "#1D2D44" }}></i>
        <h3
          className="fs-5 fs-md-4 fw-normal"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Planeje sua próxima aventura
        </h3>
      </div>

      {carroussel}

      <div className="row w-100 mb-4 mb-md-5">
        <div className="col-12 d-flex flex-column align-items-center">
          <ActionButton text="Começar o Planejamento" />
          <ActionButton text="Conheça Nossos Planos" />
        </div>
      </div>

      {/* Ícones Sociais */}
      <div className="position-absolute bottom-0 end-0 p-3 p-md-4">
        <SocialMediaIcon />
      </div>

    </div>
  );
};

export default MainContent;
