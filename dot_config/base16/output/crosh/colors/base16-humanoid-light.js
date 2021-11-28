// Base16 Humanoid light
// Scheme: Thomas (tasmo) Friese

var color_scheme = {
        'base00': '#f8f8f2',
        'base01': '#efefe9',
        'base02': '#deded8',
        'base03': '#c0c0bd',
        'base04': '#60615d',
        'base05': '#232629',
        'base06': '#2f3337',
        'base07': '#070708',
        'base08': '#b0151a',
        'base09': '#ff3d00',
        'base0A': '#ffb627',
        'base0B': '#388e3c',
        'base0C': '#008e8e',
        'base0D': '#0082c9',
        'base0E': '#700f98',
        'base0F': '#b27701',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(35, 38, 41, 0.5)");

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
                        color_scheme.base08,
                        color_scheme.base0B,
                        color_scheme.base0A,
                        color_scheme.base0D,
                        color_scheme.base0E,
                        color_scheme.base0C,
                        color_scheme.base07,
                        color_scheme.base09,
                        color_scheme.base0F,
                        color_scheme.base01,
                        color_scheme.base02,
                        color_scheme.base04,
                        color_scheme.base06]);
