// Base16 darkmoss
// Scheme: Gabriel Avanzi (https://github.com/avanzzzi)

var color_scheme = {
        'base00': '#171e1f',
        'base01': '#252c2d',
        'base02': '#373c3d',
        'base03': '#555e5f',
        'base04': '#818f80',
        'base05': '#c7c7a5',
        'base06': '#e3e3c8',
        'base07': '#e1eaef',
        'base08': '#ff4658',
        'base09': '#e6db74',
        'base0A': '#fdb11f',
        'base0B': '#499180',
        'base0C': '#66d9ef',
        'base0D': '#498091',
        'base0E': '#9bc0c8',
        'base0F': '#d27b53',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(199, 199, 165, 0.5)");

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
