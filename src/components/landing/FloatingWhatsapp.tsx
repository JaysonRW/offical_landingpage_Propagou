'use client';

import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function FloatingWhatsapp() {
  return (
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
        <Rocket className="w-8 h-8" />
      </Button>
    </a>
  );
}
