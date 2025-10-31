'use client';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

// Ícone SVG personalizado para o WhatsApp, representando a bolha com telefone.
const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M20.5 3.5A12.2 12.2 0 0 0 12 2C6.5 2 2 6.5 2 12c0 1.8.4 3.5 1.2 5l-1.1 4.1 4.2-1.1c1.4.7 3 1.1 4.7 1.1h.1c5.5 0 10-4.5 10-10 .1-2.9-1-5.6-2.8-7.5zM12 20.1c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.3.9.9-3.2-.2-.3c-.8-1.3-1.3-2.9-1.3-4.5 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.7-5.9c-.3-.1-1.6-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.2-.6.8-.8.9-.1.1-.3.2-.5.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.5-1.8-.2-.3 0-.5.1-.6s.2-.2.4-.4c.1-.1.2-.3.3-.4s0-.2.05-.3c-.1-.1-.7-.8-.9-1.1s-.4-.3-.5-.3h-.5c-.2 0-.5.1-.7.3-.2.2-.8.8-1 1.6-.2.8-.2 1.5.1 2.3.3.8 1.1 2.1 2.6 3.5 2.1 2 3.8 2.6 4.3 2.9.5.3.9.2 1.2.1.4-.1 1.6-1.1 1.8-1.4.2-.3.2-.5.1-.6l-.6-.4z" />
  </svg>
);

export function ChatWidget() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://wa.me/5541995343245?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 group"
            aria-label="Fale conosco no WhatsApp"
          >
            <Button
              size="icon"
              className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg transform transition-transform group-hover:scale-110 relative"
            >
              <span className="animate-pulse-whatsapp absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <WhatsAppIcon className="w-8 h-8 relative" />
            </Button>
          </a>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Fale conosco</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
