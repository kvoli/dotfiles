// Base16 Apprentice
// Scheme: romainl

var color_scheme = {
        'base00': '#262626',
        'base01': '#303030',
        'base02': '#333333',
        'base03': '#6C6C6C',
        'base04': '#787878',
        'base05': '#BCBCBC',
        'base06': '#C9C9C9',
        'base07': '#FFFFFF',
        'base08': '#5F8787',
        'base09': '#FF8700',
        'base0A': '#5F8787',
        'base0B': '#87AF87',
        'base0C': '#5F875F',
        'base0D': '#FFFFAF',
        'base0E': '#87AFD7',
        'base0F': '#5F87AF',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(188, 188, 188, 0.5)");

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
