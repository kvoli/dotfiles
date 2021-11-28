// Base16 Windows NT Light
// Scheme: Fergus Collins (https://github.com/C-Fergus)

var color_scheme = {
        'base00': '#ffffff',
        'base01': '#eaeaea',
        'base02': '#d5d5d5',
        'base03': '#c0c0c0',
        'base04': '#a0a0a0',
        'base05': '#808080',
        'base06': '#404040',
        'base07': '#000000',
        'base08': '#800000',
        'base09': '#ffff00',
        'base0A': '#808000',
        'base0B': '#008000',
        'base0C': '#008080',
        'base0D': '#000080',
        'base0E': '#800080',
        'base0F': '#00ff00',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(128, 128, 128, 0.5)");

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
