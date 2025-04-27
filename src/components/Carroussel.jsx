import React from 'react';

import imgGramado from '../assets/images/image-gramado.jpg';
import imgLencois from '../assets/images/image-lencois.jpg';
import imgBalneario from '../assets/images/image-balneario.jpg';
import imgMontanhas from '../assets/images/image-montanhas.jpg';
import imgPaoDeAcucar from '../assets/images/image-pao-de-acucar.jpg';
import imgAreia from '../assets/images/image-areia.jpg';


const Carroussel = () => {
  const slides = [
    [imgGramado, imgLencois, imgBalneario],
    [imgMontanhas, imgPaoDeAcucar, imgAreia]
  ];

  return (
    <div className="position-relative w-100 overflow-visible">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style={{ overflow: "visible" }}>
        <div className="carousel-inner" style={{ overflow: "visible" }}>
          {slides.map((group, groupIdx) => (
            <div key={groupIdx} className={`carousel-item ${groupIdx === 0 ? 'active' : ''}`}>
              <div
                className="d-flex justify-content-center align-items-center"
                style={{
                  width: "120%",
                  marginLeft: "-10%",
                  marginRight: "-10%",
                }}
              >
                {group.map((img, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="flex-shrink-0 mx-3"
                    style={{
                      width: "400px",
                      height: "250px",
                      overflow: "hidden",
                      borderRadius: "12px",
                    }}
                  >
                    <img
                      src={img}
                      alt={`Imagem ${groupIdx}-${imgIdx}`}
                      className="d-block w-100 h-100"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <div className="d-flex justify-content-center mt-3">
          <button className="carousel-control-prev position-static" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next position-static" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carroussel;
