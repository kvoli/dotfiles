// Base16 Sakura
// Scheme: Misterio77 (http://github.com/Misterio77)

var color_scheme = {
        'base00': '#feedf3',
        'base01': '#f8e2e7',
        'base02': '#e0ccd1',
        'base03': '#755f64',
        'base04': '#665055',
        'base05': '#564448',
        'base06': '#42383a',
        'base07': '#33292b',
        'base08': '#df2d52',
        'base09': '#f6661e',
        'base0A': '#c29461',
        'base0B': '#2e916d',
        'base0C': '#1d8991',
        'base0D': '#006e93',
        'base0E': '#5e2180',
        'base0F': '#ba0d35',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(86, 68, 72, 0.5)");

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
