// Base16 Qualia
// Scheme: isaacwhanson

var color_scheme = {
        'base00': '#101010',
        'base01': '#454545',
        'base02': '#454545',
        'base03': '#454545',
        'base04': '#808080',
        'base05': '#C0C0C0',
        'base06': '#C0C0C0',
        'base07': '#454545',
        'base08': '#EFA6A2',
        'base09': '#A3B8EF',
        'base0A': '#E6A3DC',
        'base0B': '#80C990',
        'base0C': '#C8C874',
        'base0D': '#50CACD',
        'base0E': '#E0AF85',
        'base0F': '#808080',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(192, 192, 192, 0.5)");

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
