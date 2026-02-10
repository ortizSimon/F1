
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function askF1Assistant(question: string) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: "You are 'Apex AI', a professional Formula 1 analyst and historian. Provide expert insights, technical details, and historical context about F1. Keep your tone authoritative, passionate, and concise.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to the paddock telemetry. Please try again.";
  }
}
