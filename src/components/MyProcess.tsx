import { motion } from "framer-motion";
import { FileText, Palette, Clapperboard, CheckCircle2, Sparkles } from "lucide-react";

const processSteps = [
    {
        icon: <FileText className="w-6 h-6" />,
        title: "Briefing",
        description: "Entendo seus objetivos, público-alvo e mensagem que você quer transmitir.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: "Roteiro & Storyboard",
        description: "Criação do roteiro com copy persuasiva e planejamento visual de cada cena.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: <Clapperboard className="w-6 h-6" />,
        title: "Produção & Edição",
        description: "Motion graphics, efeitos visuais e montagem profissional no Premiere e After Effects.",
        color: "from-primary to-accent"
    },
    {
        icon: <CheckCircle2 className="w-6 h-6" />,
        title: "Entrega & Revisões",
        description: "Ajustes finais e exportação otimizada para todas as plataformas.",
        color: "from-green-500 to-emerald-500"
    }
];

const MyProcess = () => {
    return (
        <section id="processo" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Como Trabalho</span>
                    </div>
                    <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
                        <span className="text-foreground">Meu </span>
                        <span className="gradient-text">Processo</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Do briefing à entrega final, cada projeto passa por etapas cuidadosas para garantir qualidade e resultados.
                    </p>
                </motion.div>

                {/* Process Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Connector line (hidden on mobile and last item) */}
                            {index < processSteps.length - 1 && (
                                <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-border to-border/0 z-0" />
                            )}

                            {/* Card */}
                            <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/5 h-full">
                                {/* Step number */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                    <span className="text-sm font-bold text-primary">{index + 1}</span>
                                </div>

                                {/* Icon */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Timeline Image (optional - for showing the Premiere timeline) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 relative"
                >
                    <div className="relative bg-card/30 backdrop-blur-sm rounded-2xl p-6 border border-border/30 overflow-hidden">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                            <span className="text-sm text-muted-foreground ml-2">Adobe Premiere Pro - Timeline</span>
                        </div>
                        <div className="rounded-xl overflow-hidden border border-border/20">
                            <img
                                src="/timeline-wl2.png"
                                alt="Timeline de edição no Premiere Pro"
                                className="w-full h-auto"
                            />
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4">
                            Cada projeto possui uma timeline organizada com múltiplas faixas de vídeo, áudio e efeitos.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default MyProcess;
