import { FC } from 'react';
import { Zap, Target, Cog, TrendingUp, Sparkles, Rocket, Layers, Globe, Settings, ArrowRight } from 'lucide-react';

interface AnimatedIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'float' | 'pulse' | 'rotate' | 'bounce' | 'glow';
}

export const AnimatedIcon: FC<AnimatedIconProps> = ({ 
  icon, 
  className = "", 
  delay = 0, 
  type = 'float' 
}) => {
  return (
    <div 
      className={`animated-icon animated-icon-${type} ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {icon}
    </div>
  );
};

// Floating decorator icons for different sections
export const FloatingDecorators = () => {
  return (
    <div className="floating-decorators">
      {/* Header decorators */}
      <AnimatedIcon 
        icon={<Sparkles className="h-6 w-6" />}
        className="decorator-1 text-primary/40"
        type="glow"
        delay={0.5}
      />
      <AnimatedIcon 
        icon={<Rocket className="h-8 w-8" />}
        className="decorator-2 text-accent/30"
        type="float"
        delay={1}
      />
      <AnimatedIcon 
        icon={<Target className="h-5 w-5" />}
        className="decorator-3 text-primary/50"
        type="pulse"
        delay={1.5}
      />
      
      {/* Mid-section decorators */}
      <AnimatedIcon 
        icon={<Layers className="h-7 w-7" />}
        className="decorator-4 text-accent/40"
        type="rotate"
        delay={2}
      />
      <AnimatedIcon 
        icon={<Globe className="h-6 w-6" />}
        className="decorator-5 text-primary/35"
        type="bounce"
        delay={2.5}
      />
      <AnimatedIcon 
        icon={<Cog className="h-8 w-8" />}
        className="decorator-6 text-accent/45"
        type="rotate"
        delay={3}
      />
      
      {/* Bottom section decorators */}
      <AnimatedIcon 
        icon={<TrendingUp className="h-6 w-6" />}
        className="decorator-7 text-primary/40"
        type="glow"
        delay={3.5}
      />
      <AnimatedIcon 
        icon={<Zap className="h-5 w-5" />}
        className="decorator-8 text-accent/50"
        type="pulse"
        delay={4}
      />
      <AnimatedIcon 
        icon={<ArrowRight className="h-7 w-7" />}
        className="decorator-9 text-primary/30"
        type="bounce"
        delay={4.5}
      />
    </div>
  );
};

// Section-specific animated backgrounds
export const SectionBackground = ({ type }: { type: 'header' | 'features' | 'results' | 'footer' }) => {
  const getIcons = () => {
    switch (type) {
      case 'header':
        return [
          { icon: <Sparkles className="h-4 w-4" />, position: 'top-1/4 left-1/4' },
          { icon: <Target className="h-5 w-5" />, position: 'top-1/3 right-1/4' },
          { icon: <Zap className="h-3 w-3" />, position: 'top-1/2 left-1/6' },
        ];
      case 'features':
        return [
          { icon: <Cog className="h-6 w-6" />, position: 'top-1/4 right-1/6' },
          { icon: <Layers className="h-4 w-4" />, position: 'bottom-1/4 left-1/5' },
          { icon: <Globe className="h-5 w-5" />, position: 'top-3/4 right-1/3' },
        ];
      case 'results':
        return [
          { icon: <TrendingUp className="h-5 w-5" />, position: 'top-1/5 left-1/3' },
          { icon: <Rocket className="h-4 w-4" />, position: 'bottom-1/3 right-1/4' },
        ];
      case 'footer':
        return [
          { icon: <Settings className="h-4 w-4" />, position: 'top-1/2 left-1/4' },
          { icon: <ArrowRight className="h-3 w-3" />, position: 'bottom-1/4 right-1/3' },
        ];
      default:
        return [];
    }
  };

  return (
    <div className={`section-background section-background-${type}`}>
      {getIcons().map((item, index) => (
        <AnimatedIcon
          key={index}
          icon={item.icon}
          className={`absolute ${item.position} text-primary/20`}
          type={index % 2 === 0 ? 'float' : 'pulse'}
          delay={index * 0.8}
        />
      ))}
    </div>
  );
};