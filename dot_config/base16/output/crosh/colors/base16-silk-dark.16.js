// Base16 Silk Dark
// Scheme: Gabriel Fontes (https://github.com/Misterio77)

var color_scheme = {
        'base00': '#0e3c46',
        'base01': '#1D494E',
        'base02': '#2A5054',
        'base03': '#587073',
        'base04': '#9DC8CD',
        'base05': '#C7DBDD',
        'base06': '#CBF2F7',
        'base07': '#D2FAFF',
        'base08': '#fb6953',
        'base09': '#fcab74',
        'base0A': '#fce380',
        'base0B': '#73d8ad',
        'base0C': '#3fb2b9',
        'base0D': '#46bddd',
        'base0E': '#756b8a',
        'base0F': '#9b647b',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(199, 219, 221, 0.5)");

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
