import { themeXMLConfig, parseThemeXML } from "@/data/themeConfig";
import { ColorVariableCard } from "@/components/ColorVariableCard";
import { ThemePresetCard } from "@/components/ThemePresetCard";
import { XMLViewer } from "@/components/XMLViewer";
import { Palette } from "lucide-react";

const Index = () => {
  const config = parseThemeXML(themeXMLConfig);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">
                Theme Manager
              </h1>
              <p className="text-muted-foreground mt-1">
                XML-based client-side theme configuration system
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* XML Configuration */}
        <section>
          <XMLViewer xml={themeXMLConfig} />
        </section>

        {/* Color Variables */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Color Variables
            </h2>
            <p className="text-muted-foreground">
              Reusable color definitions that can be referenced across themes
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {config.colorVariables.map((color) => (
              <ColorVariableCard key={color.id} color={color} />
            ))}
          </div>
        </section>

        {/* Theme Presets */}
        <section>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Theme Presets
            </h2>
            <p className="text-muted-foreground">
              Complete theme configurations using color variable references
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {config.themePresets.map((theme) => (
              <ThemePresetCard
                key={theme.name}
                theme={theme}
                colorVariables={config.colorVariables}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-20">
        <div className="container mx-auto px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Theme configuration powered by XML • Client-side theme management
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
