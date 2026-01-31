import { useState } from "react";
import { Link } from "react-router-dom";

interface BrandCardProps {
  logo: string;
  name: string;
  link?: string;
  internalRoute?: boolean;
  className?: string;
  color?: "purple" | "yellow" | "transparent";
}

const BrandCard = ({
  logo,
  name,
  link = "#",
  internalRoute = false,
  className = "",
  color = "purple",
}: BrandCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const bgColorClass =
    color === "purple" ? "bg-dil-purple" : 
    color === "yellow" ? "bg-gradient-yellow-orange" : 
    "bg-white";
  const textColorClass = 
    color === "purple" ? "text-white" : 
    color === "yellow" ? "text-dil-purple" : 
    "text-gray-800";

  const cardClassName = `block rounded-full overflow-hidden ${bgColorClass} transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`;
  const cardStyle = { aspectRatio: "1/1" as const };

  const cardContent = (
    <>
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full h-full flex items-center justify-center">
          {!isLoaded && (
            <div
              className={`absolute inset-0 ${
                color === "purple"
                  ? "bg-dil-purple/20"
                  : color === "yellow"
                  ? "bg-gradient-yellow-orange/20"
                  : "bg-gray-100"
              } animate-pulse flex items-center justify-center`}
            >
              <div
                className={`w-6 h-6 border-2 ${
                  color === "purple"
                    ? "border-white/30 border-t-white/80"
                    : color === "yellow"
                    ? "border-dil-purple/30 border-t-dil-purple/80"
                    : "border-gray-400/30 border-t-gray-600/80"
                } rounded-full animate-spin`}
              ></div>
            </div>
          )}
          <img
            src={logo}
            alt={name}
            className={`w-[100%] h-[100%] object-contain transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${textColorClass}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </>
  );

  return internalRoute ? (
    <Link to={link} className={cardClassName} style={cardStyle}>
      {cardContent}
    </Link>
  ) : (
    <a href={link} className={cardClassName} style={cardStyle}>
      {cardContent}
    </a>
  );
};

export default BrandCard;
