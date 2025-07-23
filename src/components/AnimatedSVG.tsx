import { FC, ReactNode } from 'react';

interface AnimatedSVGProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedSVG: FC<AnimatedSVGProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <div 
      className={`animated-svg ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

// SVG Component for Voice Recording Animation
export const VoiceWavesSVG = () => (
  <AnimatedSVG className="voice-waves">
    <svg width="100" height="60" viewBox="0 0 100 60" className="w-full h-full">
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(var(--primary-glow))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      
      <g className="wave-bars">
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x={8 + i * 7}
            y="30"
            width="4"
            height="0"
            fill="url(#waveGradient)"
            className="wave-bar"
            style={{
              animationDelay: `${i * 0.1}s`,
              transformOrigin: '50% 50%'
            }}
          />
        ))}
      </g>
    </svg>
  </AnimatedSVG>
);

// SVG Component for AI Brain Animation
export const AIBrainSVG = () => (
  <AnimatedSVG className="ai-brain" delay={0.5}>
    <svg width="80" height="80" viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Brain outline */}
      <path
        d="M20,35 Q15,20 30,20 Q40,10 50,20 Q65,15 65,30 Q70,40 60,50 Q65,60 50,60 Q40,70 30,60 Q15,65 15,50 Q10,40 20,35"
        fill="none"
        stroke="url(#brainGradient)"
        strokeWidth="2"
        filter="url(#glow)"
        className="brain-outline"
      />
      
      {/* Neural connections */}
      <g className="neural-network">
        {/* Nodes */}
        <circle cx="25" cy="30" r="2" fill="hsl(var(--primary))" className="neural-node" style={{animationDelay: '0.2s'}} />
        <circle cx="40" cy="25" r="2" fill="hsl(var(--accent))" className="neural-node" style={{animationDelay: '0.4s'}} />
        <circle cx="55" cy="35" r="2" fill="hsl(var(--primary))" className="neural-node" style={{animationDelay: '0.6s'}} />
        <circle cx="45" cy="45" r="2" fill="hsl(var(--accent))" className="neural-node" style={{animationDelay: '0.8s'}} />
        <circle cx="30" cy="50" r="2" fill="hsl(var(--primary))" className="neural-node" style={{animationDelay: '1s'}} />
        
        {/* Connections */}
        <line x1="25" y1="30" x2="40" y2="25" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7" className="neural-connection" style={{animationDelay: '0.3s'}} />
        <line x1="40" y1="25" x2="55" y2="35" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.7" className="neural-connection" style={{animationDelay: '0.5s'}} />
        <line x1="55" y1="35" x2="45" y2="45" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7" className="neural-connection" style={{animationDelay: '0.7s'}} />
        <line x1="45" y1="45" x2="30" y2="50" stroke="hsl(var(--accent))" strokeWidth="1" opacity="0.7" className="neural-connection" style={{animationDelay: '0.9s'}} />
      </g>
    </svg>
  </AnimatedSVG>
);

// SVG Component for Data Flow Animation
export const DataFlowSVG = () => (
  <AnimatedSVG className="data-flow" delay={1}>
    <svg width="120" height="40" viewBox="0 0 120 40" className="w-full h-full">
      <defs>
        <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Data flow lines */}
      <path d="M0,20 Q30,10 60,20 Q90,30 120,20" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2" 
            opacity="0.3" />
      
      {/* Animated data packets */}
      <g className="data-packets">
        {[...Array(5)].map((_, i) => (
          <circle
            key={i}
            r="3"
            fill="url(#flowGradient)"
            className="data-packet"
            style={{
              animationDelay: `${i * 0.4}s`
            }}
          >
            <animateMotion
              dur="3s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            >
              <mpath xlinkHref="#dataPath" />
            </animateMotion>
          </circle>
        ))}
      </g>
      
      <path id="dataPath" d="M0,20 Q30,10 60,20 Q90,30 120,20" fill="none" opacity="0" />
    </svg>
  </AnimatedSVG>
);

// SVG Component for Inventory Animation
export const InventorySVG = () => (
  <AnimatedSVG className="inventory-animation" delay={1.5}>
    <svg width="80" height="80" viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id="boxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--accent))" />
          <stop offset="100%" stopColor="hsl(var(--primary))" />
        </linearGradient>
      </defs>
      
      {/* Warehouse boxes */}
      <g className="warehouse-boxes">
        <rect x="20" y="40" width="15" height="15" fill="url(#boxGradient)" className="box-item" style={{animationDelay: '0.2s'}} />
        <rect x="40" y="35" width="15" height="20" fill="url(#boxGradient)" className="box-item" style={{animationDelay: '0.4s'}} />
        <rect x="20" y="20" width="15" height="15" fill="url(#boxGradient)" className="box-item" style={{animationDelay: '0.6s'}} />
        <rect x="40" y="15" width="15" height="15" fill="url(#boxGradient)" className="box-item" style={{animationDelay: '0.8s'}} />
        
        {/* Moving elements */}
        <rect x="60" y="50" width="10" height="10" fill="hsl(var(--primary))" className="moving-box" />
      </g>
      
      {/* Arrow indicating movement */}
      <path d="M65,45 L75,45 M70,40 L75,45 L70,50" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            fill="none" 
            className="movement-arrow" />
    </svg>
  </AnimatedSVG>
);

// SVG Component for Security Animation
export const SecuritySVG = () => (
  <AnimatedSVG className="security-animation" delay={2}>
    <svg width="60" height="80" viewBox="0 0 60 80" className="w-full h-full">
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" />
          <stop offset="100%" stopColor="hsl(var(--accent))" />
        </linearGradient>
      </defs>
      
      {/* Shield shape */}
      <path
        d="M30,10 Q20,15 15,25 Q15,45 30,70 Q45,45 45,25 Q40,15 30,10Z"
        fill="url(#shieldGradient)"
        className="security-shield"
      />
      
      {/* Lock icon inside */}
      <rect x="25" y="35" width="10" height="8" fill="none" stroke="white" strokeWidth="2" rx="2" className="lock-body" />
      <path d="M27,35 Q27,30 30,30 Q33,30 33,35" fill="none" stroke="white" strokeWidth="2" className="lock-shackle" />
      
      {/* Security pulses */}
      <circle cx="30" cy="40" r="20" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0" className="security-pulse" />
      <circle cx="30" cy="40" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0" className="security-pulse" style={{animationDelay: '0.5s'}} />
    </svg>
  </AnimatedSVG>
);