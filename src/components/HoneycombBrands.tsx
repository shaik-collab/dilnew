
import React from 'react';
import LazyImage from './LazyImage';

interface HoneycombBrandsProps {
  brands: Array<{
    name: string;
    logo: string;
  }>;
  size?: 'small' | 'medium' | 'large';
}

const HoneycombBrands: React.FC<HoneycombBrandsProps> = ({ brands, size = 'medium' }) => {
  const sizeClasses = {
    small: "w-8 h-8 md:w-10 md:h-10",
    medium: "w-10 h-10 md:w-12 md:h-12",
    large: "w-12 h-12 md:w-16 md:h-16"
  };

  // Create a proper honeycomb layout that fits within the container
  return (
    <div className="w-full flex justify-center py-2">
      <div className="inline-flex flex-col justify-center max-w-full">
        {/* First row */}
        <div className="flex justify-center w-full -mb-2">
          {brands.slice(0, 5).map((brand, index) => (
            <div 
              key={`row1-${index}`} 
              className={`${sizeClasses[size]} rounded-full bg-white shadow-md flex items-center justify-center p-1 mx-0.5 z-10`}
            >
              <LazyImage
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain rounded-full"
                width={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
                height={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
              />
            </div>
          ))}
        </div>
        
        {/* Second row */}
        <div className="flex justify-center w-full">
          {brands.slice(5, 10).map((brand, index) => (
            <div 
              key={`row2-${index}`} 
              className={`${sizeClasses[size]} rounded-full bg-white shadow-md flex items-center justify-center p-1 mx-0.5 z-10`}
            >
              <LazyImage
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain rounded-full"
                width={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
                height={size === 'small' ? 32 : size === 'medium' ? 48 : 64}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoneycombBrands;
