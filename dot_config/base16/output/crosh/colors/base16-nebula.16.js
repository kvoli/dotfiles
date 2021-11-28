// Base16 Nebula
// Scheme: Gabriel Fontes (https://github.com/Misterio77)

var color_scheme = {
        'base00': '#22273b',
        'base01': '#414f60',
        'base02': '#5a8380',
        'base03': '#6e6f72',
        'base04': '#87888b',
        'base05': '#a4a6a9',
        'base06': '#c7c9cd',
        'base07': '#8dbdaa',
        'base08': '#777abc',
        'base09': '#94929e',
        'base0A': '#4f9062',
        'base0B': '#6562a8',
        'base0C': '#226f68',
        'base0D': '#4d6bb6',
        'base0E': '#716cae',
        'base0F': '#8c70a7',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(164, 166, 169, 0.5)");

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
