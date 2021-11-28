// Base16 Pasque
// Scheme: Gabriel Fontes (https://github.com/Misterio77)

var color_scheme = {
        'base00': '#271C3A',
        'base01': '#100323',
        'base02': '#3E2D5C',
        'base03': '#5D5766',
        'base04': '#BEBCBF',
        'base05': '#DEDCDF',
        'base06': '#EDEAEF',
        'base07': '#BBAADD',
        'base08': '#A92258',
        'base09': '#918889',
        'base0A': '#804ead',
        'base0B': '#C6914B',
        'base0C': '#7263AA',
        'base0D': '#8E7DC6',
        'base0E': '#953B9D',
        'base0F': '#59325C',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(222, 220, 223, 0.5)");

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
