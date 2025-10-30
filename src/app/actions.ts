
'use server';

import { z } from 'zod';
import {
  estimateLeadQuality,
  type LeadQualityEstimationOutput,
} from '@/ai/flows/lead-quality-estimation';
import { contactSchema } from '@/lib/definitions';
import type { FormState } from '@/lib/definitions';


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
        projectType: fieldErrors.projectType?.[0],
        message: fieldErrors.message?.[0],
      },
      isSuccess: false,
      isError: true,
    };
  }

  try {
    const aiResponse = await estimateLeadQuality(parsed.data);

    const { name, email, projectType, message } = parsed.data;
    const whatsappMessage = `Olá! Tenho interesse nos seus serviços.\n\n*Nome:* ${name}\n*Email:* ${email}\n*Tipo de Projeto:* ${projectType}\n\n*Mensagem:*\n${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5541995343245?text=${encodedMessage}`;


    const successMessage = aiResponse.flagForSales
      ? `Obrigado! Sua solicitação é de alta prioridade. Estamos te redirecionando para o WhatsApp. (Análise da IA: ${aiResponse.reason})`
      : `Obrigado pela sua mensagem! Estamos te redirecionando para o WhatsApp. (Análise da IA: ${aiResponse.reason})`;

    return {
      message: successMessage,
      isSuccess: true,
      isError: false,
      aiResponse,
      whatsappUrl: whatsappUrl,
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
