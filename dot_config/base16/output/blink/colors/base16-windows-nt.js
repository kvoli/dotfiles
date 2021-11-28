// Base16 Windows NT
// Scheme: Fergus Collins (https://github.com/C-Fergus)

base00 = '#000000';
base01 = '#2a2a2a';
base02 = '#555555';
base03 = '#808080';
base04 = '#a1a1a1';
base05 = '#c0c0c0';
base06 = '#e0e0e0';
base07 = '#ffffff';
base08 = '#ff0000';
base09 = '#808000';
base0A = '#ffff00';
base0B = '#00ff00';
base0C = '#00ffff';
base0D = '#0000ff';
base0E = '#ff00ff';
base0F = '#008000';

t.prefs_.set('color-palette-overrides', 
                        [base00,
                        base08,
                        base0B,
                        base0A,
                        base0D,
                        base0E,
                        base0C,
                        base05,
                        base03,
                        base08,
                        base0B,
                        base0A,
                        base0D,
                        base0E,
                        base0C,
                        base07,
                        base09,
                        base0F,
                        base01,
                        base02,
                        base04,
                        base06]);

t.prefs_.set('cursor-color', "rgba(192, 192, 192, 0.5)");
t.prefs_.set('foreground-color', base05);
t.prefs_.set('background-color', base00);
