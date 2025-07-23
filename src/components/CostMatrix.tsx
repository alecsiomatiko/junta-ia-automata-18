
import { Card } from "@/components/ui/card";

interface CostMatrixProps {
  title: string;
  sections: {
    category: string;
    items: {
      name: string;
      description?: string;
      amount: string;
      type: 'fixed' | 'variable' | 'one-time';
    }[];
  }[];
}

export const CostMatrix = ({ title, sections }: CostMatrixProps) => {
  const getTypeStyle = (type: string) => {
    switch (type) {
      case 'fixed':
        return 'liquid-glass text-primary border-primary/20';
      case 'variable':
        return 'liquid-glass text-foreground border-accent/20 bg-accent/10';
      case 'one-time':
        return 'liquid-glass text-muted-foreground border-border';
      default:
        return 'liquid-glass text-muted-foreground border-border';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'fixed':
        return 'Directo • Fijo';
      case 'variable':
        return 'Indirecto • Variable';
      case 'one-time':
        return 'Inversión';
      default:
        return type;
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-extralight text-foreground tracking-wider">{title}</h2>
      
      <div className="space-y-12">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6">
            <div className="liquid-glass p-4">
              <h3 className="text-xl font-light text-primary tracking-wide">
                {section.category}
              </h3>
            </div>
            
            <div className="grid gap-6">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="liquid-glass-intense p-6 transition-all duration-300 hover:shadow-elegant">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3">
                        <h4 className="font-medium text-foreground text-lg">{item.name}</h4>
                        <span className={`text-xs px-3 py-1 rounded-full ${getTypeStyle(item.type)}`}>
                          {getTypeLabel(item.type)}
                        </span>
                      </div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.description}</p>
                      )}
                    </div>
                    
                    <div className="text-right ml-6">
                      <span className="text-2xl font-light text-primary tracking-wide">{item.amount}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
