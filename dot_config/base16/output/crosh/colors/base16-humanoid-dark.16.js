// Base16 Humanoid dark
// Scheme: Thomas (tasmo) Friese

var color_scheme = {
        'base00': '#232629',
        'base01': '#333b3d',
        'base02': '#484e54',
        'base03': '#60615d',
        'base04': '#c0c0bd',
        'base05': '#f8f8f2',
        'base06': '#fcfcf6',
        'base07': '#fcfcfc',
        'base08': '#f11235',
        'base09': '#ff9505',
        'base0A': '#ffb627',
        'base0B': '#02d849',
        'base0C': '#0dd9d6',
        'base0D': '#00a6fb',
        'base0E': '#f15ee3',
        'base0F': '#b27701',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(248, 248, 242, 0.5)");

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
