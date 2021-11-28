;; base16-heetch-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Geoffrey Teale (tealeg@gmail.com)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-heetch-colors
  '(:base00 "#190134"
    :base01 "#392551"
    :base02 "#5A496E"
    :base03 "#7B6D8B"
    :base04 "#9C92A8"
    :base05 "#BDB6C5"
    :base06 "#DEDAE2"
    :base07 "#FEFFFF"
    :base08 "#27D9D5"
    :base09 "#5BA2B6"
    :base0A "#8F6C97"
    :base0B "#C33678"
    :base0C "#F80059"
    :base0D "#BD0152"
    :base0E "#82034C"
    :base0F "#470546")
  "All colors for Base16 Heetch Dark are defined here.")

;; Define the theme
(deftheme base16-heetch)

;; Add all the faces to the theme
(base16-theme-define 'base16-heetch base16-heetch-colors)

;; Mark the theme as provided
(provide-theme 'base16-heetch)

(provide 'base16-heetch-theme)

;;; base16-heetch-theme.el ends here
