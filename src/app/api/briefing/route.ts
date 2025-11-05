import { NextResponse } from 'next/server';
import { Briefing, sendBriefingViaResend } from '@/lib/briefing';

/**
 * Endpoint para envio de briefing por e-mail.
 * Usa a API do Resend via fetch (sem dependência adicional).
 * Requer RESEND_API_KEY configurada no ambiente.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const briefing: Briefing | undefined = body?.briefing;

    if (!briefing) {
      return NextResponse.json({ error: 'Briefing ausente no body.' }, { status: 400 });
    }

    const result = await sendBriefingViaResend(briefing);
    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json(
      { error: `Erro interno ao enviar briefing: ${error?.message || 'desconhecido'}` },
      { status: 500 }
    );
  }
}