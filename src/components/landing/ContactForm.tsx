
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

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
import { useToast } from '@/hooks/use-toast';
import { Loader2, MessageSquare } from 'lucide-react';
import { contactSchema } from '@/lib/definitions';

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', whatsapp: '', email: '', projectType: undefined, message: '' },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    setIsSubmitting(true);
    
    try {
      const { name, email, projectType, message, whatsapp } = data;

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

      toast({
        title: 'Sucesso!',
        description: 'Redirecionando para o WhatsApp...',
        duration: 8000,
      });

      form.reset();
      window.location.href = whatsappUrl;
    } catch (error) {
      console.error('Error handling contact form:', error);
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Ocorreu um erro ao processar o formulário.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Nome
                <span className="ml-1 text-muted-foreground text-xs">(obrigatório)</span>
              </FormLabel>
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
                <FormLabel>
                  WhatsApp
                  <span className="ml-1 text-muted-foreground text-xs">(obrigatório)</span>
                </FormLabel>
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
              <FormLabel>
                Tipo de Projeto
                <span className="ml-1 text-muted-foreground text-xs">(obrigatório)</span>
              </FormLabel>
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
        
        <div className="glowing-btn inline-block w-full rounded-md">
          <div className="btn-inner !rounded-md">
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? (
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
      </form>
    </Form>
  );
}
