import { z } from 'zod';
import { type LeadQualityEstimationOutput } from '@/ai/flows/lead-quality-estimation';

export const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório.'),
  whatsapp: z.string().min(1, 'WhatsApp é obrigatório.'),
  email: z.string().email('Endereço de e-mail inválido.').optional().or(z.literal('')),
  projectType: z.enum(['saas', 'site', 'landing-page', 'portal-personalizado', 'outros'], {
    errorMap: () => ({ message: 'Selecione um tipo de projeto válido.' }),
  }),
  message: z.string().optional(),
});

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  isSuccess: boolean;
  isError: boolean;
  aiResponse?: LeadQualityEstimationOutput;
  whatsappUrl?: string;
};
