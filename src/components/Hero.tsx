import { motion } from "framer-motion";
import SoftwareIcons from "./SoftwareIcons";
import { Play, Instagram, Youtube, Linkedin, Mail } from "lucide-react";

// Componente do Ícone do WhatsApp
const WhatsAppOfficialIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.025-.458.124-.607.138-.138.302-.359.453-.539.153-.181.202-.302.302-.496.099-.198.05-.372-.025-.52-.074-.149-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const Hero = () => {
  const niches = [
    "iGaming",
    "Direct Response",
    "Motion Graphics",
    "AI-Powered Video"
  ];

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

  const clients = [
    { name: "Ana Gaming", logo: "/logos/logo1.png", siteUrl: "https://www.anagaming.com.br/" },
    { name: "LOUD", logo: "/logos/logo2.png", siteUrl: "https://loud.gg/" },
    { name: "Projeto Draft", logo: "/logos/logo3.png", siteUrl: "https://www.projetodraft.com/" },
    { name: "Vera.bet", logo: "/logos/logo4.png", siteUrl: "https://vera.bet.br/" },
    { name: "Group Phoenix", logo: "/logos/logo5.png", siteUrl: "https://groupphoenixmediabuyer.com/" },
    { name: "7k.bet", logo: "/logos/logo6.png", siteUrl: "https://7k.bet.br/" },
    { name: "Cassino.bet", logo: "/logos/logo7.png", siteUrl: "https://cassino.bet.br/" },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-12 pb-16 lg:py-24">
      {/* --- EFEITOS DE FUNDO --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] animate-glow-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px"
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* --- LADO ESQUERDO (TEXTO) --- */}
          <div className="flex-1 text-center lg:text-left max-w-2xl lg:max-w-none z-20 relative">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-6 w-full"
            >
              <SoftwareIcons />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              {niches.map((niche, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary uppercase tracking-wide"
                >
                  {niche}
                </span>
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]"
            >
              <span className="text-foreground">Murilo</span>
              <br />
              <span className="gradient-text font-bold">Celestino</span>
            </motion.h1>

            {/* Descrição - SEM TRAÇADO EM "ARMAS DE CONVERSÃO" */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Eu ajudo marcas a transformarem ideias em vídeos que engajam e convertem.
              <br className="hidden md:block" />
              Com <strong className="text-foreground font-bold">estratégia, clareza e propósito</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col items-center lg:items-start gap-8"
            >
              <a
                href="#portfolio"
                className="group relative inline-flex items-center gap-3 px-10 py-3.5 rounded-md bg-primary text-primary-foreground font-semibold text-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 w-full sm:w-auto justify-center"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Play size={24} fill="currentColor" />
                  Ver Portfólio
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />
              </a>

              <div className="flex items-center gap-4 pt-2">
                <span className="text-sm text-muted-foreground mr-2 font-medium">Me encontre em:</span>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + (index * 0.1) }}
                    className="w-10 h-10 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <social.icon className={social.label === "WhatsApp" ? "w-[18px] h-[18px] fill-current" : ""} size={18} />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                // Esconde em telas grandes (lg:hidden)
                className="pt-8 w-full lg:hidden"
              >
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {clients.map((client, index) => (
                    <motion.a
                      key={client.name}
                      href={client.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="group relative w-[47%] h-24 rounded-xl bg-gradient-to-br from-black/80 to-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:bg-primary/25"
                      title={client.name}
                    >
                      {/* Brilho "passando" no hover (Dourado) */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                      <img
                        src={client.logo}
                        alt={`Logo ${client.name}`}
                        loading="lazy"
                        decoding="async"
                        width={112}
                        height={80}
                        style={{ filter: "contrast(1.25)" }}
                        className="max-w-[70%] max-h-[70%] object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* --- LADO DIREITO: PNG GIGANTE --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            // Ajustado para mt-0 no mobile e lg:scale-110 no desktop
            className="flex-1 w-full max-w-md lg:max-w-lg relative flex flex-col justify-end items-center lg:items-end mt-0 lg:-mt-24 z-10 lg:scale-110 lg:origin-bottom"
          >
            {/* Glow de Fundo - Soft Cinematic Backlight */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-primary/15 blur-[150px] rounded-full -z-10 mix-blend-screen pointer-events-none" />
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accent/8 blur-[180px] rounded-full -z-20 pointer-events-none" />

            {/* Imagem (Normal/Estática com Reflexo + Noise) */}
            <div className="relative z-10 w-full flex justify-center lg:justify-end">
              <img
                src="/sobre-mim.png"
                alt="Murilo Celestino"
                style={{ filter: "url(#grain) contrast(1.15) saturate(0.9) drop-shadow(0 0 8px hsl(var(--primary)/0.8))" }}
                className="relative z-20 w-auto h-auto max-h-[350px] sm:max-h-[500px] lg:max-h-[90vh] object-contain object-bottom mask-image-b-fade"
              />

              {/* Reflexo no Chão */}
              <div className="absolute bottom-0 z-10 w-full h-full flex justify-center lg:justify-end opacity-40 pointer-events-none mix-blend-overlay">
                <img
                  src="/sobre-mim.png"
                  alt=""
                  className="w-auto h-auto max-h-[350px] sm:max-h-[500px] lg:max-h-[90vh] object-contain object-bottom scale-y-[-1] origin-bottom mask-image-fade-reflection blur-[2px] translate-y-[20px]"
                />
              </div>

              {/* Gradiente na base para integrar */}
              <div className="absolute bottom-0 left-0 right-0 h-32 z-30 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
            </div>

          </motion.div>

          {/* --- COLUNA DIREITA: CLIENTES VERTICAIS (DESKTOP) --- */}
          <div className="hidden lg:flex flex-col justify-center items-center gap-4 z-20 h-full ml-8">
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
            >
              Clientes
            </motion.p>
            {clients.map((client, index) => (
              <motion.a
                key={client.name}
                href={client.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05, x: -5 }}
                transition={{ duration: 0.5, delay: 1.2 + (index * 0.1) }}
                className="group relative w-28 h-20 rounded-xl bg-gradient-to-br from-black/80 to-primary/10 border border-primary/30 backdrop-blur-sm flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] hover:bg-primary/25"
                title={client.name}
              >
                {/* Brilho "passando" no hover (Dourado) */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <img
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  loading="lazy"
                  decoding="async"
                  width={112}
                  height={80}
                  style={{ filter: "contrast(1.25)" }}
                  className="max-w-[70%] max-h-[70%] object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </motion.a>
            ))}
          </div>

        </div>
      </div>

      {/* SVG Filter for Film Grain / Noise */}
      <svg className="hidden">
        <filter id="grain">
          <feTurbulence baseFrequency="0.8" numOctaves="3" type="fractalNoise" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" result="desaturatedNoise" />
          <feComponentTransfer in="desaturatedNoise" result="theNoise">
            <feFuncA type="linear" slope="0.3" /> {/* Reduced opacity of noise */}
          </feComponentTransfer>
          <feComposite in="theNoise" in2="SourceGraphic" operator="in" result="noiseMasked" />
          <feBlend in="noiseMasked" in2="SourceGraphic" mode="overlay" />
        </filter>
      </svg>

    </section>
  );
};

export default Hero;