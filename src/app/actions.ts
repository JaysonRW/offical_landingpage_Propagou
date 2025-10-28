
'use server';

import { z } from 'zod';
import {
  estimateLeadQuality,
  type LeadQualityEstimationOutput,
} from '@/ai/flows/lead-quality-estimation';

const contactSchema = z.object({
  name: z.string().min(2, 'O nome é muito curto'),
  whatsapp: z.string().min(8, 'Número de WhatsApp inválido'),
  email: z.string().email('Endereço de e-mail inválido'),
  message: z.string().min(10, 'A mensagem é muito curta').max(500, 'A mensagem é muito longa'),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  isSuccess: boolean;
  isError: boolean;
  aiResponse?: LeadQualityEstimationOutput;
};

export async function handleContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData);
  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      message: 'Dados do formulário inválidos. Por favor, verifique os campos.',
      fields: {
        name: fieldErrors.name?.[0],
        whatsapp: fieldErrors.whatsapp?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      },
      isSuccess: false,
      isError: true,
    };
  }

  try {
    const aiResponse = await estimateLeadQuality(parsed.data);

    // In a real app, you would send an email, save to DB, etc. here.
    // For this demo, we'll just return the AI's analysis.

    const successMessage = aiResponse.flagForSales
      ? `Obrigado! Sua solicitação é de alta prioridade. Entraremos em contato em breve. (Análise da IA: ${aiResponse.reason})`
      : `Obrigado pela sua mensagem! Entraremos em contato em breve. (Análise da IA: ${aiResponse.reason})`;

    return {
      message: successMessage,
      isSuccess: true,
      isError: false,
      aiResponse,
    };
  } catch (error) {
    console.error('Error handling contact form:', error);
    return {
      message: 'Ocorreu um erro inesperado. Por favor, tente novamente.',
      isSuccess: false,
      isError: true,
    };
  }
}
