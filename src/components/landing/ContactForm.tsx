
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { handleContactForm, type FormState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  whatsapp: z.string().min(1, 'WhatsApp é obrigatório'),
  email: z.string().email('E-mail inválido'),
  message: z.string().min(1, 'Mensagem é obrigatória'),
});

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="animate-spin" /> : 'Enviar e Abrir no WhatsApp'}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const [state, formAction] = useFormState<FormState, FormData>(handleContactForm, {
    message: '',
    isSuccess: false,
    isError: false,
  });

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', whatsapp: '', email: '', message: '' },
  });

  useEffect(() => {
    if (state.isSuccess) {
      toast({
        title: 'Sucesso!',
        description: state.message,
        duration: 8000,
      });
      form.reset();
      if (state.whatsappUrl) {
        window.open(state.whatsappUrl, '_blank');
      }
    } else if (state.isError) {
      toast({
        variant: 'destructive',
        title: 'Erro no envio',
        description: state.message,
      });
    }
  }, [state, toast, form]);

  return (
    <Form {...form}>
      <form action={formAction} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage>{state.fields?.name}</FormMessage>
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="(XX) XXXXX-XXXX" {...field} />
                </FormControl>
                <FormMessage>{state.fields?.whatsapp}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu.email@exemplo.com" {...field} />
                </FormControl>
                <FormMessage>{state.fields?.email}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Conte-nos sobre seu projeto..." {...field} rows={5} />
              </FormControl>
              <FormMessage>{state.fields?.message}</FormMessage>
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
