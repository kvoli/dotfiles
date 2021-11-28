// Base16 Void Bear
// Scheme: kvoli (https://github.com/kvoli)

var color_scheme = {
        'base00': '#000000',
        'base01': '#655B53',
        'base02': '#6F665B',
        'base03': '#7c8776',
        'base04': '#776E61',
        'base05': '#b2c1aa',
        'base06': '#AA5B2B',
        'base07': '#b2c1aa',
        'base08': '#524B46',
        'base09': '#524B46',
        'base0A': '#6F665B',
        'base0B': '#655B53',
        'base0C': '#887768',
        'base0D': '#776E61',
        'base0E': '#AA5B2B',
        'base0F': '#887768',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(178, 193, 170, 0.5)");

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
