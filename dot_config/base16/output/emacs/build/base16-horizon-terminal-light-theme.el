;; base16-horizon-terminal-light-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Michaël Ball (http://github.com/michael-ball/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-horizon-terminal-light-colors
  '(:base00 "#FDF0ED"
    :base01 "#FADAD1"
    :base02 "#F9CBBE"
    :base03 "#BDB3B1"
    :base04 "#948C8A"
    :base05 "#403C3D"
    :base06 "#302C2D"
    :base07 "#201C1D"
    :base08 "#E95678"
    :base09 "#F9CEC3"
    :base0A "#FADAD1"
    :base0B "#29D398"
    :base0C "#59E1E3"
    :base0D "#26BBD9"
    :base0E "#EE64AC"
    :base0F "#F9CBBE")
  "All colors for Base16 Horizon Light are defined here.")

;; Define the theme
(deftheme base16-horizon-terminal-light)

;; Add all the faces to the theme
(base16-theme-define 'base16-horizon-terminal-light base16-horizon-terminal-light-colors)

;; Mark the theme as provided
(provide-theme 'base16-horizon-terminal-light)

(provide 'base16-horizon-terminal-light-theme)

;;; base16-horizon-terminal-light-theme.el ends here
