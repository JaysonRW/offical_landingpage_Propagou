import { NextResponse } from 'next/server';
import { isBriefing, sendBriefingViaResend } from '@/lib/briefing';

type HistoryMessage = { role: 'user' | 'model'; content: string };

const SYSTEM_PROMPT = `Você é um consultor de tecnologia sênior especializado em:
- Criação de sites, landing pages de alta conversão, SaaS, EMS e plataformas personalizadas.
- Estratégia de vendas para plataformas digitais (consultivo), funil, proposta de valor e definição de escopo.

Objetivo: conduzir a conversa de forma consultiva, levantar um briefing completo do cliente e, quando o cliente indicar que deseja finalizar, produzir um JSON estruturado chamado "briefing" com os campos:
{
  "nome": string,
  "email": string,
  "whatsapp": string,
  "empresa": string,
  "tipoProjeto": string,
  "objetivos": string[],
  "escopoInicial": string[],
  "integracoesDesejadas": string[],
  "prazo": string,
  "orcamentoEstimado": string,
  "diferenciais": string[],
  "pontosDeDor": string[],
  "referencias": string[],
  "observacoes": string
}

Diretrizes:
1. Mantenha foco nos serviços/tecnologias e necessidades do cliente.
2. Recuse polidamente assuntos fora do escopo e redirecione.
3. Seja proativo, valide entendimento e sugira próximos passos.
4. Quando o cliente disser que deseja finalizar, retorne o JSON "briefing" bem formatado (apenas o JSON).`;

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
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...history.map((m) => ({
        role: m.role === 'model' ? 'assistant' : 'user',
        content: m.content,
      })),
    ];

    // Log da requisição
    console.log('[CHAT] Enviando para Abacus', {
      baseUrl,
      model,
      messagesCount: messages.length,
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