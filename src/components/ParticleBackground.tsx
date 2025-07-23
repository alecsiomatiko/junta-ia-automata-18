import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  type: 'primary' | 'accent' | 'white';
  speed: number;
}

export const ParticleBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleCount = 80;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particleType = Math.random();
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 20,
        size: Math.random() * 3 + 1,
        type: particleType < 0.4 ? 'primary' : particleType < 0.7 ? 'accent' : 'white',
        speed: Math.random() * 10 + 15
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="enhanced-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`enhanced-particle enhanced-particle-${particle.type}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.speed}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`
          }}
        />
      ))}
      
      {/* Floating data nodes */}
      <div className="data-nodes">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="data-node"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Connecting lines */}
      <svg className="particle-connections" width="100%" height="100%">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {[...Array(6)].map((_, i) => (
          <g key={i} className="connection-group">
            <path
              d={`M${Math.random() * 100}%,${Math.random() * 100}% Q${Math.random() * 100}%,${Math.random() * 100}% ${Math.random() * 100}%,${Math.random() * 100}%`}
              stroke="url(#connectionGradient)"
              strokeWidth="1"
              fill="none"
              className="connection-line"
              style={{ animationDelay: `${i * 2}s` }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};