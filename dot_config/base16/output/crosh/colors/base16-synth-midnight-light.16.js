// Base16 Synth Midnight Terminal Light
// Scheme: Michaël Ball (http://github.com/michael-ball/)

var color_scheme = {
        'base00': '#dddfe0',
        'base01': '#cfd1d2',
        'base02': '#c1c3c4',
        'base03': '#a3a5a6',
        'base04': '#474849',
        'base05': '#28292a',
        'base06': '#1a1b1c',
        'base07': '#050608',
        'base08': '#b53b50',
        'base09': '#ea770d',
        'base0A': '#c9d364',
        'base0B': '#06ea61',
        'base0C': '#42fff9',
        'base0D': '#03aeff',
        'base0E': '#ea5ce2',
        'base0F': '#cd6320',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(40, 41, 42, 0.5)");

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
