import React from 'react';
import ReactDOM from 'react-dom/client';
// Esse é o coração da aplicação, onde importo o componente principal (o App) que define toda a estrutura de páginas
import App from './App.jsx';

import { BrowserRouter } from 'react-router-dom';

// Aqui eu trago os estilos globais que uso no projeto:
// - Bootstrap pro layout e componentes prontos
// - FontAwesome pros ícones
// - Meu CSS global com resets e ajustes que quero que apliquem no projeto todo
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './global.css';

// Aqui é onde a mágica começa: renderizo o app dentro da div com id "root"
ReactDOM.createRoot(document.getElementById('root')).render(
  // Envolvo tudo com o BrowserRouter porque uso rotas com o React Router
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
