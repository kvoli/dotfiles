// Base16 Rosé Pine Dawn
// Scheme: Emilia Dunfelt &lt;sayhi@dunfelt.se&gt;

var color_scheme = {
        'base00': '#faf4ed',
        'base01': '#fffaf3',
        'base02': '#f2e9de',
        'base03': '#9893a5',
        'base04': '#6e6a86',
        'base05': '#575279',
        'base06': '#555169',
        'base07': '#26233a',
        'base08': '#1f1d2e',
        'base09': '#b4637a',
        'base0A': '#ea9d34',
        'base0B': '#d7827e',
        'base0C': '#286983',
        'base0D': '#56949f',
        'base0E': '#907aa9',
        'base0F': '#c5c3ce',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(87, 82, 121, 0.5)");

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
