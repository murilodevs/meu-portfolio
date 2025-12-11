import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";

// --- Ícone Oficial do WhatsApp (Mesmo do Hero) ---
const WhatsAppOfficialIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.025-.458.124-.607.138-.138.302-.359.453-.539.153-.181.202-.302.302-.496.099-.198.05-.372-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/muriloc.editor/", 
      label: "Instagram" 
    },
    { 
      icon: Youtube, 
      href: "https://www.youtube.com/@muriloc.editor/", 
      label: "YouTube" 
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/murilo-celestino-90a4b8235/", 
      label: "LinkedIn" 
    },
    { 
      icon: Mail, 
      href: "mailto:murilo.celestino@hotmail.com", 
      label: "Email" 
    },
    { 
      icon: WhatsAppOfficialIcon, 
      href: "https://wa.me/5582981313933", 
      label: "WhatsApp" 
    }
  ];

  return (
    <footer className="py-8 border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Lado Esquerdo: Logo e Copyright */}
        <div className="text-center md:text-left">
          <span className="font-display text-lg font-bold text-foreground">
            Murilo <span className="gradient-text">Celestino</span>
          </span>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.label}
            >
              {/* Ajuste para o ícone do WhatsApp ficar do tamanho correto */}
              <social.icon 
                className={social.label === "WhatsApp" ? "w-[18px] h-[18px] fill-current" : ""} 
                size={18} 
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;