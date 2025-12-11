import { motion } from "framer-motion";

interface HollowRectangleProps {
  height?: string; // Altura opcional (ex: h-96)
  width?: string;  // Largura opcional (ex: w-48)
  children?: React.ReactNode; // Conteúdo opcional dentro do retângulo
}

const HollowRectangle = ({ 
  height = "h-96", 
  width = "w-[200px]", 
  children 
}: HollowRectangleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      // Container principal que define o tamanho e a forma vertical
      className={`relative ${height} ${width} rounded-3xl z-10 group overflow-hidden`}
    >
      {/* --- CAMADA 1: A Borda Gradiente (Fundo que gira) --- */}
      {/* Este elemento fica atrás e cria o efeito de cor na borda */}
      <div 
        className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-purple-600 animate-[spin_4s_linear_infinite] opacity-80 blur-[2px] group-hover:blur-md transition-all duration-300"
        // Aumentamos um pouco a escala para garantir que cubra as bordas arredondadas durante o giro
        style={{ scale: '1.2' }} 
      />

      {/* --- CAMADA 2: O "Buraco" Vazado (Frente) --- */}
      {/* Inset-[2px] define a espessura da borda vazada.
          bg-background/80 cria a transparência do vazado.
          backdrop-blur cria o efeito de vidro fosco.
      */}
      <div className="absolute inset-[3px] bg-background/90 backdrop-blur-md rounded-[22px] flex flex-col items-center justify-center p-6 border border-white/5 z-20">
        
        {/* Conteúdo opcional dentro do retângulo */}
        {children ? children : (
          <div className="h-full flex items-center justify-center">
             <span className="text-muted-foreground/50 font-display font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">
               Vazado
             </span>
          </div>
        )}
      </div>
      
      {/* Efeito de Glow extra atrás (opcional) */}
       <div className="absolute -inset-4 bg-primary/30 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default HollowRectangle;