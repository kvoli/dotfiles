// Base16 Equilibrium Dark
// Scheme: Carlo Abelli

var color_scheme = {
        'base00': '#0c1118',
        'base01': '#181c22',
        'base02': '#22262d',
        'base03': '#7b776e',
        'base04': '#949088',
        'base05': '#afaba2',
        'base06': '#cac6bd',
        'base07': '#e7e2d9',
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
term_.prefs_.set('cursor-color', "rgba(175, 171, 162, 0.5)");

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
