// Base16 tender
// Scheme: Jacobo Tabernero (https://github/com/jacoborus/tender.vim)

var color_scheme = {
        'base00': '#282828',
        'base01': '#383838',
        'base02': '#484848',
        'base03': '#4c4c4c',
        'base04': '#b8b8b8',
        'base05': '#eeeeee',
        'base06': '#e8e8e8',
        'base07': '#feffff',
        'base08': '#f43753',
        'base09': '#dc9656',
        'base0A': '#ffc24b',
        'base0B': '#c9d05c',
        'base0C': '#73cef4',
        'base0D': '#b3deef',
        'base0E': '#d3b987',
        'base0F': '#a16946',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(238, 238, 238, 0.5)");

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
