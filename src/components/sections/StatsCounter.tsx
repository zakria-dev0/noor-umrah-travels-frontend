// components/sections/StatsCounter.tsx
import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: 10000, suffix: '+', label: 'Pilgrims Served', icon: '🕋' },
  { value: 15, suffix: '+', label: 'Years of Experience', icon: '📅' },
  { value: 50, suffix: '+', label: 'Hotel Partners', icon: '🏨' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction', icon: '⭐' },
];

const AnimatedNumber: React.FC<{ target: number; suffix: string; isVisible: boolean }> = ({ target, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  const display = target >= 1000 ? `${(count / 1000).toFixed(count >= target ? 0 : 1)}K` : count.toString();

  return (
    <span className="text-4xl md:text-5xl font-bold text-white font-display">
      {display}{suffix}
    </span>
  );
};

const StatsCounter: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 md:py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1920')` }}
      />
      <div className="absolute inset-0 bg-noor-green/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <AnimatedNumber target={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              <p className="text-white/60 text-sm mt-2 tracking-wide uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;