
'use server';

/**
 * @fileOverview Estimates the quality of a lead based on the information provided in the contact form.
 *
 * - LeadQualityEstimationInput - The input type for the lead quality estimation.
 * - LeadQualityEstimationOutput - The return type for the lead quality estimation.
 * - estimateLeadQuality - A function that estimates the quality of a lead.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const LeadQualityEstimationInputSchema = z.object({
  name: z.string().describe('The name of the lead.'),
  whatsapp: z.string().describe('The WhatsApp number of the lead.'),
  email: z.string().email().describe('The email address of the lead.'),
  projectType: z.string().describe('The type of project the lead is interested in.'),
  message: z.string().describe('The message from the lead.'),
});

export type LeadQualityEstimationInput = z.infer<
  typeof LeadQualityEstimationInputSchema
>;

const LeadQualityEstimationOutputSchema = z.object({
  qualityScore: z
    .number()
    .min(0)
    .max(100)
    .describe('A score indicating the quality of the lead (0-100).'),
  reason: z
    .string()
    .describe('The reason for the assigned quality score, explaining factors considered.'),
  flagForSales: z
    .boolean()
    .describe(
      'Whether the lead should be flagged for immediate sales attention.'
    ),
});

export type LeadQualityEstimationOutput = z.infer<
  typeof LeadQualityEstimationOutputSchema
>;

export async function estimateLeadQuality(
  input: LeadQualityEstimationInput
): Promise<LeadQualityEstimationOutput> {
  return leadQualityEstimationFlow(input);
}

const leadQualityEstimationPrompt = ai.definePrompt({
  name: 'leadQualityEstimationPrompt',
  input: {schema: LeadQualityEstimationInputSchema},
  output: {schema: LeadQualityEstimationOutputSchema},
  prompt: `You are an AI assistant specialized in estimating the quality of leads
based on their provided information in a contact form. Analyze the lead's
information and assign a quality score between 0 and 100, provide a reason
for the score, and determine if the lead should be flagged for immediate
sales attention.

Lead Information:
- Name: {{{name}}}
- WhatsApp: {{{whatsapp}}}
- Email: {{{email}}}
- Project Type: {{{projectType}}}
- Message: {{{message}}}

Consider factors such as the completeness of the information, the clarity of
the message, the type of project, and any indications of serious intent (e.g., urgency, budget mentions). A higher score indicates a
higher quality lead. For example, a 'SaaS' or 'Portal Personalizado' project is generally of higher value.

Output the quality score, the reasoning behind the score, and whether to flag
the lead for sales.

Format output as JSON:
{{output}}`,
});

const leadQualityEstimationFlow = ai.defineFlow(
  {
    name: 'leadQualityEstimationFlow',
    inputSchema: LeadQualityEstimationInputSchema,
    outputSchema: LeadQualityEstimationOutputSchema,
  },
  async input => {
    const {output} = await leadQualityEstimationPrompt(input);
    return output!;
  }
);
