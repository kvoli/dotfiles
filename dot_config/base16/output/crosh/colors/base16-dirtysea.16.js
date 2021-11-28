// Base16 dirtysea
// Scheme: Kahlil (Kal) Hodgson

var color_scheme = {
        'base00': '#e0e0e0',
        'base01': '#d0dad0',
        'base02': '#d0d0d0',
        'base03': '#707070',
        'base04': '#202020',
        'base05': '#000000',
        'base06': '#f8f8f8',
        'base07': '#c4d9c4',
        'base08': '#840000',
        'base09': '#006565',
        'base0A': '#755B00',
        'base0B': '#730073',
        'base0C': '#755B00',
        'base0D': '#007300',
        'base0E': '#000090',
        'base0F': '#755B00',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(0, 0, 0, 0.5)");

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
