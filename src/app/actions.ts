
'use server';

import { z } from 'zod';
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
    const { name, email, projectType, message, whatsapp } = parsed.data as any;

    // Mensagem mais profissional para WhatsApp
    const whatsappMessage =
      `Olá! Tenho interesse nos serviços da PropagouDev.\n\n` +
      `Dados do contato:\n` +
      `• Nome: ${name}\n` +
      `• E-mail: ${email || 'Não informado'}\n` +
      `• WhatsApp: ${whatsapp || 'Não informado'}\n` +
      `• Tipo de projeto: ${projectType}\n\n` +
      `Mensagem:\n${message || 'Não informado'}\n\n` +
      `Podemos seguir pelo WhatsApp?`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/5541995343245?text=${encodedMessage}`;

    return {
      message: 'Obrigado! Estamos redirecionando você para o WhatsApp.',
      isSuccess: true,
      isError: false,
      whatsappUrl,
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
