// Base16 Colors
// Scheme: mrmrs (http://clrs.cc)

var color_scheme = {
        'base00': '#111111',
        'base01': '#333333',
        'base02': '#555555',
        'base03': '#777777',
        'base04': '#999999',
        'base05': '#bbbbbb',
        'base06': '#dddddd',
        'base07': '#ffffff',
        'base08': '#ff4136',
        'base09': '#ff851b',
        'base0A': '#ffdc00',
        'base0B': '#2ecc40',
        'base0C': '#7fdbff',
        'base0D': '#0074d9',
        'base0E': '#b10dc9',
        'base0F': '#85144b',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(187, 187, 187, 0.5)");

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
