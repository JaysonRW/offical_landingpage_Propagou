'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: "O sistema de ERP que eles desenvolveram para nossa clínica otimizou completamente nossos agendamentos e prontuários. Uma interface intuitiva e automações inteligentes que nos pouparam horas de trabalho.",
    name: "Dr. Ana Silva",
    company: "Clínica GestãoPro"
  },
  {
    quote: "A landing page de alta conversão para o meu negócio de manicure foi um divisor de águas. O agendamento online e o portfólio elegante atraíram muitos novos clientes.",
    name: "Jadi Cristina",
    company: "Jadi Manicure"
  },
  {
    quote: "Com o portal de agendamentos, nossa barbearia agora funciona de forma muito mais organizada. Os clientes adoram a facilidade de marcar online e nós temos controle total da agenda.",
    name: "Carlos Andrade",
    company: "BarberShop Premium"
  },
  {
    quote: "A plataforma de análise de poker é incrível. As estatísticas detalhadas e a simulação de cenários são ferramentas essenciais para qualquer jogador profissional que queira evoluir.",
    name: "Pedro Marques",
    company: "Poker Hands Pro"
  },
  {
    quote: "O novo site institucional com catálogo de produtos ficou fantástico. Profissional, rápido e fácil de navegar. Nossos clientes agora encontram o que precisam rapidamente.",
    name: "Mariana Costa",
    company: "C&D Pisos"
  }
];


export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
            <Card className="bg-white shadow-lg speech-bubble relative border-gray-200">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-indigo-200 mb-2 transform -scale-x-100" />
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className="text-right">
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
