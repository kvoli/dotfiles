// Base16 Tango
// Scheme: @Schnouki, based on the Tango Desktop Project

var color_scheme = {
        'base00': '#2e3436',
        'base01': '#8ae234',
        'base02': '#fce94f',
        'base03': '#555753',
        'base04': '#729fcf',
        'base05': '#d3d7cf',
        'base06': '#ad7fa8',
        'base07': '#eeeeec',
        'base08': '#cc0000',
        'base09': '#ef2929',
        'base0A': '#c4a000',
        'base0B': '#4e9a06',
        'base0C': '#06989a',
        'base0D': '#3465a4',
        'base0E': '#75507b',
        'base0F': '#34e2e2',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(211, 215, 207, 0.5)");

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
