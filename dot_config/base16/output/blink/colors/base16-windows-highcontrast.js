// Base16 Windows High Contrast
// Scheme: Fergus Collins (https://github.com/C-Fergus)

base00 = '#000000';
base01 = '#1C1C1C';
base02 = '#383838';
base03 = '#545454';
base04 = '#a2a2a2';
base05 = '#c0c0c0';
base06 = '#dedede';
base07 = '#fcfcfc';
base08 = '#fc5454';
base09 = '#808000';
base0A = '#fcfc54';
base0B = '#54fc54';
base0C = '#54fcfc';
base0D = '#5454fc';
base0E = '#fc54fc';
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
