import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import VideoModal from "./VideoModal";

// Tipos das categorias (IDs internos)
type VideoCategory = "shorts" | "ads" | "longform" | "vsl";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
  category: VideoCategory;
  duration: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>("shorts");
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Mapeamento: ID do Sistema -> Nome que aparece no Botão
  const categories: { id: VideoCategory; label: string }[] = [
    { id: "shorts", label: "iGaming" },
    { id: "ads", label: "VSLs" },
    { id: "longform", label: "Motions" },
    { id: "vsl", label: "Redes Sociais" },
  ];

  // --- SEUS VÍDEOS ---
  const videos: Video[] = [
    // Categoria: iGaming (shorts)
    { id: "1", title: "Ana Partners", thumbnail: "/thumb-ana.png", videoUrl: "https://drive.google.com/file/d/1MPx78vcbu_BSKR74I1ffNxY4mF0nB5HD/view?usp=drive_link", category: "shorts", duration: "0:45" },
    { id: "2", title: "Natal Vera.bet", thumbnail: "/thumb-natal.png", videoUrl: "https://drive.google.com/file/d/1vezppiIYzo30H0EZsJFZIQ6-oQgUcm0U/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "3", title: "Corridas dos Fortunes", thumbnail: "/thumb-corridaf.png", videoUrl: "https://drive.google.com/file/d/1VveGF8jIEl5t1rDG8jlYOIUBrleOURX1/view?usp=drive_link", category: "shorts", duration: "0:58" },
    { id: "23", title: "Média de Escanteios", thumbnail: "/igaming4.png", videoUrl: "https://drive.google.com/file/d/19t4-4cPfwGp70V-buOVzlRx5ZS3OSM7E/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "24", title: "Experiência Bet7k", thumbnail: "/igaming5.png", videoUrl: "https://drive.google.com/file/d/16CHcpOanA6H7jfQWqmzb4RtZZJ2-Z0hE/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "25", title: "Cashback Superodds", thumbnail: "/igaming6.png", videoUrl: "https://drive.google.com/file/d/1U6DNodsYvpntQoB7xI8Kbu1GAHHjC7Cc/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "26", title: "Bônus Surpresa", thumbnail: "/igaming7.png", videoUrl: "https://drive.google.com/file/d/1SVjqtcfAekWvV3atQlwoP4kQeJxpULMj/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "27", title: "Diversão Responsável", thumbnail: "/igaming8.png", videoUrl: "https://drive.google.com/file/d/1aQhZmkwQt6KiDJ-iF_Ib5TP7_thqzy6C/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "28", title: "Vera.bet Radical", thumbnail: "/igaming9.png", videoUrl: "https://drive.google.com/file/d/1i_vg4BOZ2-ZGJixBrxGqii3ML3OTID_3/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "32", title: "Jogo de Verdade Vera.bet", thumbnail: "/igaming10.png", videoUrl: "https://drive.google.com/file/d/1L76nVpYhK2mqaNxnavje0Bs-hrSJBbjW/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "33", title: "100% Autorizada Vera.bet", thumbnail: "/igaming11.png", videoUrl: "https://drive.google.com/file/d/197patMiLDjQXriOWZLKVKhtI3q5lV6kN/view?usp=drive_link", category: "shorts", duration: "0:30" },
    { id: "34", title: "Black Vera.bet", thumbnail: "/igaming12.png", videoUrl: "https://drive.google.com/file/d/1MkdkBIlFFLtAdIntMHsjoc4wBf3hWmKy/view?usp=drive_link", category: "shorts", duration: "0:30" },

    // Categoria: VSLs (ads)
    {
      id: "4",
      title: "WL",
      // OBS: Links do Drive 'view' não carregam como imagem. O ideal é usar arquivo local na pasta public (ex: "/thumb-wl.jpg")
      thumbnail: "/thumbwl.png", // Coloquei uma img temporária para não quebrar
      videoUrl: "https://drive.google.com/file/d/1posMXt_Zwrvg43SlefVxNo49TQpTkAIo/view?usp=drive_link",
      category: "ads",
      duration: "5:52"
    },
    {
      id: "5",
      title: "DB",
      thumbnail: "thumbdb.png",
      videoUrl: "https://drive.google.com/file/d/1xwcUdfZaEne1kcVm26NFclxoij7aERsC/view?usp=drive_link",
      category: "ads",
      duration: "3:41"
    },
    {
      id: "6",
      title: "PT",
      thumbnail: "thumbpt.png",
      videoUrl: "https://drive.google.com/file/d/182QVzMMwd4uYZkJSDoeR02c_1M-4Sy1w/view?usp=drive_link",
      category: "ads",
      duration: "1:58"
    },

    // Categoria: Motions (longform)
    { id: "7", title: "Saque Rápido Vera.bet", thumbnail: "/motion1.png", videoUrl: "https://drive.google.com/file/d/1-rZOLFESwDpQjnbWxk2qf-24k9gxGzrY/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "8", title: "Saque Rápido Vera.bet", thumbnail: "/motion2.png", videoUrl: "https://drive.google.com/file/d/1HTLl-WI_PxKJA4FbVBV_w6-dX7PLN6Qi/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "11", title: "Mines Vera.bet", thumbnail: "/motion3.png", videoUrl: "https://drive.google.com/file/d/179OZh6sc24vEkS2WkFcjZHyaR6fMOmhZ/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "12", title: "Tigre Sortudo Vera.bet", thumbnail: "/motion4.png", videoUrl: "https://drive.google.com/file/d/1-Ai0obJP3-tmVhc7kDJb6uHIwYJGjXPv/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "18", title: "Gates Of Olympus 7K Chile", thumbnail: "/motion5.png", videoUrl: "https://drive.google.com/file/d/1SeVO-n5kK1upV8M1MbKfv4zReSjDw1JM/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "19", title: "Fortune Tiger 7K Chile", thumbnail: "/motion6.png", videoUrl: "https://drive.google.com/file/d/1z-ZmmqjoE0n1CFo0UHT2U9c5f-m2kFwx/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "20", title: "Halloween Vera.bet", thumbnail: "/motion7.png", videoUrl: "https://drive.google.com/file/d/1Fe8sivEZvHNvbIrYWJ4hTKXNK9K8pW7n/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "21", title: "Aviator é Aqui Vera.bet", thumbnail: "/motion8.png", videoUrl: "https://drive.google.com/file/d/1VEy7DkmBoCAMDsSbFI32SZO3mZ0rbo9n/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "22", title: "Aviator Vera.bet", thumbnail: "/motion9.png", videoUrl: "https://drive.google.com/file/d/1y3AzdSPLLMoMWUm_U9RTtkuprUttUU5z/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "29", title: "Fortune Rabbit Vera.bet", thumbnail: "/motion10.png", videoUrl: "https://drive.google.com/file/d/1Fe8sivEZvHNvbIrYWJ4hTKXNK9K8pW7n/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "30", title: "Estratégia Aviator Vera.bet", thumbnail: "/motion11.png", videoUrl: "https://drive.google.com/file/d/1VEy7DkmBoCAMDsSbFI32SZO3mZ0rbo9n/view?usp=drive_link", category: "longform", duration: "1:00" },
    { id: "31", title: "Fortune Mouse Vera.bet", thumbnail: "/motion12.png", videoUrl: "https://drive.google.com/file/d/1y3AzdSPLLMoMWUm_U9RTtkuprUttUU5z/view?usp=drive_link", category: "longform", duration: "1:00" },

    // Categoria: Redes Sociais (vsl)
    { id: "13", title: "Arte e Cultura na Pauta Climática", thumbnail: "/thumb-cop30-1.jpg", videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7397677580281253888?compact=1", category: "vsl", duration: "Video" },
    { id: "14", title: "Empreendedorismo na Amazônia", thumbnail: "/thumb-cop30-2.jpg", videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7397641693749030912?compact=1", category: "vsl", duration: "Video" },
    { id: "15", title: "Festival de Investimentos de Impacto", thumbnail: "/thumb-cop30-3.jpg", videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7394507742683668481?compact=1", category: "vsl", duration: "Video" },
    { id: "16", title: "Clima: O Novo Anormal", thumbnail: "/thumb-cop30-4.jpg", videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7393731364304453633?compact=1", category: "vsl", duration: "Video" },
    { id: "17", title: "Vale da Morte: Sobrevivência Empresarial", thumbnail: "/thumb-cop30-5.jpg", videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7370801377205374976?compact=1", category: "vsl", duration: "Video" },
    { id: "35", title: "PlaystationCup @babi_", thumbnail: "/babi1.png", videoUrl: "https://www.tiktok.com/@babi_/video/7377821044092046597", category: "vsl", duration: "Video" },
    { id: "36", title: "Final Champions League @babi_", thumbnail: "/babi2.png", videoUrl: "https://www.tiktok.com/@babi_/video/7376713002466266373", category: "vsl", duration: "Video" },
    { id: "37", title: "PlayStation House @babi_", thumbnail: "/babi3.png", videoUrl: "https://www.tiktok.com/@babi_/video/7375320485565041926", category: "vsl", duration: "Video" },
    { id: "38", title: "Budz", thumbnail: "/thumb-cop30-6.jpg", videoUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7338962476346019844?compact=1", category: "vsl", duration: "Video" },
    { id: "39", title: "Das corridas de rua para o mercado de autocuidado", thumbnail: "/thumb-cop30-7.jpg", videoUrl: "https://drive.google.com/file/d/1X5jQWXayi-5e7aNzDK9QpJBJqizWHL5b/view?usp=drive_link", category: "vsl", duration: "Video" },
    { id: "40", title: "O Açaí para além da polpa", thumbnail: "/thumb-cop30-8.jpg", videoUrl: "https://drive.google.com/file/d/18nWExk0oFJoFvfQ0rhZiFhwEx5KYMjZ1/view?usp=drive_link", category: "vsl", duration: "Video" },
    { id: "41", title: "A beleza das espécies dos rios amazônicos retratada em serigrafia", thumbnail: "/thumb-cop30-9.jpg", videoUrl: "https://drive.google.com/file/d/1Lcm3ViOtqirmBidi4EbgLOm0cThwxhGr/view?usp=drive_link", category: "vsl", duration: "Video" },
  ];

  // --- LOGOS DOS CLIENTES ---
  // Se quiser tornar clicável, adicione 'siteUrl' e mude a div para <a href={client.siteUrl}>
  const clients = [
    { name: "Cliente 1", logo: "/logo1.png", siteUrl: "https://www.anagaming.com.br/" },
    { name: "Cliente 2", logo: "/logo2.png", siteUrl: "https://loud.gg/" },
    { name: "Cliente 3", logo: "/logo3.png", siteUrl: "https://www.projetodraft.com/" },
    { name: "Cliente 4", logo: "/logo4.png", siteUrl: "https://vera.bet.br/" },
    { name: "Cliente 5", logo: "/logo5.png", siteUrl: "https://groupphoenixmediabuyer.com/" },
    { name: "Cliente 6", logo: "/logo6.png", siteUrl: "https://7k.bet.br/" },
    { name: "Cliente 7", logo: "/logo7.png", siteUrl: "https://cassino.bet.br/" },
  ];

  const filteredVideos = videos.filter((v) => v.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative bg-background/50">
      <div className="container mx-auto px-6">

        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-foreground">Meus </span>
            <span className="gradient-text">Trabalhos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Selecione uma categoria para ver os projetos.
          </p>
        </motion.div>

        {/* Botões de Categoria */}


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeCategory === cat.id
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-secondary/50 text-secondary-foreground hover:bg-secondary border border-transparent hover:border-border"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>


        {/* Grade de Vídeos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="video-card group relative rounded-xl overflow-hidden border border-border/50 bg-card/50 shadow-sm hover:shadow-md transition-all cursor-pointer w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] md:w-[calc((100%-3rem)/4)] xl:w-[calc((100%-5rem)/6)]"
                onMouseEnter={() => setHoveredVideo(video.id)}
                onMouseLeave={() => setHoveredVideo(null)}
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div className={`relative overflow-hidden ${(video.category === 'shorts' || video.category === 'vsl' || video.category === 'longform') ? 'aspect-[9/16]' : 'aspect-video'}`}>
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    // Fallback para caso a imagem do Drive falhe
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                      <Play size={24} fill="white" className="text-white ml-1" />
                    </div>
                  </div>


                </div>

                <div className="p-4">
                  <h3 className="font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors flex items-center justify-between">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* --- ÁREA DOS LOGOS DAS EMPRESAS --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative pt-10 border-t border-border/30 text-center"
        >
          <h3 className="text-lg font-display font-semibold text-muted-foreground mb-8">
            Empresas que confiam no meu trabalho
          </h3>

          <div className="relative">
            {/* Brilho de fundo */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-3xl -z-10" />

            {/* Grid de Logos */}
            <div className="relative flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {clients.map((client, index) => (
                <motion.a
                  key={client.name}
                  href={client.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative w-32 h-20 md:w-36 md:h-24 rounded-xl bg-gradient-to-br from-card/80 to-card/30 border border-border/50 backdrop-blur-sm flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20"
                  title={client.name}
                >
                  {/* Brilho "passando" no hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  {/* A IMAGEM DO LOGO */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-[70%] max-h-[70%] object-contain opacity-70 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>


      </div>

      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.videoUrl || ""}
      />
    </section >
  );
};

export default Portfolio;