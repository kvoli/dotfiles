;; base16-horizon-light-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Michaël Ball (http://github.com/michael-ball/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-horizon-light-colors
  '(:base00 "#FDF0ED"
    :base01 "#FADAD1"
    :base02 "#F9CBBE"
    :base03 "#BDB3B1"
    :base04 "#948C8A"
    :base05 "#403C3D"
    :base06 "#302C2D"
    :base07 "#201C1D"
    :base08 "#F7939B"
    :base09 "#F6661E"
    :base0A "#FBE0D9"
    :base0B "#94E1B0"
    :base0C "#DC3318"
    :base0D "#DA103F"
    :base0E "#1D8991"
    :base0F "#E58C92")
  "All colors for Base16 Horizon Light are defined here.")

;; Define the theme
(deftheme base16-horizon-light)

;; Add all the faces to the theme
(base16-theme-define 'base16-horizon-light base16-horizon-light-colors)

;; Mark the theme as provided
(provide-theme 'base16-horizon-light)

(provide 'base16-horizon-light-theme)

;;; base16-horizon-light-theme.el ends here
