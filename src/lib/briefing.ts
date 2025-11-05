export type Briefing = {
  nome: string;
  email: string;
  whatsapp?: string;
  empresa?: string;
  tipoProjeto: string;
  objetivos?: string[];
  escopoInicial?: string[];
  integracoesDesejadas?: string[];
  prazo?: string;
  orcamentoEstimado?: string;
  diferenciais?: string[];
  pontosDeDor?: string[];
  referencias?: string[];
  observacoes?: string;
};

export type BriefingEnvelope = {
  briefing: {
    nome: string;
    contato: string;
    projeto: string;
    objetivo: string;
    detalhes: string;
    prazo: string;
    orcamento: string;
  };
};

export function isBriefing(obj: any): obj is Briefing {
  if (!obj || typeof obj !== 'object') return false;
  const required = ['nome', 'email', 'tipoProjeto'];
  return required.every((k) => typeof obj[k] === 'string' && obj[k].length > 0);
}

export function isBriefingEnvelope(obj: any): obj is BriefingEnvelope {
  if (!obj || typeof obj !== 'object') return false;
  const b = (obj as any).briefing;
  if (!b || typeof b !== 'object') return false;
  const required = ['nome', 'contato', 'projeto', 'objetivo'];
  return required.every((k) => typeof b[k] === 'string');
}

export async function sendBriefingViaResend(briefing: Briefing | BriefingEnvelope) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = 'propagoumkd@gmail.com';
  const from = process.env.EMAIL_FROM || 'briefing@propagou.dev';

  if (!apiKey) {
    throw new Error('RESEND_API_KEY não configurada.');
  }

  let subject: string;
  let text: string;
  if (isBriefingEnvelope(briefing)) {
    const b = briefing.briefing;
    subject = `Briefing – ${b.nome} (${b.projeto})`;
    text = `Novo briefing (formato simples) recebido:\n\n${JSON.stringify(briefing, null, 2)}`;
  } else {
    subject = `Briefing de Projeto – ${briefing.nome} (${briefing.tipoProjeto})`;
    text = `Novo briefing recebido:\n\n${JSON.stringify(briefing, null, 2)}`;
  }

  const resp = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ to, from, subject, text }),
  });

  if (!resp.ok) {
    const msg = await resp.text();
    throw new Error(`Falha ao enviar briefing por e-mail: ${resp.status} ${msg}`);
  }

  const data = await resp.json();
  return { success: true, id: data?.id };
}