'use client';

import { Button } from '@/components/ui/button';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-7 h-7 fill-white"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65-10.2-90.5-29.4l-6.7-4-67.1 17.6-17.8-66.3 3.9-6.9c-18.7-31.5-29-67.7-29-104.9 0-107.1 87.1-194.2 194.2-194.2 51.5 0 99.1 19.4 135.4 55.7s56.7 83.8 56.7 135.4c-.1 107.1-87.1 194.2-194.2 194.2zM223.9 111.1c-15.1 0-27.1 12.1-27.1 27.1v.1c0 15.1 12.1 27.1 27.1 27.1s27.1-12.1 27.1-27.1v-.1c0-15-12.1-27.1-27.1-27.1zm59.2 178.5c-4.9 14.8-18.7 30.2-37.1 30.2-18.3 0-33-8.8-50.2-26.4-17.2-17.6-28.7-39.7-28.7-61.9 0-22.1 11.5-42.3 31.9-56l.1-.1c10.3-6.9 23-11.2 36.6-11.2 14.8 0 28.5 4.8 39.7 14.2 11.2 9.4 17.2 21.6 17.2 35.1 0 10.9-2.8 21.5-8.4 31.9l-8.4 15.1c-1.9 3.5-3.8 6.9-5.7 10.3l-2.8 4.7c-3.8 6.9-7.6 13.8-11.4 20.7-3.8 6.9-7.6 13.8-11.4 20.7l-1.9 2.8c-1.9 2.8-2.8 5.7-2.8 8.4 0 4.7 1.9 8.4 5.7 11.2s8.4 4.7 14.2 4.7h22.8c12.3 0 23.7-5.7 31.9-15.1l5.7-7.6c3.8-4.7 8.4-9.4 14.2-12.3 5.7-2.8 12.3-4.7 19-4.7h2.8c15.1 0 27.1 12.1 27.1 27.1v.1c0 15-12.1 27.1-27.1 27.1H283.1zm-118.4-1.9c-15.1 0-27.1-12.1-27.1-27.1v-.1c0-15.1 12.1-27.1 27.1-27.1s27.1 12.1 27.1 27.1v.1c0 15-12.1 27.1-27.1 27.1z" />
    </svg>
);

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
        <WhatsAppIcon />
      </Button>
    </a>
  );
}
