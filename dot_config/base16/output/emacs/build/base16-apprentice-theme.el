;; base16-apprentice-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: romainl
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-apprentice-colors
  '(:base00 "#262626"
    :base01 "#303030"
    :base02 "#333333"
    :base03 "#6C6C6C"
    :base04 "#787878"
    :base05 "#BCBCBC"
    :base06 "#C9C9C9"
    :base07 "#FFFFFF"
    :base08 "#5F8787"
    :base09 "#FF8700"
    :base0A "#5F8787"
    :base0B "#87AF87"
    :base0C "#5F875F"
    :base0D "#FFFFAF"
    :base0E "#87AFD7"
    :base0F "#5F87AF")
  "All colors for Base16 Apprentice are defined here.")

;; Define the theme
(deftheme base16-apprentice)

;; Add all the faces to the theme
(base16-theme-define 'base16-apprentice base16-apprentice-colors)

;; Mark the theme as provided
(provide-theme 'base16-apprentice)

(provide 'base16-apprentice-theme)

;;; base16-apprentice-theme.el ends here
