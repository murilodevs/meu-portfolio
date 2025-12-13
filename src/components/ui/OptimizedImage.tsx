import { useState } from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
    fallbackSrc?: string;
    priority?: boolean;
}

/**
 * Componente de imagem otimizado com lazy loading automático,
 * fallback para erros e suporte a placeholder enquanto carrega.
 */
const OptimizedImage = ({
    src,
    alt,
    className = "",
    width,
    height,
    fallbackSrc = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    priority = false,
}: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Placeholder blur enquanto carrega */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-secondary/50 animate-pulse" />
            )}

            <img
                src={hasError ? fallbackSrc : src}
                alt={alt}
                width={width}
                height={height}
                loading={priority ? "eager" : "lazy"}
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    setHasError(true);
                    setIsLoaded(true);
                }}
                className={`w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"
                    }`}
            />
        </div>
    );
};

export default OptimizedImage;
