
import { useState, useEffect } from 'react';

interface NewsStripProps {
  text: string;
  bgColor?: string;
  textColor?: string;
  speed?: 'slow' | 'very-slow' | 'extremely-slow';
}

const NewsStrip = ({ 
  text, 
  bgColor = "bg-gradient-yellow-orange", 
  textColor = "text-dil-purple",
  speed = "very-slow"
}: NewsStripProps) => {
  const [duplicatedText, setDuplicatedText] = useState("");
  
  // Duplicate the text to ensure continuous scrolling
  useEffect(() => {
    // Adding multiple copies to ensure continuous flow regardless of screen width
    setDuplicatedText(`${text} • ${text} • ${text} • ${text} • ${text} • ${text} • ${text} • ${text}`);
  }, [text]);
  
  const animationClass = {
    'slow': 'animate-marquee-slow',
    'very-slow': 'animate-marquee-very-slow',
    'extremely-slow': 'animate-marquee-very-slow duration-[120s]'
  }[speed];
  
  return (
    <div className={`w-full overflow-hidden ${bgColor}`}>
      <div className="py-3 relative">
        <div className={`${animationClass} whitespace-nowrap inline-block`}>
          <span className={`text-base sm:text-lg font-bold ${textColor}`}>
            {duplicatedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsStrip;
