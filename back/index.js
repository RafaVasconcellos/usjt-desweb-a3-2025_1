/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();

import express from "express";
// import formFrontSimulate from "./form-front-simulate.json";
import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(express.json());

app.post("/pergunte-ao-gemini", async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

  // payload de teste
  const formFrontSimulate = {
    "destino": "Rio de Janeiro",
    "ida": "23/05/2025 23:00",
    "volta": "23/05/2025 23:00",
    "orcamento": "R$ 400 - R$ 600",
    "atividades": [ "restaurante", "praia", "balada" ],
    "acompanhantes": "casal",
    "preferencias": "Não gosto de lugares histórico"
  }

  const {
    destino,
    ida,
    volta,
    orcamento,
    atividades,
    acompanhantes,
    preferencias,
  } = formFrontSimulate;

  const acompanhante = acompanhantes === 'sozinho' ? acompanhantes : `em ${acompanhantes}`;
  const preferencia = preferencias ? `Com as seguintes considerações: ${preferencias}.` : '';

  const prompt = `Crie um roteiro de viagens para ${destino}, de ${ida} até ${volta}. Considerando um orçamento diário entre ${orcamento}.
  Precisamos que inclua no roteiro atividades relacionadas a ${atividades.join(", ")}, além de outras sugestões para complementar o roteiro da viagem.
  Para viajar ${acompanhante}. ${preferencia}
  Por favor retornar na versão de um diário, limitando as atividade para serem realizadas por dia, podendo ou não ter mais de uma atividade.`;

  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  res.json(`Resposta: ${response.text}`);
});

app.listen(3000, () => console.log("ta rodando"));
