import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import ParallaxStars from "./ParallaxStars";
import './ParallaxStars.css';
import './PricingBackground.css';

const plans = [
  {
    name: "Starter One-Page",
    price: "R$ 400",
    description: "Ideal pra quem quer começar já",
    features: [
      "Copy + SEO básico",
      "Landing Page Otimizada",
      "Formulários integrados → WhatsApp",
      "Meta: leads já no primeiro mês",
    ],
    isPopular: false,
    isCustom: false,
  },
  {
    name: "Institucional Plus",
    price: "R$ 1.200",
    description: "Perfeito pra pequenas empresas que querem presença forte",
    features: [
      "Tudo do Starter",
      "+ 5 abas internas",
      "SEO + meta tags + sitemap",
      "Integração com WhatsApp e Google Analytics",
      
    ],
    isPopular: true,
    isCustom: false,
  },
  {
    name: "Pro App / Personalizado",
    price: "R$ 2500+",
    description: "Para quem quer crescer online e vender digitalmente",
    features: [
      "Site + automações",
      "Sistema totalmente customizado",
      "Integrações (API / CRM)",
      "Funcionalidade extra sob demanda",
      "Suporte e manutenção contínuos",
    ],
    isPopular: false,
    isCustom: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden animated-background">
      <ParallaxStars />
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at top left, hsl(var(--primary)/0.3), transparent 30%), radial-gradient(circle at bottom right, #FF69B4, transparent 40%)'
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Comece com apenas R$400 + resultados rápidos</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Invista em uma solução que cresce com o seu negócio. Sem surpresas, sem letras miúdas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-lg p-px group",
                plan.isPopular 
                  ? "bg-gradient-to-b from-blue-500 to-pink-500" 
                  : "bg-gray-800"
              )}
            >
              <Card
                className={cn(
                  "relative flex flex-col h-full bg-[#0D0D0D] rounded-[7px] border-none transition-all duration-300 group-hover:bg-[#1a1a1a]"
                )}
              >
                {plan.isPopular && (
                  <Badge className="absolute -top-3 right-5 bg-blue-500 text-white border-none">Mais Popular</Badge>
                )}
                {plan.isCustom && (
                  <Badge className="absolute -top-3 right-5 bg-purple-500 text-white border-none">Sob Medida</Badge>
                )}
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-headline text-white">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-sm text-gray-400">{plan.name === "Starter One-Page" || plan.name === "Pro" ? " / projeto" : ""}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">7 dias de garantia</p>
                  <CardDescription className="pt-2 !text-gray-400">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pt-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="h-5 w-5 text-blue-400 mr-3 mt-1 shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6">
                  {plan.isPopular ? (
                    <div className="glowing-btn w-full inline-block rounded-md">
                      <div className="btn-inner !rounded-md">
                        <Button className="w-full font-bold text-lg py-6">
                          Escolher Plano
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button className={cn(
                      "w-full font-bold text-lg py-6 transition-all duration-300",
                      "bg-gray-700 text-white hover:bg-gray-600"
                    )}>
                      Escolher Plano
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
