import { Card } from "@/components/ui/card";

interface QuoteSectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const QuoteSection = ({ title, children, className = "" }: QuoteSectionProps) => {
  return (
    <Card className={`glass-card p-8 ${className}`}>
      <h2 className="text-2xl font-bold text-primary mb-6 border-b border-glass-border pb-3">
        {title}
      </h2>
      {children}
    </Card>
  );
};