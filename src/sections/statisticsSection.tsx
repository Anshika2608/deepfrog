import React, { useState, useEffect, useRef } from "react";
import { Users, Package, Gauge, TrendingUp } from "lucide-react";
import type { StatItemProps } from "../interfaces/interfaces";


const StatItem: React.FC<StatItemProps> = ({
  label,
  value,
  suffix = "",
  duration = 2000,
  icon: IconComponent,
  trigger = false,
}) => {
  const [count, setCount] = useState<number>(0);
  const isDecimal: boolean = value % 1 !== 0;

  useEffect(() => {
    if (!trigger) return; 

    let start = 0;
    const totalSteps = duration / 50;
    const increment = value / totalSteps;
    const precision = isDecimal ? 1 : 0;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(parseFloat(start.toFixed(precision)));
    }, 50);

    return () => clearInterval(timer);
  }, [trigger, value, duration, isDecimal]);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="bg-gray-100 rounded-xl p-4 mb-3 transition-transform duration-300 hover:scale-110 animate-subtle-bounce">
        <IconComponent size={32} strokeWidth={2} className="text-amber-600" />
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-amber-600">
        {count}
        {suffix}
      </h2>

      <p className="text-gray-700 mt-2 text-center text-sm uppercase tracking-wide font-medium">
        {label}
      </p>
    </div>
  );
};

const Statistics: React.FC = () => {
  const stats: StatItemProps[] = [
    { label: "Enterprise Clients", value: 5, suffix: "+", icon: Users },
    { label: "Core Products", value: 3, icon: Package },
    { label: "Uptime SLA", value: 99.9, suffix: "%", icon: Gauge },
    { label: "Efficiency Gain", value: 40, suffix: "%", icon: TrendingUp },
  ];

  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          } else {
            setInView(false); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className="relative -mt-12 w-full flex justify-center z-10">
      <div className="w-3/4 max-w-6xl bg-white shadow-2xl rounded-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} trigger={inView} />
        ))}
      </div>
    </div>
  );
};

export default Statistics;
