// Base16 Rosé Pine
// Scheme: Emilia Dunfelt &lt;sayhi@dunfelt.se&gt;

var color_scheme = {
        'base00': '#191724',
        'base01': '#1f1d2e',
        'base02': '#26233a',
        'base03': '#555169',
        'base04': '#6e6a86',
        'base05': '#e0def4',
        'base06': '#f0f0f3',
        'base07': '#c5c3ce',
        'base08': '#e2e1e7',
        'base09': '#eb6f92',
        'base0A': '#f6c177',
        'base0B': '#ebbcba',
        'base0C': '#31748f',
        'base0D': '#9ccfd8',
        'base0E': '#c4a7e7',
        'base0F': '#e5e5e5',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(224, 222, 244, 0.5)");

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
