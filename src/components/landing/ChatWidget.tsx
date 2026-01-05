
'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageSquare, Loader2 } from 'lucide-react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function ChatWidget() {
  const CHAT_ICON = 'https://placehold.co/100x100/1e293b/ffffff?text=Bot';
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newUserMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          input: {
            history: newMessages,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // O endpoint retorna um JSON com a chave "output"
      const result = await response.json();
      const modelResponse = result.output;

      if (typeof modelResponse !== 'string') {
        throw new Error('Resposta inesperada do servidor.');
      }
      
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', content: modelResponse },
      ]);

    } catch (error) {
      console.error('Falha ao comunicar com a API de Chat:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'model', content: 'Desculpe, não consegui obter uma resposta. Tente novamente.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                aria-label="Abrir chat PropagouDev"
                className="fixed bottom-6 right-6 z-50 p-0 bg-transparent hover:bg-transparent shadow-none border-0 transition-transform duration-200 hover:scale-110"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full ring-2 ring-primary/40 shadow-[0_0_24px_rgba(255,255,255,0.20)] bg-gradient-to-br from-primary/25 via-primary/10 to-transparent">
                  <Image
                    src={CHAT_ICON}
                    alt="PropagouDev"
                    width={56}
                    height={56}
                    className="h-14 w-14 drop-shadow-md"
                  />
                </div>
              </Button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent>
            Vamos conversar!
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>PropagouDev</DialogTitle>
          <DialogDescription>
            Tire suas dúvidas sobre nossos serviços e soluções.
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[400px] w-full pr-4">
          <div className="space-y-4">
            {messages.map((m, index) => (
              <div
                key={index}
                className={`flex items-start gap-3 ${
                  m.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.role === 'model' && (
                  <Image
                    src={CHAT_ICON}
                    alt="PropagouDev"
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-full"
                  />
                )}
                <div
                  className={`max-w-[75%] rounded-lg p-3 text-sm ${
                    m.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p>{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex items-center justify-start gap-3">
                  <Image
                    src={CHAT_ICON}
                    alt="PropagouDev"
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-full"
                  />
                  <div className="max-w-[75%] rounded-lg p-3 text-sm bg-muted">
                    <Loader2 className="animate-spin h-5 w-5" />
                  </div>
               </div>
            )}
          </div>
        </ScrollArea>

        <form onSubmit={handleSubmit} className="relative mt-4 flex">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Qual sua dúvida?"
            className="pr-12"
            disabled={isLoading}
          />
          <Button
            type="submit"
            size="icon"
            variant="ghost"
            className="absolute right-1 top-1/2 -translate-y-1/2 transform"
            disabled={isLoading || !input.trim()}
          >
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
