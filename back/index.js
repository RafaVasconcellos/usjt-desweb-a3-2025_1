/* eslint-disable no-undef */
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from 'cors' //para usar portar diferentes no dominio sem travar a interface, pois nosso back esta na porta 3000 e o front na 5173
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

  const prompt = `
  You are a travel itinerary expert, and your task is to create a detailed itinerary for a trip.
  Use accessible and friendly language.

  NEVER RESPOND WITH ANYTHING OUTSIDE THE CONTEXT OF TRAVEL, TOURISM, FUN, LEISURE, CULTURE, AND RELATED TOPICS.

  HERE ARE IMPORTANT DETAILS FOR GENERATING THE ITINERARY:

  Create a travel itinerary for ${destino}, from ${ida} to ${volta}. Considering a daily budget between ${orcamento}.
  To include in the itinerary activities related to ${atividades.join(", ")}, along with other suggestions to complement the trip.
  The trip will be with ${acompanhante}. ${preferencia}

  Please return the response in the format of a travel journal.

  ALL OF YOUR RESPONSE must be in NORMAL TEXT and in Portuguese!

  ############
  DO NOT USE THESE SPECIAL CHARACTERS:
    NEVER USE ASTERISKS (*)!!!
    DO NOT USE Hash symbols (#)
  #############

  After generating the itinerary, remove all the SPECIAL CHARECTERS! Then, return the itinerary in a format with the following structure: EXAMPLE:

  Olá, futuro viajante solitário para Miami! Preparei um diário de bordo completo para sua aventura tropical, focando em praias incríveis e experiências que complementam o espírito vibrante da cidade. Seu orçamento diário de R$ 700 a R$ 800 (aproximadamente US$ 140-160, considerando a cotação atual) permitirá aproveitar bastante!

  Diário de Bordo: Miami Solo Adventure (16/05/2025 - 30/05/2025)

  Dia 1 (17/05/2025): Chegada e South Beach Vibe

  Manhã: Chegada no Aeroporto Internacional de Miami (MIA). Pegue um transporte por aplicativo (Uber/Lyft) ou um táxi para seu hotel em South Beach. Sugestão de hotel: The Betsy South Beach (um pouco mais caro, mas com atmosfera sofisticada) ou Freehand Miami (mais econômico e com vibe jovem).
  `;

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