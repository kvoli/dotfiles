// Base16 Equilibrium Light
// Scheme: Carlo Abelli

var color_scheme = {
        'base00': '#f5f0e7',
        'base01': '#e7e2d9',
        'base02': '#d8d4cb',
        'base03': '#73777f',
        'base04': '#5a5f66',
        'base05': '#43474e',
        'base06': '#2c3138',
        'base07': '#181c22',
        'base08': '#d02023',
        'base09': '#bf3e05',
        'base0A': '#9d6f00',
        'base0B': '#637200',
        'base0C': '#007a72',
        'base0D': '#0073b5',
        'base0E': '#4e66b6',
        'base0F': '#c42775',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(67, 71, 78, 0.5)");

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
