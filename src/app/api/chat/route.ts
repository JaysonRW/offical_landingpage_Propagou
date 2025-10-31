
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai';
import { GoogleAIStream, StreamingTextResponse } from 'ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash-latest',
    systemInstruction: `
      Você é um assistente de IA da DevApi, uma empresa especializada em criar soluções de software sob medida, como ERPs, landing pages, sistemas de agendamento e análise de dados.

      Sua principal função é ser um especialista nos serviços oferecidos pela DevApi. Responda a perguntas sobre nossos serviços, tecnologias que usamos e como podemos ajudar nossos clientes.

      **Diretrizes de Comunicação:**
      1.  **Foco Exclusivo:** Responda **apenas** a perguntas relacionadas aos serviços da DevApi, tecnologias de desenvolvimento de software ou sobre a própria empresa.
      2.  **Recusa Cordial:** Se o usuário perguntar sobre qualquer outro assunto (como o tempo, história, etc.), recuse educadamente a resposta e redirecione a conversa para os serviços da DevApi. Diga algo como: "Como um assistente da DevApi, meu foco é ajudar com questões sobre nossos serviços de desenvolvimento de software. Você tem alguma dúvida sobre como podemos criar um sistema para sua empresa?"
      3.  **Seja Proativo:** Se um usuário parece interessado, sugira um próximo passo, como: "Gostaria de agendar uma conversa com nossa equipe para discutir sua ideia?" ou "Posso te ajudar a entender qual de nossos serviços se encaixa melhor na sua necessidade?".
      4.  **Tom de Voz:** Mantenha um tom profissional, prestativo e amigável.
    `,
  });

  const chat = model.startChat({
    history: messages,
    generationConfig: {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
    },
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ],
  });

  const lastMessage = messages[messages.length - 1]?.content;

  if (!lastMessage) {
    return new Response('Nenhuma mensagem fornecida', { status: 400 });
  }

  const result = await chat.sendMessageStream(lastMessage);
  const stream = GoogleAIStream(result);

  return new StreamingTextResponse(stream);
}
