
import { googleAI } from '@genkit-ai/google-genai';
import { genkit, z } from 'genkit';

// Inicializa o Genkit com o plugin do Google AI
export const ai = genkit({
  plugins: [googleAI()],
});

export const HistorySchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const chatFlow = ai.defineFlow(
  {
    name: 'chatFlow',
    inputSchema: z.object({
      history: z.array(HistorySchema),
    }),
    outputSchema: z.string(),
  },
  async ({ history }) => {
    try {
      const systemInstruction = `Você é um assistente de IA da DevApi, uma empresa especializada em criar soluções de software sob medida, como ERPs, landing pages, sistemas de agendamento e análise de dados.
Sua principal função é ser um especialista nos serviços oferecidos pela DevApi. Responda a perguntas sobre nossos serviços, tecnologias que usamos e como podemos ajudar nossos clientes.
**Diretrizes de Comunicação:**
1.  **Foco Exclusivo:** Responda **apenas** a perguntas relacionadas aos serviços da DevApi, tecnologias de desenvolvimento de software ou sobre a própria empresa.
2.  **Recusa Cordial:** Se o usuário perguntar sobre qualquer outro assunto, recuse educadamente a resposta e redirecione a conversa para os serviços da DevApi.
3.  **Seja Proativo:** Se um usuário parecer interessado, sugira um próximo passo.
4.  **Tom de Voz:** Mantenha um tom profissional, prestativo e amigável.`;

      const { text } = await ai.generate({
        model: 'googleai/gemini-1.5-flash',
        prompt: [
          { role: 'system', content: [{ text: systemInstruction }] },
          ...history.map((msg) => ({
            role: msg.role,
            content: [{ text: msg.content }],
          })),
        ],
      });

      return text;

    } catch (error) {
      console.error('--- ERRO DETALHADO DENTRO DO GENKIT FLOW ---');
      console.error(error);
      console.error('--- FIM DO ERRO DETALHADO ---');
      throw new Error('Falha ao gerar resposta do modelo de IA. Verifique os logs do servidor para detalhes.');
    }
  }
);
