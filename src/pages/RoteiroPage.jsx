// Importando React e o useState pra controlar o estado do form
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // pra poder redirecionar depois que o form for enviado
import axiosClient from '../axiosClient';
// Importando os componentes que montei separadinhos pra deixar o código mais limpo
import Sidebar from '../components/Sidebar';
import TextInput from '../components/fields/TextInput';
import DateTimeField from '../components/fields/DateTimeField';
import RadioGroup from '../components/fields/RadioGroup';
import CheckboxGroup from '../components/fields/CheckboxGroup';
import SelectField from '../components/fields/SelectField';
import ActionButton from '../components/ActionButton';

export default function RoteiroPage() {
  const navigate = useNavigate(); // hook do React Router pra navegar entre páginas

  // Esse state guarda todos os dados do formulário
  const [form, setForm] = useState({
    destino: '',
    ida: '',
    volta: '',
    orcamento: '',
    atividades: [],
    acompanhantes: '',
    preferencias: ''
  });

  // Essas aqui são as opções que vão aparecer nos inputs (radio, checkbox, select)
  const orcamentos = ['R$ 400 - R$ 600', 'R$ 600 - R$ 700', 'R$ 700 - R$ 800'];
  const atividadesList = [
    'Museu','Praia','Balada',
    'Parque','Esporte','Trilha',
    'Restaurante','Compras'
  ];
  const acompanhantesOpts = [
    { value: 'sozinho', label: 'Sozinho' },
    { value: 'familia',  label: 'Família' },
    { value: 'amigos',   label: 'Amigos' },
    { value: 'casal',    label: 'Casal' }
  ];

  // Essa função lida com mudanças nos inputs do formulário
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    // Se for checkbox (no caso das atividades), adiciona ou remove do array
    if (type === 'checkbox') {
      setForm(prev => {
        const atividades = checked
          ? [...prev.atividades, value] // adiciona se estiver marcado
          : prev.atividades.filter(a => a !== value); // remove se desmarcar
        return { ...prev, atividades };
      });
    } else {
      // Se for qualquer outro input, atualiza direto o campo pelo name
      setForm(prev => ({ ...prev, [name]: value }));
    }
  }

  // Quando o formulário for enviado, redireciona pra página de saída
  function handleSubmit(e) { //e é o evento que lida com a função "enviar o formulario" 
    e.preventDefault();

    axiosClient.post('/pergunte-ao-gemini', form) //encaminha formulario com http pelo axios e post
    .then((res) => { 
      navigate('/saida', { state: {form, respostaIA: res.data} }); // joga os dados do form e a resposta via state
    })
    .catch((err) => {
      console.error('Erro ao gerar roteiro:', err);
      alert ('Erro ao gerar o roteiro. Tente novamente');
    });
  }

  return (
    <div className="container-fluid p-0">
      <div className="row g-0 min-vh-100">
        {/* Sidebar lateral esquerda */}
        <div className="col-3 p-0">
          <Sidebar />
        </div>

        {/* Formulário principal */}
        <div className="col-9" style={{ backgroundColor: '#F0EBD8' }}>
          <div className="p-5 d-flex flex-column align-items-center">
            {/* Título da página */}
            <h2
              className="text-center mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", color: '#1D2D44' }}
            >
              📝 Para onde você gostaria de viajar?
            </h2>

            {/* Caixa de instrução (badge bonitinha com info) */}
            <div className="mb-4 w-100" style={{ maxWidth: 600 }}>
              <div
                style={{
                  backgroundColor: '#1D2D44',
                  color: '#FFF',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem',
                  textAlign: 'center'
                }}
              >
                Compartilhe algumas informações para gerarmos seu roteiro!
              </div>
            </div>

            {/* O formulário mesmo */}
            <form
              onSubmit={handleSubmit}
              className="bg-white p-4 rounded shadow-sm w-100"
              style={{ maxWidth: 600 }}
            >
              {/* Destino */}
              <TextInput
                label="Destino:"
                name="destino"
                placeholder="Ex: Nova York (EUA)"
                value={form.destino}
                onChange={handleChange}
                required
              />

              {/* Datas de ida e volta em duas colunas */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <DateTimeField
                    label="Ida:"
                    name="ida"
                    value={form.ida}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <DateTimeField
                    label="Volta:"
                    name="volta"
                    value={form.volta}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Escolha do orçamento via radio */}
              <RadioGroup
                label="Orçamento:"
                name="orcamento"
                options={orcamentos}
                value={form.orcamento}
                onChange={handleChange}
              />

              {/* Atividades via checkbox */}
              <CheckboxGroup
                label="Atividades da Viagem:"
                name="atividades"
                options={atividadesList}
                selectedValues={form.atividades}
                onChange={handleChange}
              />

              {/* Select de acompanhantes */}
              <SelectField
                label="Você irá com:"
                name="acompanhantes"
                options={acompanhantesOpts}
                value={form.acompanhantes}
                onChange={handleChange}
                required
              />

              {/* Campo opcional de preferências */}
              <TextInput
                label="Preferências (opcional):"
                name="preferencias"
                placeholder="Ex: Lugares vazios, Comidas Vegetarianas"
                value={form.preferencias}
                onChange={handleChange}
              />

              {/* Botões no final do form */}
              <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
                <ActionButton text="Gerar roteiro"/>
                <ActionButton text="Voltar" to="/" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
