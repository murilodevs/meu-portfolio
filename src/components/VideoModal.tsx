import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
    const [embedUrl, setEmbedUrl] = useState<string>("");
    // Se for LinkedIn mas NÃO for embed, mostra o fallback. Se for embed, libera o iframe.
    const isLinkedInPost = videoUrl.includes("linkedin.com") && !videoUrl.includes("/embed/");

    useEffect(() => {
        if (!videoUrl) return;

        let url = videoUrl;

        // Transform Google Drive links to preview/embed format
        if (url.includes("drive.google.com")) {
            // Replace /view or /edit with /preview
            url = url.replace(/\/view.*$/, "/preview").replace(/\/edit.*$/, "/preview");
        } else if (isLinkedInPost) {
            // LinkedIn embed supports autoplay=1? Not guaranteed but worth trying or keeping as is if already has params.
            // The user provided urls already have ?compact=1. We can append &autoplay=1
            if (!url.includes("autoplay=1")) {
                url += "&autoplay=1";
            }
        } else if (url.includes("tiktok.com")) {
            const match = url.match(/video\/(\d+)/);
            if (match && match[1]) {
                url = `https://www.tiktok.com/player/v1/${match[1]}?autoplay=1`;
            }
        } else if (url.includes("instagram.com")) {
            // Extract ID from /p/ID or /reel/ID
            const match = url.match(/\/(?:p|reel)\/([a-zA-Z0-9_-]+)/);
            if (match && match[1]) {
                url = `https://www.instagram.com/reel/${match[1]}/embed`;
            }
        }

        setEmbedUrl(url);
    }, [videoUrl, isLinkedInPost]);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            {/* 
        We use a transparent border and background for the content container 
        to let the video take center stage. 
        max-w-4xl allows a good size for desktop.
      */}
            <DialogContent className="sm:max-w-4xl p-0 bg-black/90 border-none overflow-hidden text-white">
                <div className="relative w-full pt-[56.25%] bg-zinc-900">
                    {/* 16:9 Aspect Ratio Container */}
                    {isLinkedInPost ? (
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-8">
                            <h3 className="text-xl font-semibold mb-2">Vídeo do LinkedIn</h3>
                            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                                Este vídeo está hospedado no LinkedIn e não permite reprodução externa.
                            </p>
                            <a
                                href={videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
                            >
                                Assistir no LinkedIn
                                <ExternalLink className="ml-2 w-4 h-4" />
                            </a>
                        </div>
                    ) : (
                        <iframe
                            src={embedUrl}
                            className="absolute top-0 left-0 w-full h-full"
                            width="100%"
                            height="100%"
                            allow="autoplay; fullscreen"
                            title="Video Player"
                        />
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default VideoModal;
