
'use client';

import { useChat } from '@ai-sdk/react';
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
import { Send, MessageSquare } from 'lucide-react';
import Image from 'next/image';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full shadow-lg"
        >
          <MessageSquare className="h-8 w-8" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Assistente Virtual DevApi</DialogTitle>
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
                {m.role === 'assistant' && (
                  <Image
                    src="/icon.png"
                    alt="DevApi"
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
          </div>
        </ScrollArea>

        <form onSubmit={onSubmit} className="relative mt-4 flex">
          <Input
            value={input}
            onChange={handleInputChange}
            placeholder="Qual sua dúvida?"
            className="pr-12"
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
