// Base16 Windows NT Light
// Scheme: Fergus Collins (https://github.com/C-Fergus)

base00 = '#ffffff';
base01 = '#eaeaea';
base02 = '#d5d5d5';
base03 = '#c0c0c0';
base04 = '#a0a0a0';
base05 = '#808080';
base06 = '#404040';
base07 = '#000000';
base08 = '#800000';
base09 = '#ffff00';
base0A = '#808000';
base0B = '#008000';
base0C = '#008080';
base0D = '#000080';
base0E = '#800080';
base0F = '#00ff00';

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

t.prefs_.set('cursor-color', "rgba(128, 128, 128, 0.5)");
t.prefs_.set('foreground-color', base05);
t.prefs_.set('background-color', base00);
