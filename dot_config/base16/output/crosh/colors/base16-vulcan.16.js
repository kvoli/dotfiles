// Base16 vulcan
// Scheme: Andrey Varfolomeev

var color_scheme = {
        'base00': '#041523',
        'base01': '#122339',
        'base02': '#003552',
        'base03': '#7a5759',
        'base04': '#6b6977',
        'base05': '#5b778c',
        'base06': '#333238',
        'base07': '#214d68',
        'base08': '#818591',
        'base09': '#9198a3',
        'base0A': '#adb4b9',
        'base0B': '#977d7c',
        'base0C': '#977d7c',
        'base0D': '#977d7c',
        'base0E': '#9198a3',
        'base0F': '#977d7c',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(91, 119, 140, 0.5)");

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
