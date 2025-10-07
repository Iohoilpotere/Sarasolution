
import { GoogleGenAI, Type } from "@google/genai";
import { GeminiSuggestion } from '../types';
import { ESTIMATOR_SERVICES } from '../constants';

// IMPORTANT: This check is for the web app environment.
// Do not use this pattern in a Node.js environment.
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.warn("API_KEY environment variable not set. Gemini features will be disabled.");
}

const ai = new GoogleGenAI({ apiKey: apiKey || 'disabled' });

const suggestionSchema = {
  type: Type.OBJECT,
  properties: {
    suggestedServices: {
      type: Type.ARRAY,
      description: "A list of suggested services based on the user's request.",
      items: {
        type: Type.STRING,
        description: `The name of a suggested service. Must be one of: ${ESTIMATOR_SERVICES.join(', ')}.`,
      }
    },
    reasoning: {
      type: Type.STRING,
      description: "A brief, friendly, and encouraging explanation in Italian of why these services were suggested."
    }
  },
  required: ['suggestedServices', 'reasoning'],
};

export const getServiceSuggestions = async (prompt: string): Promise<GeminiSuggestion | null> => {
  if (!apiKey) {
    // Return a mock response if API key is not available
    return {
        suggestedServices: [ESTIMATOR_SERVICES[1], ESTIMATOR_SERVICES[6]],
        reasoning: "Questa è una demo. Con l'AI, avremmo analizzato la tua richiesta per suggerirti le soluzioni migliori per l'efficienza energetica e il comfort della tua casa!"
    };
  }
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Un potenziale cliente italiano ha descritto le sue esigenze così: "${prompt}". In base a ciò, suggerisci un pacchetto di servizi pertinenti dall'elenco fornito. Rispondi in italiano.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: suggestionSchema,
      },
    });

    const jsonText = response.text.trim();
    if (jsonText) {
      const parsedJson = JSON.parse(jsonText);
      return parsedJson as GeminiSuggestion;
    }
    return null;
  } catch (error) {
    console.error("Error fetching suggestions from Gemini API:", error);
    return null;
  }
};
