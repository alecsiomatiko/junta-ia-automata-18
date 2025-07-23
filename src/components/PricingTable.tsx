import { Card } from "@/components/ui/card";

interface PricingRowProps {
  type: string;
  includes: string[];
  price: string;
  quantity: number;
  subtotal: string;
}

export const PricingTable = ({ rows }: { rows: PricingRowProps[] }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-glass-border backdrop-blur-md">
      <div className="grid grid-cols-5 gap-4 p-4 bg-gradient-primary text-primary-foreground font-semibold">
        <div>Tipo de licencia</div>
        <div>Incluye</div>
        <div>Precio unitario</div>
        <div>Cantidad inicial</div>
        <div>Subtotal</div>
      </div>
      
      {rows.map((row, index) => (
        <div key={index} className="grid grid-cols-5 gap-4 p-4 border-b border-glass-border last:border-b-0 bg-glass-bg">
          <div className="font-medium text-foreground">{row.type}</div>
          <div className="text-muted-foreground">
            <ul className="text-sm space-y-1">
              {row.includes.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="font-semibold text-primary">{row.price}</div>
          <div className="text-center">{row.quantity}</div>
          <div className="font-bold text-primary">{row.subtotal}</div>
        </div>
      ))}
    </div>
  );
};