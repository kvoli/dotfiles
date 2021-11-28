;; base16-kimber-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Mishka Nguyen (https://github.com/akhsiM)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-kimber-colors
  '(:base00 "#222222"
    :base01 "#313131"
    :base02 "#555D55"
    :base03 "#644646"
    :base04 "#5A5A5A"
    :base05 "#DEDEE7"
    :base06 "#C3C3B4"
    :base07 "#FFFFE6"
    :base08 "#C88C8C"
    :base09 "#476C88"
    :base0A "#D8B56D"
    :base0B "#99C899"
    :base0C "#78B4B4"
    :base0D "#537C9C"
    :base0E "#86CACD"
    :base0F "#704F4F")
  "All colors for Base16 Kimber are defined here.")

;; Define the theme
(deftheme base16-kimber)

;; Add all the faces to the theme
(base16-theme-define 'base16-kimber base16-kimber-colors)

;; Mark the theme as provided
(provide-theme 'base16-kimber)

(provide 'base16-kimber-theme)

;;; base16-kimber-theme.el ends here
