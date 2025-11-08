// XML Theme Configuration Data Structure
export const themeXMLConfig = `<?xml version="1.0" encoding="UTF-8"?>
<ThemeManager>
  <ColorVariables>
    <Color id="deep-ocean">#1e3a8a</Color>
    <Color id="sky-blue">#3b82f6</Color>
    <Color id="slate-gray">#64748b</Color>
    <Color id="pure-white">#ffffff</Color>
    <Color id="charcoal">#1f2937</Color>
    <Color id="emerald">#10b981</Color>
    <Color id="sunset-orange">#f97316</Color>
    <Color id="lavender">#a78bfa</Color>
  </ColorVariables>

  <ThemePresets>
    <Theme name="DarkMode">
      <PrimaryBackground ref="charcoal" />
      <SecondaryText ref="slate-gray" />
      <HighlightColor ref="sky-blue" />
      <AccentColor ref="emerald" />
    </Theme>

    <Theme name="LightMode">
      <PrimaryBackground ref="pure-white" />
      <SecondaryText ref="slate-gray" />
      <HighlightColor ref="deep-ocean" />
      <AccentColor ref="sunset-orange" />
    </Theme>

    <Theme name="AccentMode">
      <PrimaryBackground ref="deep-ocean" />
      <SecondaryText ref="pure-white" />
      <HighlightColor ref="lavender" />
      <AccentColor ref="emerald" />
    </Theme>
  </ThemePresets>
</ThemeManager>`;

export interface ColorVariable {
  id: string;
  hex: string;
}

export interface ThemeRole {
  role: string;
  ref: string;
}

export interface Theme {
  name: string;
  roles: ThemeRole[];
}

export interface ThemeConfig {
  colorVariables: ColorVariable[];
  themePresets: Theme[];
}

// Parse XML to structured data
export function parseThemeXML(xmlString: string): ThemeConfig {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");

  // Parse color variables
  const colorElements = xmlDoc.querySelectorAll("ColorVariables > Color");
  const colorVariables: ColorVariable[] = Array.from(colorElements).map((el) => ({
    id: el.getAttribute("id") || "",
    hex: el.textContent || "",
  }));

  // Parse theme presets
  const themeElements = xmlDoc.querySelectorAll("ThemePresets > Theme");
  const themePresets: Theme[] = Array.from(themeElements).map((themeEl) => {
    const name = themeEl.getAttribute("name") || "";
    const roleElements = themeEl.children;
    const roles: ThemeRole[] = Array.from(roleElements).map((roleEl) => ({
      role: roleEl.tagName,
      ref: roleEl.getAttribute("ref") || "",
    }));
    return { name, roles };
  });

  return { colorVariables, themePresets };
}
