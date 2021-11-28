;; base16-qualia-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: isaacwhanson
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-qualia-colors
  '(:base00 "#101010"
    :base01 "#454545"
    :base02 "#454545"
    :base03 "#454545"
    :base04 "#808080"
    :base05 "#C0C0C0"
    :base06 "#C0C0C0"
    :base07 "#454545"
    :base08 "#EFA6A2"
    :base09 "#A3B8EF"
    :base0A "#E6A3DC"
    :base0B "#80C990"
    :base0C "#C8C874"
    :base0D "#50CACD"
    :base0E "#E0AF85"
    :base0F "#808080")
  "All colors for Base16 Qualia are defined here.")

;; Define the theme
(deftheme base16-qualia)

;; Add all the faces to the theme
(base16-theme-define 'base16-qualia base16-qualia-colors)

;; Mark the theme as provided
(provide-theme 'base16-qualia)

(provide 'base16-qualia-theme)

;;; base16-qualia-theme.el ends here
