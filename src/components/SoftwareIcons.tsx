import { motion } from "framer-motion";

const SoftwareIcons = () => {
  const software = [
    // --- ADOBE ORIGINAL (Mantido exatamente como estava) ---
    {
      name: "After Effects",
      abbr: "Ae",
      color: "#9999FF",
      bgColor: "rgba(153, 153, 255, 0.15)",
    },
    {
      name: "Premiere Pro",
      abbr: "Pr",
      color: "#EA77FF",
      bgColor: "rgba(234, 119, 255, 0.15)",
    },
    {
      name: "Photoshop",
      abbr: "Ps",
      color: "#31A8FF",
      bgColor: "rgba(49, 168, 255, 0.15)",
    },
    {
      name: "Illustrator",
      abbr: "Ai",
      color: "#FF9A00",
      bgColor: "rgba(255, 154, 0, 0.15)",
    },

    // --- NOVAS IAs (Imagens da pasta public) ---
    // Elas usam o mesmo container quadrado para combinar com os da Adobe
    {
      name: "Runway",
      imageSrc: "/runway.png",
      bgColor: "rgba(255, 255, 255, 0.1)", // Fundo neutro suave
    },
    {
      name: "Kling AI",
      imageSrc: "/kling.png",
      bgColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      name: "Google Veo",
      imageSrc: "/veo.png",
      bgColor: "rgba(255, 255, 255, 0.1)",
    },
    {
      name: "Seedream", 
      imageSrc: "/seedream.png",
      bgColor: "rgba(255, 255, 255, 0.1)",
    },
  ];

  return (
    <div className="flex items-center gap-4 flex-wrap">
      {software.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
          className="group relative"
        >
          <div
            className="w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 border border-transparent hover:border-white/10 hover:scale-110 overflow-hidden"
            style={{ backgroundColor: item.bgColor }}
          >
            {/* LÓGICA: Se tiver 'abbr' (Adobe), mostra texto. Se tiver 'imageSrc' (IA), mostra imagem. */}
            {item.abbr ? (
              <span
                className="font-display text-base font-bold"
                style={{ color: item.color }}
              >
                {item.abbr}
              </span>
            ) : (
              <img 
                src={item.imageSrc} 
                alt={item.name} 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            )}
          </div>
          
          {/* Tooltip */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-card border border-border text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-10">
            {item.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SoftwareIcons;