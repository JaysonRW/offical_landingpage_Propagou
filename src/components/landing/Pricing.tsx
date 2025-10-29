import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";

const plans = [
  {
    name: "Start",
    price: "R$ 2.900",
    description: "Ideal para validar ideias e lançar sua presença online.",
    features: [
      "Landing Page profissional",
      "Domínio e hospedagem por 1 ano",
      "1 ciclo de revisão de design",
      "Formulário de contato",
    ],
    isPopular: false,
  },
  {
    name: "Pro",
    price: "R$ 7.900",
    description: "A solução completa para digitalizar e automatizar seu negócio.",
    features: [
      "SaaS ou Portal completo",
      "Painel de administração",
      "1 mês de suporte prioritário",
      "Treinamento da equipe",
      "Integração com 1 sistema (ex: Pagamentos)",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "R$ 14.900+",
    description: "Para projetos de larga escala com necessidades customizadas.",
    features: [
      "Tudo do plano Pro",
      "Sistema totalmente customizado",
      "Desenvolvimento de API",
      "Equipe de projeto dedicada",
      "Suporte e manutenção contínuos",
    ],
    isPopular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 relative overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at top left, hsl(var(--primary)/0.3), transparent 30%), radial-gradient(circle at bottom right, #FF69B4, transparent 40%)'
        }}
      />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">Planos flexíveis para cada necessidade</h2>
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
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-headline text-white">{plan.name}</CardTitle>
                  <div className="pt-4">
                    <span className="text-4xl font-bold text-blue-400">{plan.price}</span>
                    <span className="text-sm text-gray-400">{plan.name === "Start" || plan.name === "Pro" ? " / projeto" : ""}</span>
                  </div>
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
                  <Button className={cn(
                      "w-full font-bold text-lg py-6 transition-all duration-300",
                      plan.isPopular 
                        ? "bg-blue-500 text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(0,191,255,0.5)] hover:shadow-[0_0_25px_rgba(0,191,255,0.8)]"
                        : "bg-gray-700 text-white hover:bg-gray-600"
                    )}>
                    Escolher Plano
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}