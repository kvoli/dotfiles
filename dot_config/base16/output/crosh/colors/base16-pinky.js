// Base16 pinky
// Scheme: Benjamin (https://github.com/b3nj5m1n)

var color_scheme = {
        'base00': '#171517',
        'base01': '#1b181b',
        'base02': '#1d1b1d',
        'base03': '#383338',
        'base04': '#e7dbdb',
        'base05': '#f5f5f5',
        'base06': '#ffffff',
        'base07': '#f7f3f7',
        'base08': '#ffa600',
        'base09': '#00ff66',
        'base0A': '#20df6c',
        'base0B': '#ff0066',
        'base0C': '#6600ff',
        'base0D': '#00ffff',
        'base0E': '#007fff',
        'base0F': '#df206c',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(245, 245, 245, 0.5)");

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
