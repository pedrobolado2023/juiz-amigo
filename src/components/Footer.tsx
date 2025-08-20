import { MessageSquare, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    product: [
      { name: "Recursos", href: "#features" },
      { name: "Preços", href: "#pricing" },
      { name: "Como Funciona", href: "#how-it-works" },
      { name: "Depoimentos", href: "#testimonials" }
    ],
    support: [
      { name: "Central de Ajuda", href: "#" },
      { name: "Contato", href: "#contact" },
      { name: "WhatsApp", href: "#" },
      { name: "Status do Sistema", href: "#" }
    ],
    legal: [
      { name: "Termos de Uso", href: "#" },
      { name: "Política de Privacidade", href: "#" },
      { name: "Política de Reembolso", href: "#" },
      { name: "Cookies", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Juiz Amigo</h1>
                <p className="text-xs text-muted-foreground">Concursos Jurídicos</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Sua plataforma de IA especializada em concursos jurídicos. 
              Estude com inteligência artificial e fontes oficiais verificadas.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contato@juizamigo.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid sm:grid-cols-3 gap-8 lg:col-span-3">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Produto</h3>
              <ul className="space-y-3">
                {links.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
              <ul className="space-y-3">
                {links.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {links.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Juiz Amigo. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-accent hover:bg-primary hover:text-primary-foreground rounded-lg flex items-center justify-center transition-all duration-300 group"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                );
              })}
            </div>

            {/* Badges */}
            <div className="flex items-center gap-4">
              <div className="text-xs text-muted-foreground bg-accent/50 rounded-full px-3 py-1">
                🛡️ SSL Seguro
              </div>
              <div className="text-xs text-muted-foreground bg-accent/50 rounded-full px-3 py-1">
                🇧🇷 Feito no Brasil
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;