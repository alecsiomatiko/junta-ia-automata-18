import { FC } from 'react';
import { Mic, FileText, Package, Search, Brain, Settings, CalendarDays, Users, Clock, Shield, BarChart3, Database, Monitor, Smartphone, Headphones, Cloud, Target, Layers3, MessageCircle, CheckCircle2, ArrowRight, Cog, Wrench, AlertTriangle, TrendingUp, Gauge, Phone, Mail, MapPin, Building2, Zap, Activity } from 'lucide-react';
interface AnimatedContentIconProps {
  icon: React.ReactNode;
  className?: string;
  delay?: number;
  type?: 'maintenance' | 'recording' | 'ai-processing' | 'inventory' | 'reporting' | 'communication' | 'analytics';
  size?: 'sm' | 'md' | 'lg';
}
export const AnimatedContentIcon: FC<AnimatedContentIconProps> = ({
  icon,
  className = "",
  delay = 0,
  type = 'maintenance',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-8 w-8'
  };
  return <div className={`animated-content-icon animated-content-${type} ${className}`} style={{
    animationDelay: `${delay}s`
  }}>
      <div className={sizeClasses[size]}>
        {icon}
      </div>
    </div>;
};

// Enhanced Voice Recording Animation with Multiple Waves
export const VoiceRecordingIcon = () => <div className="voice-recording-container">
    
    <AnimatedContentIcon icon={<Mic className="text-primary relative z-10" />} type="recording" size="lg" />
    <div className="voice-waves-indicator">
      {[...Array(8)].map((_, i) => <div key={i} className="wave-line enhanced" style={{
      animationDelay: `${i * 0.1}s`,
      height: `${4 + i % 3 * 2}px`
    }} />)}
    </div>
    <div className="pulse-ring pulse-ring-1"></div>
    <div className="pulse-ring pulse-ring-2"></div>
    <div className="pulse-ring pulse-ring-3"></div>
  </div>;

// Enhanced AI Brain Processing Animation
export const AIProcessingIcon = () => <div className="ai-processing-container">
    <div className="ai-glow-background"></div>
    <AnimatedContentIcon icon={<Brain className="text-accent relative z-10" />} type="ai-processing" size="lg" />
    <div className="neural-pulses">
      {[...Array(5)].map((_, i) => {})}
    </div>
    <div className="synaptic-connections">
      {[...Array(6)].map((_, i) => <div key={i} className="synaptic-line" style={{
      animationDelay: `${i * 0.2}s`,
      transform: `rotate(${i * 60}deg)`
    }} />)}
    </div>
    <div className="processing-indicator">
      <div className="processing-dot dot-1"></div>
      <div className="processing-dot dot-2"></div>
      <div className="processing-dot dot-3"></div>
    </div>
  </div>;

// Maintenance Work Animation
export const MaintenanceIcon = () => <div className="maintenance-container">
    <AnimatedContentIcon icon={<Wrench className="text-primary" />} type="maintenance" size="lg" />
    <AnimatedContentIcon icon={<Cog className="text-accent" />} className="maintenance-gear" type="maintenance" size="sm" delay={0.5} />
  </div>;

// Inventory Movement Animation
export const InventoryIcon = () => <div className="inventory-container">
    <AnimatedContentIcon icon={<Package className="text-accent" />} type="inventory" size="lg" />
    <div className="inventory-arrows">
      <ArrowRight className="h-3 w-3 text-primary inventory-arrow-1" />
      <ArrowRight className="h-3 w-3 text-accent inventory-arrow-2" />
    </div>
  </div>;

// Enhanced Analytics Dashboard Animation
export const AnalyticsIcon = () => <div className="analytics-container">
    <div className="analytics-glow-bg"></div>
    <AnimatedContentIcon icon={<BarChart3 className="text-primary relative z-10" />} type="analytics" size="lg" />
    <div className="chart-bars">
      {[...Array(6)].map((_, i) => <div key={i} className="chart-bar enhanced" style={{
      animationDelay: `${i * 0.15}s`,
      height: `${15 + i % 4 * 8}px`
    }} />)}
    </div>
    <div className="data-flow-lines">
      {[...Array(3)].map((_, i) => <div key={i} className="flow-line" style={{
      animationDelay: `${i * 0.4}s`
    }} />)}
    </div>
    <div className="analytics-particles">
      {[...Array(4)].map((_, i) => <div key={i} className="analytics-particle" style={{
      animationDelay: `${i * 0.3}s`
    }} />)}
    </div>
  </div>;

// Communication Flow Animation
export const CommunicationIcon = () => <div className="communication-container">
    <AnimatedContentIcon icon={<MessageCircle className="text-accent" />} type="communication" size="lg" />
    <div className="message-dots">
      {[...Array(3)].map((_, i) => <div key={i} className="message-dot" style={{
      animationDelay: `${i * 0.3}s`
    }} />)}
    </div>
  </div>;

// Real-time Monitoring Animation
export const MonitoringIcon = () => <div className="monitoring-container">
    <AnimatedContentIcon icon={<Monitor className="text-primary" />} type="analytics" size="lg" />
    <div className="monitoring-waves">
      <div className="monitor-wave wave-1" />
      <div className="monitor-wave wave-2" />
      <div className="monitor-wave wave-3" />
    </div>
  </div>;

// Alert System Animation
export const AlertIcon = () => <div className="alert-container">
    <AnimatedContentIcon icon={<AlertTriangle className="text-destructive" />} type="reporting" size="lg" />
    <div className="alert-rings">
      <div className="alert-ring ring-1" />
      <div className="alert-ring ring-2" />
    </div>
  </div>;

// Performance Gauge Animation
export const PerformanceIcon = () => <div className="performance-container">
    <AnimatedContentIcon icon={<Gauge className="text-accent" />} type="analytics" size="lg" />
    <div className="gauge-needle" />
  </div>;

// Cloud Sync Animation
export const CloudSyncIcon = () => <div className="cloud-sync-container">
    <AnimatedContentIcon icon={<Cloud className="text-primary" />} type="communication" size="lg" />
    <div className="sync-arrows">
      <div className="sync-arrow up-arrow" />
      <div className="sync-arrow down-arrow" />
    </div>
  </div>;

// Search Processing Animation
export const SearchIcon = () => <div className="search-container">
    <AnimatedContentIcon icon={<Search className="text-accent" />} type="ai-processing" size="lg" />
    <div className="search-ripples">
      <div className="search-ripple ripple-1" />
      <div className="search-ripple ripple-2" />
    </div>
  </div>;

// Time Tracking Animation
export const TimeTrackingIcon = () => <div className="time-tracking-container">
    <AnimatedContentIcon icon={<Clock className="text-primary" />} type="reporting" size="lg" />
    <div className="clock-hands">
      <div className="clock-hand minute-hand" />
      <div className="clock-hand hour-hand" />
    </div>
  </div>;

// Data Flow Animation for Reports
export const DataFlowIcon = () => <div className="data-flow-container">
    <AnimatedContentIcon icon={<Database className="text-accent" />} type="ai-processing" size="lg" />
    <div className="data-stream">
      {[...Array(6)].map((_, i) => <div key={i} className="data-bit" style={{
      animationDelay: `${i * 0.2}s`
    }} />)}
    </div>
  </div>;

// Security Shield Animation
export const SecurityIcon = () => <div className="security-container">
    <AnimatedContentIcon icon={<Shield className="text-primary" />} type="maintenance" size="lg" />
    <div className="security-pulses">
      <div className="security-pulse pulse-1" />
      <div className="security-pulse pulse-2" />
    </div>
  </div>;

// Quality Check Animation
export const QualityCheckIcon = () => <div className="quality-check-container">
    <AnimatedContentIcon icon={<CheckCircle2 className="text-green-500" />} type="reporting" size="lg" />
    <div className="check-animation">
      <div className="check-mark" />
    </div>
  </div>;

// Energy Efficiency Animation
export const EnergyIcon = () => <div className="energy-container">
    <AnimatedContentIcon icon={<Zap className="text-yellow-500" />} type="analytics" size="lg" />
    <div className="energy-bolts">
      {[...Array(3)].map((_, i) => <div key={i} className="energy-bolt" style={{
      animationDelay: `${i * 0.4}s`
    }} />)}
    </div>
  </div>;

// Team Collaboration Animation
export const TeamIcon = () => <div className="team-container">
    <AnimatedContentIcon icon={<Users className="text-accent" />} type="communication" size="lg" />
    <div className="collaboration-links">
      {[...Array(4)].map((_, i) => <div key={i} className="collaboration-link" style={{
      animationDelay: `${i * 0.3}s`
    }} />)}
    </div>
  </div>;

// Activity Monitor Animation
export const ActivityIcon = () => <div className="activity-container">
    <AnimatedContentIcon icon={<Activity className="text-primary" />} type="analytics" size="lg" />
    <div className="activity-waves">
      <div className="activity-wave wave-1" />
      <div className="activity-wave wave-2" />
      <div className="activity-wave wave-3" />
    </div>
  </div>;

// Trending Performance Animation
export const TrendingIcon = () => <div className="trending-container">
    <AnimatedContentIcon icon={<TrendingUp className="text-green-500" />} type="analytics" size="lg" />
    <div className="trend-line">
      <div className="trend-point point-1" />
      <div className="trend-point point-2" />
      <div className="trend-point point-3" />
    </div>
  </div>;