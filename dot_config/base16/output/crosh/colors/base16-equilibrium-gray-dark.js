// Base16 Equilibrium Gray Dark
// Scheme: Carlo Abelli

var color_scheme = {
        'base00': '#111111',
        'base01': '#1b1b1b',
        'base02': '#262626',
        'base03': '#777777',
        'base04': '#919191',
        'base05': '#ababab',
        'base06': '#c6c6c6',
        'base07': '#e2e2e2',
        'base08': '#f04339',
        'base09': '#df5923',
        'base0A': '#bb8801',
        'base0B': '#7f8b00',
        'base0C': '#00948b',
        'base0D': '#008dd1',
        'base0E': '#6a7fd2',
        'base0F': '#e3488e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(171, 171, 171, 0.5)");

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
