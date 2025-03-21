
import { useState } from 'react';

interface BrandCardProps {
  logo: string;
  name: string;
  link?: string;
  className?: string;
  color?: 'purple' | 'yellow';
}

const BrandCard = ({ logo, name, link = "#", className = "", color = "purple" }: BrandCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const bgColorClass = color === 'purple' ? 'bg-dil-purple' : 'bg-gradient-yellow-orange';
  const textColorClass = color === 'purple' ? 'text-white' : 'text-dil-purple';

  return (
    <a 
      href={link} 
      className={`block rounded-full overflow-hidden ${bgColorClass} transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}
      style={{ aspectRatio: '1/1' }}
    >
      <div className="w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full h-full flex items-center justify-center">
          {!isLoaded && (
            <div className={`absolute inset-0 ${color === 'purple' ? 'bg-dil-purple/20' : 'bg-gradient-yellow-orange/20'} animate-pulse flex items-center justify-center`}>
              <div className={`w-6 h-6 border-2 ${color === 'purple' ? 'border-white/30 border-t-white/80' : 'border-dil-purple/30 border-t-dil-purple/80'} rounded-full animate-spin`}></div>
            </div>
          )}
          <img
            src={logo}
            alt={name}
            className={`w-full h-full object-contain transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${textColorClass}`}
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      </div>
    </a>
  );
};

export default BrandCard;
