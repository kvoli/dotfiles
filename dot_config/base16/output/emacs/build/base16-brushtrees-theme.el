;; base16-brushtrees-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Abraham White &lt;abelincoln.white@gmail.com&gt;
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-brushtrees-colors
  '(:base00 "#E3EFEF"
    :base01 "#C9DBDC"
    :base02 "#B0C5C8"
    :base03 "#98AFB5"
    :base04 "#8299A1"
    :base05 "#6D828E"
    :base06 "#5A6D7A"
    :base07 "#485867"
    :base08 "#b38686"
    :base09 "#d8bba2"
    :base0A "#aab386"
    :base0B "#87b386"
    :base0C "#86b3b3"
    :base0D "#868cb3"
    :base0E "#b386b2"
    :base0F "#b39f9f")
  "All colors for Base16 Brush Trees are defined here.")

;; Define the theme
(deftheme base16-brushtrees)

;; Add all the faces to the theme
(base16-theme-define 'base16-brushtrees base16-brushtrees-colors)

;; Mark the theme as provided
(provide-theme 'base16-brushtrees)

(provide 'base16-brushtrees-theme)

;;; base16-brushtrees-theme.el ends here
