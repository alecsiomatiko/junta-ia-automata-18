
import { Card } from "@/components/ui/card";

interface CostBreakdownProps {
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'accent';
  className?: string;
}

export const CostBreakdown = ({ 
  title, 
  subtitle, 
  children, 
  variant = 'default',
  className = "" 
}: CostBreakdownProps) => {
  const variants = {
    default: "liquid-glass",
    primary: "liquid-glass-intense",
    accent: "liquid-glass"
  };

  return (
    <div className={`${variants[variant]} p-8 transition-all duration-300 hover:shadow-elegant ${className}`}>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-light text-foreground tracking-wide flex items-center">{title}</h3>
          {subtitle && (
            <p className="text-muted-foreground font-light mt-1">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
