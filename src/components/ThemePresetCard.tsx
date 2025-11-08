import { Theme, ThemeConfig } from "@/data/themeConfig";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ThemePresetCardProps {
  theme: Theme;
  colorVariables: ThemeConfig["colorVariables"];
}

export function ThemePresetCard({ theme, colorVariables }: ThemePresetCardProps) {
  const getColorHex = (ref: string) => {
    return colorVariables.find((c) => c.id === ref)?.hex || "#000000";
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-xl">
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-card-foreground">{theme.name}</h3>
          <Badge variant="secondary" className="font-mono text-xs">
            {theme.roles.length} roles
          </Badge>
        </div>
        
        <div className="space-y-3">
          {theme.roles.map((role, index) => {
            const hexColor = getColorHex(role.ref);
            return (
              <div 
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 transition-colors hover:bg-muted"
              >
                <div 
                  className="w-12 h-12 rounded-md border-2 border-border shadow-sm flex-shrink-0"
                  style={{ backgroundColor: hexColor }}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-card-foreground truncate">
                    {role.role}
                  </p>
                  <p className="text-xs font-mono text-muted-foreground">
                    ref: {role.ref}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">
                  {hexColor}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
