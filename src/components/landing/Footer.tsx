import Link from "next/link";
import { Github, Instagram, Linkedin, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: 'Início', href: '#hero' },
  { name: 'Projetos', href: '#projects' },
  { name: 'Preços', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contato', href: '#contact' },
];

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/propagounegocios/", name: "LinkedIn" },
  { icon: <Instagram className="h-5 w-5" />, href: "https://www.instagram.com/propagounegocios/", name: "Instagram" },
  { icon: <Github className="h-5 w-5" />, href: "https://github.com/JaysonRW", name: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
       <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200%] h-[300px] bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.2),transparent_70%)]"
        aria-hidden="true"
      />
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="#hero" className="flex items-center gap-2">
              <Rocket className="h-7 w-7 text-primary animate-float" />
              <span className="text-2xl font-bold font-headline">Propagou Negócios</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Transformando ideias em realidade digital com tecnologia de ponta.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos de Serviço</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Conecte-se</h3>
               <div className="flex space-x-4">
                {socialLinks.map(social => (
                  <Button key={social.name} variant="ghost" size="icon" asChild>
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-muted-foreground hover:bg-pink-500 hover:text-white">{social.icon}</a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Propagou Negócios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
