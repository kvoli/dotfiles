;; base16-summerfruit-light-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Christopher Corley (http://christop.club/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-summerfruit-light-colors
  '(:base00 "#FFFFFF"
    :base01 "#E0E0E0"
    :base02 "#D0D0D0"
    :base03 "#B0B0B0"
    :base04 "#000000"
    :base05 "#101010"
    :base06 "#151515"
    :base07 "#202020"
    :base08 "#FF0086"
    :base09 "#FD8900"
    :base0A "#ABA800"
    :base0B "#00C918"
    :base0C "#1FAAAA"
    :base0D "#3777E6"
    :base0E "#AD00A1"
    :base0F "#CC6633")
  "All colors for Base16 Summerfruit Light are defined here.")

;; Define the theme
(deftheme base16-summerfruit-light)

;; Add all the faces to the theme
(base16-theme-define 'base16-summerfruit-light base16-summerfruit-light-colors)

;; Mark the theme as provided
(provide-theme 'base16-summerfruit-light)

(provide 'base16-summerfruit-light-theme)

;;; base16-summerfruit-light-theme.el ends here
