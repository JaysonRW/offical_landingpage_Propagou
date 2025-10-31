'use client';

import { useChat } from 'ai/react';
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Send, MessageSquare } from 'lucide-react';
import Image from 'next/image';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M14.05 2a9 9 0 0 1 8 7.94" />
    <path d="M14.05 6A5 5 0 0 1 18 10" />
  </svg>
);

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
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://wa.me/5541995343245"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-green-500 text-sm font-medium text-white shadow-lg ring-offset-background transition-colors hover:bg-green-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 animate-pulse-whatsapp"
            >
              <WhatsAppIcon className="h-7 w-7" />
            </a>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Fale conosco</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="fixed bottom-6 right-24 z-50 h-14 w-14 rounded-full shadow-lg"
          >
            <MessageSquare className="h-7 w-7" />
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
    </>
  );
}
