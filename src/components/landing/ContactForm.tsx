
'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { handleContactForm } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MessageSquare } from 'lucide-react';
import { contactSchema, type FormState } from '@/lib/definitions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div className="glowing-btn inline-block w-full rounded-md">
      <div className="btn-inner !rounded-md">
        <Button type="submit" disabled={pending} className="w-full">
          {pending ? (
            <Loader2 className="animate-spin" />
          ) : (
            <>
              <MessageSquare className="mr-2 h-4 w-4" />
              Enviar e Abrir no WhatsApp
            </>
          )}
        </Button>
      </div>
    </div>
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
    defaultValues: { name: '', whatsapp: '', email: '', projectType: '', message: '' },
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
  
  // Wrapper action to integrate react-hook-form and server action
  const action: (payload: FormData) => void = (payload) => {
    form.clearErrors(); // Clear previous errors
    const result = contactSchema.safeParse(Object.fromEntries(payload));
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      Object.keys(fieldErrors).forEach((fieldName) => {
        const key = fieldName as keyof typeof fieldErrors;
        form.setError(key, { type: 'manual', message: fieldErrors[key]?.[0] });
      });
      toast({
        variant: 'destructive',
        title: 'Erro de Validação',
        description: 'Por favor, verifique os campos destacados.',
      });
      return; 
    }
    formAction(payload);
  };


  return (
    <Form {...form}>
      <form action={action} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
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
                <FormMessage />
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
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo de Projeto</FormLabel>
               <Select onValueChange={field.onChange} defaultValue={field.value} name={field.name}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo de projeto" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="site">Site Institucional</SelectItem>
                  <SelectItem value="landing-page">Landing Page</SelectItem>
                  <SelectItem value="portal-personalizado">Portal Personalizado</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Conte-nos sobre seu projeto..." {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton />
      </form>
    </Form>
  );
}
