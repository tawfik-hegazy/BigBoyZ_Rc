import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from "../constants";

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} (${p.category}): $${p.price}. ${p.description} Specs: ${JSON.stringify(p.specs)}`
  ).join('\n');

  return `
    You are the expert shop assistant for 'BigBoyZ Rc'.
    Your goal is to help customers find products, explain technical details about RC cars/boats, and offer advice.
    
    Here is our current product catalog:
    ${productContext}
    
    Rules:
    1. Only recommend products from our catalog.
    2. Be enthusiastic, use "BigBoyZ" branding occasionally. Tone is fun, hobbyist, and professional.
    3. Keep answers concise (under 100 words) unless asked for a detailed explanation.
    4. If asked about prices, quote the exact price from the catalog.
    5. Always remind users that purchases must be made in-store. We do not sell online.
  `;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "I'm currently offline (API Key missing). Please check back later!";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: getSystemInstruction(),
      }
    });

    return response.text || "I'm not sure how to answer that right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the shop mainframe. Try again in a moment.";
  }
};