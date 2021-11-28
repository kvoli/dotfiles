// Base16 Darcula
// Scheme: jetbrains

var color_scheme = {
        'base00': '#2b2b2b',
        'base01': '#323232',
        'base02': '#323232',
        'base03': '#606366',
        'base04': '#a4a3a3',
        'base05': '#a9b7c6',
        'base06': '#ffc66d',
        'base07': '#ffffff',
        'base08': '#4eade5',
        'base09': '#689757',
        'base0A': '#bbb529',
        'base0B': '#6a8759',
        'base0C': '#629755',
        'base0D': '#9876aa',
        'base0E': '#cc7832',
        'base0F': '#808080',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(169, 183, 198, 0.5)");

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
