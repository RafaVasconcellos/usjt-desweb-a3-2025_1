/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { GoogleGenAI } from "@google/genai";

import fs from "fs";
const formFrontSimulate = JSON.parse(
  fs.readFileSync("./form-front-simulate.json", "utf-8")
);

const app = express();
app.use(express.json());

app.post("/pergunte-ao-gemini", async (req, res) => {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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
