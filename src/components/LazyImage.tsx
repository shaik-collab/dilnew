import { useState, CSSProperties } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loadingClassName?: string;
  width?: number;
  height?: number;
  quality?: number;
  style?: CSSProperties;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const LazyImage = ({
  src,
  alt,
  className = "",
  loadingClassName = "animate-pulse bg-gray-200",
  width,
  height,
  quality = 80,
  style,
  objectFit = "cover",
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Generate a unique ID for the image
  const imageId = `lazy-image-${src.replace(/[^\w]/g, "")}`;

  // Add quality parameter to image URL if it's not a remote URL and not already processed
  const imgSrc =
    src.startsWith("http") || src.startsWith("/lovable-uploads/")
      ? src
      : `${src}?q=${quality}&w=${width || "auto"}`;

  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    setHasError(true);
    setIsLoaded(true);
  };

  const objectFitClass = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
    none: "object-none",
    "scale-down": "object-scale-down",
  }[objectFit];

  return (
    <div
      id={imageId}
      className={`relative overflow-hidden  ${
        !isLoaded ? loadingClassName : ""
      }`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "100%",
        ...style,
      }}
    >
      {hasError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-sm">Image not available</span>
        </div>
      ) : (
        <img
          src={imgSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${className} ${objectFitClass} ${
            isLoaded ? "opacity-100" : "opacity-0"
          } w-full h-full`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default LazyImage;
