;; base16-classic-dark-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Jason Heeris (http://heeris.id.au)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-classic-dark-colors
  '(:base00 "#151515"
    :base01 "#202020"
    :base02 "#303030"
    :base03 "#505050"
    :base04 "#B0B0B0"
    :base05 "#D0D0D0"
    :base06 "#E0E0E0"
    :base07 "#F5F5F5"
    :base08 "#AC4142"
    :base09 "#D28445"
    :base0A "#F4BF75"
    :base0B "#90A959"
    :base0C "#75B5AA"
    :base0D "#6A9FB5"
    :base0E "#AA759F"
    :base0F "#8F5536")
  "All colors for Base16 Classic Dark are defined here.")

;; Define the theme
(deftheme base16-classic-dark)

;; Add all the faces to the theme
(base16-theme-define 'base16-classic-dark base16-classic-dark-colors)

;; Mark the theme as provided
(provide-theme 'base16-classic-dark)

(provide 'base16-classic-dark-theme)

;;; base16-classic-dark-theme.el ends here
