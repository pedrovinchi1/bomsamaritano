import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ImpactCounterProps {
  label: string;
  endValue: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const ImpactCounter: React.FC<ImpactCounterProps> = ({
  label,
  endValue,
  duration = 2,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease out cubic function for smoother animation near the end
        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easeOutCubic * endValue));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(step);
        }
      };

      animationFrame = requestAnimationFrame(step);
      controls.start({ opacity: 1, y: 0 });

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, endValue, duration, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <p className="text-gray-600">{label}</p>
    </motion.div>
  );
};

export default ImpactCounter;