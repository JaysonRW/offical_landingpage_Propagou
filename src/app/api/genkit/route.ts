
import { nextHandler } from '@genkit-ai/next';
import { chatFlow } from '@/ai/genkit';

export const POST = nextHandler({
  flows: [chatFlow],
});
