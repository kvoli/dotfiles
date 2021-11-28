;; base16-summerfruit-dark-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Christopher Corley (http://christop.club/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-summerfruit-dark-colors
  '(:base00 "#151515"
    :base01 "#202020"
    :base02 "#303030"
    :base03 "#505050"
    :base04 "#B0B0B0"
    :base05 "#D0D0D0"
    :base06 "#E0E0E0"
    :base07 "#FFFFFF"
    :base08 "#FF0086"
    :base09 "#FD8900"
    :base0A "#ABA800"
    :base0B "#00C918"
    :base0C "#1FAAAA"
    :base0D "#3777E6"
    :base0E "#AD00A1"
    :base0F "#CC6633")
  "All colors for Base16 Summerfruit Dark are defined here.")

;; Define the theme
(deftheme base16-summerfruit-dark)

;; Add all the faces to the theme
(base16-theme-define 'base16-summerfruit-dark base16-summerfruit-dark-colors)

;; Mark the theme as provided
(provide-theme 'base16-summerfruit-dark)

(provide 'base16-summerfruit-dark-theme)

;;; base16-summerfruit-dark-theme.el ends here
