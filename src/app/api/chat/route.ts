
import dotenv from 'dotenv';
dotenv.config();

import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'No messages provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const systemInstruction = `
        Você é um assistente de IA da DevApi, uma empresa especializada em criar soluções de software sob medida, como ERPs, landing pages, sistemas de agendamento e análise de dados.
        Sua principal função é ser um especialista nos serviços oferecidos pela DevApi. Responda a perguntas sobre nossos serviços, tecnologias que usamos e como podemos ajudar nossos clientes.
        **Diretrizes de Comunicação:**
        1.  **Foco Exclusivo:** Responda **apenas** a perguntas relacionadas aos serviços da DevApi, tecnologias de desenvolvimento de software ou sobre a própria empresa.
        2.  **Recusa Cordial:** Se o usuário perguntar sobre qualquer outro assunto (como o tempo, história, etc.), recuse educadamente a resposta e redirecione a conversa para os serviços da DevApi. Diga algo como: "Como um assistente da DevApi, meu foco é ajudar com questões sobre nossos serviços de desenvolvimento de software. Você tem alguma dúvida sobre como podemos criar um sistema para sua empresa?"
        3.  **Seja Proativo:** Se um usuário parece interessado, sugira um próximo passo, como: "Gostaria de agendar uma conversa com nossa equipe para discutir sua ideia?" ou "Posso te ajudar a entender qual de nossos serviços se encaixa melhor na sua necessidade?".
        4.  **Tom de Voz:** Mantenha um tom profissional, prestativo e amigável.
      `;

    // A Vercel AI SDK lida com o histórico e a mensagem do sistema automaticamente
    const result = await streamText({
      model: google('gemini-1.5-flash-latest'),
      system: systemInstruction,
      messages,
       safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_MEDIUM_AND_ABOVE' },
      ],
      temperature: 1,
    });

    return result.toDataStreamResponse();

  } catch (error) {
    console.error('Error in chat API:', error);
    if (error instanceof Error) {
       return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    return new Response(JSON.stringify({ error: 'An internal server error occurred.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
