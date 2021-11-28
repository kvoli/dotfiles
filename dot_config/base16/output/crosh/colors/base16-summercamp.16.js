// Base16 summercamp
// Scheme: zoe firi (zoefiri.github.io)

var color_scheme = {
        'base00': '#1c1810',
        'base01': '#2a261c',
        'base02': '#3a3527',
        'base03': '#504b38',
        'base04': '#5f5b45',
        'base05': '#736e55',
        'base06': '#bab696',
        'base07': '#f8f5de',
        'base08': '#e35142',
        'base09': '#fba11b',
        'base0A': '#f2ff27',
        'base0B': '#5ceb5a',
        'base0C': '#5aebbc',
        'base0D': '#489bf0',
        'base0E': '#FF8080',
        'base0F': '#F69BE7',
};

term_.prefs_.set('background-color', color_scheme.base00);
term_.prefs_.set('foreground-color', color_scheme.base05);
term_.prefs_.set('cursor-color', "rgba(115, 110, 85, 0.5)");

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
