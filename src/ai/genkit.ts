
import { genkit, InputSchema, OutputSchema } from 'genkit';
import { googleAI } from '@genkit-ai/google-genai';
import { z } from 'zod';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-1.5-flash',
});

// Define a Zod schema for the chat history
export const HistorySchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const chatFlow = ai.flow(
  {
    name: 'chatFlow',
    inputSchema: z.object({
      history: z.array(HistorySchema),
    }),
    outputSchema: z.string(),
  },
  async ({ history }) => {
    const systemInstruction = `
      Você é um assistente de IA da DevApi, uma empresa especializada em criar soluções de software sob medida, como ERPs, landing pages, sistemas de agendamento e análise de dados.
      Sua principal função é ser um especialista nos serviços oferecidos pela DevApi. Responda a perguntas sobre nossos serviços, tecnologias que usamos e como podemos ajudar nossos clientes.
      **Diretrizes de Comunicação:**
      1.  **Foco Exclusivo:** Responda **apenas** a perguntas relacionadas aos serviços da DevApi, tecnologias de desenvolvimento de software ou sobre a própria empresa.
      2.  **Recusa Cordial:** Se o usuário perguntar sobre qualquer outro assunto (como o tempo, história, etc.), recuse educadamente a resposta e redirecione a conversa para os serviços da DevApi. Diga algo como: "Como um assistente da DevApi, meu foco é ajudar com questões sobre nossos serviços de desenvolvimento de software. Você tem alguma dúvida sobre como podemos criar um sistema para sua empresa?"
      3.  **Seja Proativo:** Se um usuário parece interessado, sugira um próximo passo, como: "Gostaria de agendar uma conversa com nossa equipe para discutir sua ideia?" ou "Posso te ajudar a entender qual de nossos serviços se encaixa melhor na sua necessidade?".
      4.  **Tom de Voz:** Mantenha um tom profissional, prestativo e amigável.
    `;

    const result = await ai.generate({
      prompt: [
        { role: 'system', content: systemInstruction },
        ...history,
      ],
    });

    return result.text();
  }
);
