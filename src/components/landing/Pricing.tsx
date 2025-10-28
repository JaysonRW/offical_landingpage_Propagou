import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

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
    <section id="pricing" className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline">Planos flexíveis para cada necessidade</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Invista em uma solução que cresce com o seu negócio. Sem surpresas, sem letras miúdas.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={cn(
                "flex flex-col h-full",
                plan.isPopular && "border-2 border-primary shadow-primary/20 shadow-lg"
              )}
            >
              {plan.isPopular && (
                <Badge className="absolute -top-3 right-5">Mais Popular</Badge>
              )}
              <CardHeader>
                <CardTitle className="text-2xl font-headline">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.name === "Start" || plan.name === "Pro" ? " / projeto" : ""}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.isPopular ? "default" : "outline"}>
                  Escolher Plano
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
