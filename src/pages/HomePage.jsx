// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Esses aqui são os componentes que eu criei pra modularizar a parada
import Carroussel from '../components/Carroussel';
import ActionButton from '../components/ActionButton';
import SocialMediaIcon from '../components/SocialMediaIcon';

export default function HomePage() {
  return (
    <div
      // Essa div é tipo o "containerzão" da home. Ocupa 100% da altura da tela (vh-100),
      // centraliza tudo na horizontal e vertical com flexbox
      className="d-flex flex-column vh-100 align-items-center justify-content-center position-relative"
      style={{ backgroundColor: '#F0EBD8' }} // corzinha de fundo pastel, suave
    >
      {/* Aqui vai o carrossel com as imagens de destino, centralizado e com margem inferior */}
      <div className="mb-4 w-100" style={{ maxWidth: 800 }}>
        <Carroussel />
      </div>

      {/* Título principal da home — a cara do app */}
      <h1
        className="display-4 fw-bold mb-3 text-center"
        style={{ fontFamily: "'Poppins', sans-serif", color: '#1D2D44' }}
      >
        Welcome TripBuddy
      </h1>

      {/* Subtítulo com ícone de localização */}
      <p
        className="fs-5 mb-4 text-center"
        style={{ fontFamily: "'Poppins', sans-serif", color: '#1D2D44' }}
      >
        <i className="fa-solid fa-map-location-dot me-2"></i>
        Planeje sua próxima aventura
      </p>

      {/* Botão que leva pro formulário de planejamento */}
      <ActionButton text="Começar o Planejamento" to="/roteiro" />

      {/* Ícones das redes sociais fixos no cantinho da tela */}
      <div className="position-absolute bottom-0 end-0 p-3">
        <SocialMediaIcon />
      </div>
    </div>
  );
}
