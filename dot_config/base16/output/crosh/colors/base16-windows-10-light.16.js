// Base16 Windows 10 Light
// Scheme: Fergus Collins (https://github.com/C-Fergus)

var color_scheme = {
        'base00': '#f2f2f2',
        'base01': '#e5e5e5',
        'base02': '#d9d9d9',
        'base03': '#cccccc',
        'base04': '#ababab',
        'base05': '#767676',
        'base06': '#414141',
        'base07': '#0c0c0c',
        'base08': '#c50f1f',
        'base09': '#f9f1a5',
        'base0A': '#c19c00',
        'base0B': '#13a10e',
        'base0C': '#3a96dd',
        'base0D': '#0037da',
        'base0E': '#881798',
        'base0F': '#16c60c',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(118, 118, 118, 0.5)");

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
