import { FC } from 'react';
import { 
  Cpu, Network, Wifi, Radio, Satellite, Radar, Microchip, HardDrive, 
  Server, CloudLightning, Zap, Sparkles, Star, Rocket, Gauge, 
  Activity, BarChart3, TrendingUp, CircuitBoard, Cog, Settings2,
  Target, ArrowUpRight, ArrowDownLeft, RotateCw, Move3D, Orbit
} from 'lucide-react';

interface AnimatedDecoratorProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'float' | 'pulse' | 'rotate' | 'bounce' | 'glow' | 'orbit' | 'radar';
  size?: 'sm' | 'md' | 'lg';
}

export const AnimatedDecorator: FC<AnimatedDecoratorProps> = ({ 
  icon, 
  className = "", 
  delay = 0, 
  type = 'float',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6', 
    lg: 'h-8 w-8'
  };

  return (
    <div 
      className={`animated-decorator animated-decorator-${type} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={sizeClasses[size]}>
        {icon}
      </div>
    </div>
  );
};

// Advanced floating tech decorators
export const TechDecorators = () => {
  return (
    <div className="tech-decorators">
      {/* Header area tech elements */}
      <AnimatedDecorator 
        icon={<Cpu className="text-primary/30" />}
        className="tech-1"
        type="pulse"
        delay={0.5}
        size="lg"
      />
      <AnimatedDecorator 
        icon={<Network className="text-accent/25" />}
        className="tech-2"
        type="rotate"
        delay={1}
        size="md"
      />
      <AnimatedDecorator 
        icon={<Microchip className="text-primary/40" />}
        className="tech-3"
        type="glow"
        delay={1.5}
        size="md"
      />
      
      {/* Mid-section AI elements */}
      <AnimatedDecorator 
        icon={<CloudLightning className="text-accent/35" />}
        className="tech-4"
        type="orbit"
        delay={2}
        size="lg"
      />
      <AnimatedDecorator 
        icon={<Radio className="text-primary/30" />}
        className="tech-5"
        type="radar"
        delay={2.5}
        size="sm"
      />
      <AnimatedDecorator 
        icon={<Satellite className="text-accent/40" />}
        className="tech-6"
        type="float"
        delay={3}
        size="md"
      />
      
      {/* Data flow elements */}
      <AnimatedDecorator 
        icon={<HardDrive className="text-primary/25" />}
        className="tech-7"
        type="bounce"
        delay={3.5}
        size="md"
      />
      <AnimatedDecorator 
        icon={<Server className="text-accent/30" />}
        className="tech-8"
        type="pulse"
        delay={4}
        size="sm"
      />
      <AnimatedDecorator 
        icon={<Wifi className="text-primary/35" />}
        className="tech-9"
        type="glow"
        delay={4.5}
        size="md"
      />
      
      {/* Analytics elements */}
      <AnimatedDecorator 
        icon={<Activity className="text-accent/25" />}
        className="tech-10"
        type="radar"
        delay={5}
        size="lg"
      />
      <AnimatedDecorator 
        icon={<Gauge className="text-primary/40" />}
        className="tech-11"
        type="rotate"
        delay={5.5}
        size="md"
      />
      <AnimatedDecorator 
        icon={<TrendingUp className="text-accent/30" />}
        className="tech-12"
        type="orbit"
        delay={6}
        size="sm"
      />
      
      {/* Bottom section elements */}
      <AnimatedDecorator 
        icon={<CircuitBoard className="text-primary/20" />}
        className="tech-13"
        type="float"
        delay={6.5}
        size="lg"
      />
      <AnimatedDecorator 
        icon={<Radar className="text-accent/35" />}
        className="tech-14"
        type="radar"
        delay={7}
        size="md"
      />
      <AnimatedDecorator 
        icon={<Activity className="text-primary/45" />}
        className="tech-15"
        type="pulse"
        delay={7.5}
        size="sm"
      />
    </div>
  );
};

// Sparkle effects for special moments
export const SparkleEffects = () => {
  return (
    <div className="sparkle-effects">
      {[...Array(25)].map((_, i) => (
        <AnimatedDecorator
          key={i}
          icon={<Sparkles className="text-primary/20" />}
          className={`sparkle-${i + 1}`}
          type="glow"
          delay={Math.random() * 8}
          size="sm"
        />
      ))}
    </div>
  );
};

// Energy flow lines
export const EnergyFlow = () => {
  return (
    <div className="energy-flow">
      <svg className="energy-svg" width="100%" height="100%">
        <defs>
          <linearGradient id="energyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="energyGradientAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Curved energy paths */}
        <path
          d="M0,20% Q25%,5% 50%,20% T100%,20%"
          stroke="url(#energyGradient)"
          strokeWidth="2"
          fill="none"
          className="energy-path energy-path-1"
        />
        <path
          d="M0,40% Q30%,25% 60%,40% T100%,40%"
          stroke="url(#energyGradientAccent)"
          strokeWidth="1.5"
          fill="none"
          className="energy-path energy-path-2"
        />
        <path
          d="M0,60% Q20%,75% 40%,60% T100%,60%"
          stroke="url(#energyGradient)"
          strokeWidth="1"
          fill="none"
          className="energy-path energy-path-3"
        />
        <path
          d="M0,80% Q35%,65% 70%,80% T100%,80%"
          stroke="url(#energyGradientAccent)"
          strokeWidth="1.5"
          fill="none"
          className="energy-path energy-path-4"
        />
      </svg>
    </div>
  );
};

// Data particles traveling between sections
export const DataParticles = () => {
  return (
    <div className="data-particles">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="data-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${5 + Math.random() * 5}s`
          }}
        />
      ))}
    </div>
  );
};