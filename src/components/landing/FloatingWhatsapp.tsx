import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/5541995343245?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20um%20projeto."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40"
      aria-label="Fale conosco no WhatsApp"
    >
      <Button
        size="icon"
        className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-7 h-7" />
      </Button>
    </a>
  );
}
