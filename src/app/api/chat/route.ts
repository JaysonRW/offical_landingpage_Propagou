import { NextResponse } from 'next/server';
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
import { isBriefing, sendBriefingViaResend } from '@/lib/briefing';

type HistoryMessage = { role: 'user' | 'model'; content: string };

const SYSTEM_PROMPT = `Você é o consultor da PropagouDev, especialista em criar sites, landing pages e sistemas web.

## Seu Jeito de Ser
- Fale como um amigo que entende do assunto: natural, direto e sem tecniquês
- Seja breve: máximo 3-4 linhas por mensagem
- Faça UMA pergunta por vez (o cliente tá ocupado!)
- Use emojis moderadamente para deixar leve 😊

## Sua Missão
Descobrir em 4-5 perguntas rápidas:
1. O que o cliente precisa? (site, LP, sistema?)
2. Qual o objetivo principal? (vender, captar leads, divulgar?)
3. Tem prazo ou orçamento em mente?
4. Já tem material pronto? (logo, textos, fotos?)

## Como Conduzir
- Comece cumprimentando e perguntando: "O que você precisa criar?"
- Adapte as próximas perguntas baseado nas respostas
- Se fugir do escopo (app mobile, design gráfico), seja sincero: "Não fazemos isso, mas posso indicar alguém!"
- Quando tiver o essencial, diga: "Beleza! Vou mandar isso pro nosso WhatsApp pra gente te fazer uma proposta. Qual seu nome e melhor contato?"

## Respostas para Objeções Comuns

### "Está muito caro / Não tenho orçamento"
"Entendo! A gente trabalha com projetos a partir de R$ 2.500. Posso te passar no WhatsApp e a gente vê uma solução que caiba no seu bolso?"

### "Preciso pensar / Vou conversar com meu sócio"
"Sem pressão! Quer que eu mande as informações no WhatsApp? Aí vocês conversam com calma e a gente fica à disposição."

### "Meu primo/sobrinho faz por menos"
"Massa que tem alguém pra ajudar! A diferença aqui é que a gente entrega projeto completo: design profissional, SEO, segurança e suporte. Mas se quiser comparar, te mando uma proposta no WhatsApp?"

### "Demora muito / Preciso pra ontem"
"Te entendo! Dependendo do projeto, a gente consegue entregar em 2-3 semanas. Projetos simples podem sair ainda mais rápido. Bora ver o que dá pra fazer?"

### "Não entendo nada de site / tecnologia"
"Relaxa! A gente cuida de tudo e explica cada etapa de um jeito super simples. Você só vai precisar aprovar e dar os toques finais. Combinado?"

### "Já tentei antes e não deu certo"
"Que chato isso! O que deu errado? Às vezes é só questão de estratégia. A gente pode olhar e ver onde melhorar."

### "Não sei se vai dar resultado"
"Justo! Site sozinho não vende, mas bem feito ele trabalha 24/7 pra você. A gente pode incluir estratégias de conversão pra aumentar as chances. Quer saber mais?"

### "Não tenho tempo pra isso agora"
"Tranquilo! Guardo suas infos aqui e te mando no WhatsApp. Quando tiver um tempo, a gente continua a conversa. Pode ser?"

### "Quero ver portfólio primeiro"
"Claro! Dá uma olhada na galeria de projetos aqui no site (rola a página pra cima). Se gostar do estilo, a gente conversa melhor no WhatsApp!"

### "Preciso de muitas funcionalidades"
"Beleza! Quanto mais complexo, mais legal fica. Me conta quais as principais funcionalidades que você precisa?"

## Importante
- NÃO peça informações técnicas complexas
- NÃO faça várias perguntas de uma vez
- NÃO seja formal demais ("prezado cliente", "cordialmente")
- NÃO force a venda - se não for o momento, deixe a porta aberta
- Seja genuíno e mostre interesse real

## Finalização
Quando tiver: nome, contato, tipo de projeto, objetivo e mais 1-2 detalhes importantes, retorne APENAS o JSON:
{
  "briefing": {
    "nome": "...",
    "contato": "...",
    "projeto": "...",
    "objetivo": "...",
    "detalhes": "...",
    "prazo": "...",
    "orcamento": "..."
  }
}

Campos vazios podem ser "Não informado". Retorne SÓ o JSON, sem texto antes ou depois.`;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const history: HistoryMessage[] = body?.input?.history ?? [];

    const apiKey = process.env.ABACUS_API_KEY;
    const baseUrl = process.env.ABACUS_BASE_URL || 'https://routellm.abacus.ai/v1/chat/completions';
    const model = process.env.ABACUS_MODEL || 'gemini-2.5-flash';
    const stream = false; // manter simples por ora; evoluir para SSE depois

    if (!apiKey) {
      // Log de ambiente ausente
      console.error('[CHAT] ABACUS_API_KEY ausente no ambiente.');
      return NextResponse.json(
        { error: 'ABACUS_API_KEY não configurada no ambiente.' },
        { status: 500 }
      );
    }

    // Mapeia o histórico do widget para o formato do provedor (user/assistant)
    const truncated = history.slice(-5);
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...truncated.map((m) => ({
        role: m.role === 'model' ? 'assistant' : 'user',
        content: m.content,
      })),
    ];

    // Log da requisição
    console.log('[CHAT] Enviando para Abacus', {
      baseUrl,
      model,
      messagesCount: messages.length,
      vercelEnv: process.env.VERCEL_ENV,
    });

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({ model, messages, stream }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error('[CHAT] Erro do provedor Abacus', {
        status: response.status,
        text,
      });
      return NextResponse.json(
        { error: `Falha no provedor Abacus: ${response.status} ${text}` },
        { status: 500 }
      );
    }

    const data = await response.json();
    const output: string = data?.choices?.[0]?.message?.content ?? '';

    if (!output) {
      return NextResponse.json(
        { error: 'Resposta vazia do provedor Abacus.' },
        { status: 500 }
      );
    }

    // Se a saída aparenta ser um briefing JSON, tenta enviar por e-mail.
    let meta: Record<string, any> | undefined;
    try {
      const maybeJson = JSON.parse(output);
      if (isBriefing(maybeJson)) {
        console.log('[CHAT] Briefing detectado, enviando e-mail...');
        const res = await sendBriefingViaResend(maybeJson);
        console.log('[CHAT] Briefing enviado com sucesso', { emailId: res.id });
        meta = { briefingSent: true, emailId: res.id };
      } else if (maybeJson && typeof maybeJson === 'object' && 'briefing' in maybeJson) {
        console.log('[CHAT] Briefing (novo formato) detectado, enviando e-mail...');
        const res = await sendBriefingViaResend(maybeJson as any);
        console.log('[CHAT] Briefing (novo formato) enviado com sucesso', { emailId: res.id });
        meta = { briefingSent: true, emailId: res.id };
      }
    } catch {
      // não é JSON válido; ignora
    }

    // Mantém o contrato esperado pelo ChatWidget: { output }
    return NextResponse.json(meta ? { output, meta } : { output });
  } catch (error: any) {
    console.error('[CHAT] Erro interno no endpoint', error);
    return NextResponse.json(
      { error: `Erro interno no chat: ${error?.message || 'desconhecido'}` },
      { status: 500 }
    );
  }
}