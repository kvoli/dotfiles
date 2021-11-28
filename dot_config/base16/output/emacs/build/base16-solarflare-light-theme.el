;; base16-solarflare-light-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Chuck Harmston (https://chuck.harmston.ch)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-solarflare-light-colors
  '(:base00 "#F5F7FA"
    :base01 "#E8E9ED"
    :base02 "#A6AFB8"
    :base03 "#85939E"
    :base04 "#667581"
    :base05 "#586875"
    :base06 "#222E38"
    :base07 "#18262F"
    :base08 "#EF5253"
    :base09 "#E66B2B"
    :base0A "#E4B51C"
    :base0B "#7CC844"
    :base0C "#52CBB0"
    :base0D "#33B5E1"
    :base0E "#A363D5"
    :base0F "#D73C9A")
  "All colors for Base16 Solar Flare Light are defined here.")

;; Define the theme
(deftheme base16-solarflare-light)

;; Add all the faces to the theme
(base16-theme-define 'base16-solarflare-light base16-solarflare-light-colors)

;; Mark the theme as provided
(provide-theme 'base16-solarflare-light)

(provide 'base16-solarflare-light-theme)

;;; base16-solarflare-light-theme.el ends here
