// Base16 Windows NT
// Scheme: Fergus Collins (https://github.com/C-Fergus)

var color_scheme = {
        'base00': '#000000',
        'base01': '#2a2a2a',
        'base02': '#555555',
        'base03': '#808080',
        'base04': '#a1a1a1',
        'base05': '#c0c0c0',
        'base06': '#e0e0e0',
        'base07': '#ffffff',
        'base08': '#ff0000',
        'base09': '#808000',
        'base0A': '#ffff00',
        'base0B': '#00ff00',
        'base0C': '#00ffff',
        'base0D': '#0000ff',
        'base0E': '#ff00ff',
        'base0F': '#008000',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(192, 192, 192, 0.5)");

term_.prefs_.set('color-palette-overrides',
                        [color_scheme.base00,
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base05,
                        color_scheme.base03,
                        color_scheme.base09,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06,
                        color_scheme.base0F,
                        color_scheme.base07]);
