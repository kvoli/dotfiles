// Base16 Kimber
// Scheme: Mishka Nguyen (https://github.com/akhsiM)

var color_scheme = {
        'base00': '#222222',
        'base01': '#313131',
        'base02': '#555D55',
        'base03': '#644646',
        'base04': '#5A5A5A',
        'base05': '#DEDEE7',
        'base06': '#C3C3B4',
        'base07': '#FFFFE6',
        'base08': '#C88C8C',
        'base09': '#476C88',
        'base0A': '#D8B56D',
        'base0B': '#99C899',
        'base0C': '#78B4B4',
        'base0D': '#537C9C',
        'base0E': '#86CACD',
        'base0F': '#704F4F',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(222, 222, 231, 0.5)");

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
