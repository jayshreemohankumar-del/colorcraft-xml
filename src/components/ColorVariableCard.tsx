import { ColorVariable } from "@/data/themeConfig";
import { Card } from "@/components/ui/card";

interface ColorVariableCardProps {
  color: ColorVariable;
}

export function ColorVariableCard({ color }: ColorVariableCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div 
        className="h-32 w-full transition-transform hover:scale-105" 
        style={{ backgroundColor: color.hex }}
      />
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-card-foreground">{color.id}</h3>
        <p className="text-sm font-mono text-muted-foreground">{color.hex}</p>
      </div>
    </Card>
  );
}
