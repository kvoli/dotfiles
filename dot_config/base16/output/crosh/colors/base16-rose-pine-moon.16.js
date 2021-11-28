// Base16 Rosé Pine Moon
// Scheme: Emilia Dunfelt &lt;sayhi@dunfelt.se&gt;

var color_scheme = {
        'base00': '#232136',
        'base01': '#2a273f',
        'base02': '#393552',
        'base03': '#59546d',
        'base04': '#817c9c',
        'base05': '#e0def4',
        'base06': '#f5f5f7',
        'base07': '#d9d7e1',
        'base08': '#ecebf0',
        'base09': '#eb6f92',
        'base0A': '#f6c177',
        'base0B': '#ea9a97',
        'base0C': '#3e8fb0',
        'base0D': '#9ccfd8',
        'base0E': '#c4a7e7',
        'base0F': '#b9b9bc',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(224, 222, 244, 0.5)");

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
