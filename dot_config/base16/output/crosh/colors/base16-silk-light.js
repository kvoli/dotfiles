// Base16 Silk Light
// Scheme: Gabriel Fontes (https://github.com/Misterio77)

var color_scheme = {
        'base00': '#E9F1EF',
        'base01': '#CCD4D3',
        'base02': '#90B7B6',
        'base03': '#5C787B',
        'base04': '#4B5B5F',
        'base05': '#385156',
        'base06': '#0e3c46',
        'base07': '#D2FAFF',
        'base08': '#CF432E',
        'base09': '#D27F46',
        'base0A': '#CFAD25',
        'base0B': '#6CA38C',
        'base0C': '#329CA2',
        'base0D': '#39AAC9',
        'base0E': '#6E6582',
        'base0F': '#865369',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(56, 81, 86, 0.5)");

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
