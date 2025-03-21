
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';

interface CounterProps {
  end: number;
  duration?: number;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  fullText?: string;
}

const CounterAnimation = ({ end, duration = 3000, label, suffix = '', icon, fullText }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [showFollowup, setShowFollowup] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    let hasReachedEnd = false;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercent = Math.min(progress / duration, 1);
      
      // Use easeOutQuad for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progressPercent);
      
      const currentCount = Math.floor(easedProgress * end);
      setCount(currentCount);

      // Continue animation only if we haven't reached the end value
      if (progressPercent < 1 && currentCount < end) {
        animationFrame = requestAnimationFrame(animate);
      } else if (!hasReachedEnd) {
        // Ensure the final value is exactly the end value
        setCount(end);
        hasReachedEnd = true;
        // Show the followup text after animation completes
        setTimeout(() => setShowFollowup(true), 300);
      }
    };

    if (inView && !hasReachedEnd) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex justify-center items-center gap-2">
        <span>{count}</span>
        <span>{suffix}</span>
        {icon && <span className="ml-1">{icon}</span>}
      </div>
      <p className="text-lg text-white/90">{label}</p>
    </div>
  );
};

export default CounterAnimation;
