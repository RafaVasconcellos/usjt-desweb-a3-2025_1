import React from 'react';
// Importo o CSS e JS do Bootstrap direto pra já aplicar estilo e funcionalidade nos componentes.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// Também puxo os ícones do FontAwesome, que uso aqui e ali nos botões, navbar, etc.
import '@fortawesome/fontawesome-free/css/all.min.css';

import { Routes, Route } from 'react-router-dom';

// Aqui é onde importo as páginas principais do app.
// HomePage = tela inicial, RoteiroPage = onde preencho o formulário, SaidaPage = onde a IA gera o roteiro
import HomePage    from './pages/HomePage.jsx';
import RoteiroPage from './pages/RoteiroPage.jsx';
import SaidaPage   from './pages/SaidaPage.jsx';

// Componente principal do app
export default function App() {
  return (
    // Estrutura principal da aplicação
    <div
      className="container-fluid p-0 d-flex flex-column vh-100 position-relative"
      style={{ backgroundColor: '#F0EBD8', overflowX: 'hidden' }}
    >
      {/* Aqui eu deixo o main crescer pra ocupar o espaço disponível, mantendo o rodapé (se tiver) no fim */}
      <main className="flex-grow-1">
        {/* Defino as rotas da aplicação — cada URL leva pra uma página */}
        <Routes>
          <Route path="/"        element={<HomePage />} />
          <Route path="/roteiro" element={<RoteiroPage />} />
          <Route path="/saida"   element={<SaidaPage />} />
        </Routes>
      </main>
    </div>
  );
}
