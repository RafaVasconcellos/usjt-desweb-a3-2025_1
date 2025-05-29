// Importo o React pra usar JSX e hooks
import React from 'react';
import { useLocation } from 'react-router-dom'; // esse hook pega os dados que foram passados via navegação

// Puxo os componentes que montei antes
import Sidebar from '../components/Sidebar';
import ActionButton from '../components/ActionButton';

export default function SaidaPage() {
  // Aqui eu recupero os dados que foram passados do formulário anterior usando o useLocation
  const { state } = useLocation();
  const form = state?.form || {}; // se state for null não da erro e sim fica vazio
  const roteiro = state?.respostaIA || '—'; // garante que o roteiro sempre tenha um valor, mesmo que -

  // Faço uma desestruturação bem simples dos dados pra facilitar a leitura no JSX.
  // Coloco fallback com hífen (—) caso algum campo venha vazio, só pra garantir que não quebre.
  const destino       = form?.destino     || '—';
  const ida           = form?.ida         ? new Date(form.ida).toLocaleDateString() : '—';
  const volta         = form?.volta       ? new Date(form.volta).toLocaleDateString() : '—';
  const orcamento     = form?.orcamento   || '—';
  const atividades    = form?.atividades?.length ? form.atividades.join(', ') : '—';
  const acompanhantes = form?.acompanhantes || '—';
  const preferencias  = form?.preferencias  || '—';

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        {/* Coluna lateral com a logo */}
        <div className="col-3 p-0">
          <Sidebar />
        </div>

        {/* Aqui é onde o resultado da IA vai aparecer formatado */}
        <div
          className="col-9 d-flex flex-column justify-content-center align-items-center"
          style={{ backgroundColor: '#F0EBD8' }}
        >
          {/* Título da página, bem na moralzinha */}
          <h2
            className="mb-4 text-center"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#1D2D44' }}
          >
            Planejamento Completo by TripBuddy
          </h2>

          {/* Esse bloco branco é tipo uma "caixa" que simula o retorno da IA com o planejamento */}
          <div
            className="bg-white rounded shadow-sm p-4 mb-4"
            style={{ width: '100%', maxWidth: 800, minHeight: 200 }}
          >
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                color: '#1D2D44',
                whiteSpace: 'pre-wrap' // isso aqui faz com que quebras de linha (se tiver) sejam respeitadas
              }}
            >
              {/* Aqui é onde o pedro tinha feiro a simulação, eu apenas adicionei o roteiro*/}
              {roteiro}
            </p>
          </div>

          {/* Aqui só tem o botão pra voltar pra Home — deixei ele bem centralizado */}
          <div className="d-flex justify-content-center w-100" style={{ maxWidth: 800 }}>
            <ActionButton text="Voltar à Home" to="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
