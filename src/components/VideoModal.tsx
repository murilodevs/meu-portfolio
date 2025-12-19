import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
    isVertical?: boolean;
}

const VideoModal = ({ isOpen, onClose, videoUrl, isVertical = false }: VideoModalProps) => {
    const [embedUrl, setEmbedUrl] = useState<string>("");
    const isLinkedInPost = videoUrl.includes("linkedin.com") && !videoUrl.includes("/embed/");
    const isTikTok = videoUrl.includes("tiktok.com");

    useEffect(() => {
        if (!videoUrl) return;

        let url = videoUrl;

        if (url.includes("drive.google.com")) {
            url = url.replace(/\/view.*$/, "/preview").replace(/\/edit.*$/, "/preview");
        } else if (isLinkedInPost) {
            if (!url.includes("autoplay=1")) {
                url += "&autoplay=1";
            }
        } else if (url.includes("tiktok.com")) {
            const match = url.match(/video\/(\d+)/);
            if (match && match[1]) {
                url = `https://www.tiktok.com/player/v1/${match[1]}?autoplay=1`;
            }
        } else if (url.includes("instagram.com")) {
            const match = url.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                url = `https://www.instagram.com/reel/${match[1]}/embed`;
            }
        }

        setEmbedUrl(url);
    }, [videoUrl, isLinkedInPost]);

    // Configurações adaptativas baseadas na orientação
    const modalConfig = isVertical || isTikTok
        ? {
            maxWidth: "sm:max-w-sm md:max-w-md",
            aspectRatio: "aspect-[9/16]",
            containerHeight: "max-h-[85vh]"
        }
        : {
            maxWidth: "sm:max-w-4xl lg:max-w-5xl",
            aspectRatio: "aspect-video",
            containerHeight: "max-h-[80vh]"
        };

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent
                className={`${modalConfig.maxWidth} p-0 bg-black/95 border border-primary/20 overflow-hidden text-white backdrop-blur-xl shadow-2xl shadow-primary/10`}
            >
                {/* Glow effect behind modal */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl blur-xl opacity-50 -z-10" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`relative w-full ${modalConfig.containerHeight}`}
                >
                    <div className={`relative w-full ${modalConfig.aspectRatio} bg-zinc-900/80`}>
                        {isLinkedInPost ? (
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                    <ExternalLink className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-display font-semibold mb-2">Vídeo do LinkedIn</h3>
                                <p className="text-muted-foreground mb-6 max-w-md mx-auto text-sm">
                                    Este vídeo está hospedado no LinkedIn e não permite reprodução externa.
                                </p>
                                <a
                                    href={videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                                >
                                    Assistir no LinkedIn
                                    <ExternalLink className="ml-2 w-4 h-4" />
                                </a>
                            </div>
                        ) : (
                            <iframe
                                src={embedUrl}
                                className="absolute inset-0 w-full h-full rounded-lg"
                                allow="autoplay; fullscreen; encrypted-media"
                                title="Video Player"
                                allowFullScreen
                            />
                        )}
                    </div>
                </motion.div>
            </DialogContent>
        </Dialog>
    );
};

export default VideoModal;
