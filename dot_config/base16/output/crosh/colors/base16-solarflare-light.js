// Base16 Solar Flare Light
// Scheme: Chuck Harmston (https://chuck.harmston.ch)

var color_scheme = {
        'base00': '#F5F7FA',
        'base01': '#E8E9ED',
        'base02': '#A6AFB8',
        'base03': '#85939E',
        'base04': '#667581',
        'base05': '#586875',
        'base06': '#222E38',
        'base07': '#18262F',
        'base08': '#EF5253',
        'base09': '#E66B2B',
        'base0A': '#E4B51C',
        'base0B': '#7CC844',
        'base0C': '#52CBB0',
        'base0D': '#33B5E1',
        'base0E': '#A363D5',
        'base0F': '#D73C9A',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(88, 104, 117, 0.5)");

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
