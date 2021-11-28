// Base16 Windows 10
// Scheme: Fergus Collins (https://github.com/C-Fergus)

var color_scheme = {
        'base00': '#0c0c0c',
        'base01': '#2f2f2f',
        'base02': '#535353',
        'base03': '#767676',
        'base04': '#b9b9b9',
        'base05': '#cccccc',
        'base06': '#dfdfdf',
        'base07': '#f2f2f2',
        'base08': '#e74856',
        'base09': '#c19c00',
        'base0A': '#f9f1a5',
        'base0B': '#16c60c',
        'base0C': '#61d6d6',
        'base0D': '#3b78ff',
        'base0E': '#b4009e',
        'base0F': '#13a10e',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(204, 204, 204, 0.5)");

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
