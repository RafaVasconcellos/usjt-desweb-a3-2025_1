/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();

import express from "express";
//para usar portas diferentes no dominio sem travar a interface, pois nosso back esta na porta 3000 e o front na 5173
import cors from 'cors'

import { GoogleGenAI } from "@google/genai";

const app = express();
app.use(cors(
  {origin: "http://localhost:5173"}
))
app.use(express.json());

app.post("/pergunte-ao-gemini", async (req, res) => {
  const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});

  const {
    destino,
    ida,
    volta,
    orcamento,
    atividades,
    acompanhantes,
    preferencias,
  } = req.body; //tirei a simulação, agora estamos usando req.body

  const acompanhante = acompanhantes === 'sozinho' ? acompanhantes : `em ${acompanhantes}`;
  const preferencia = preferencias ? `Com as seguintes considerações: ${preferencias}.` : '';

  const prompt = `Crie um roteiro de viagens para ${destino}, de ${ida} até ${volta}. Considerando um orçamento diário entre ${orcamento}.
  Precisamos que inclua no roteiro atividades relacionadas a ${atividades.join(", ")}, além de outras sugestões para complementar o roteiro da viagem.
  Para viajar ${acompanhante}. ${preferencia}
  Por favor retornar na versão de um diário, limitando as atividade para serem realizadas por dia, podendo ou não ter mais de uma atividade.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
    });

    res.json(response.text);
  } catch (error) {
    console.error('Erro ao gerar roteiro c/ gemini:', error);
    res.status(500).json({error: 'Erro ao gerar roteiro com a IA.'});
  }
});

app.listen(3000, () => console.log("ta rodando na porta 3000"));