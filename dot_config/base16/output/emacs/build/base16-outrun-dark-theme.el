;; base16-outrun-dark-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Hugo Delahousse (http://github.com/hugodelahousse/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-outrun-dark-colors
  '(:base00 "#00002A"
    :base01 "#20204A"
    :base02 "#30305A"
    :base03 "#50507A"
    :base04 "#B0B0DA"
    :base05 "#D0D0FA"
    :base06 "#E0E0FF"
    :base07 "#F5F5FF"
    :base08 "#FF4242"
    :base09 "#FC8D28"
    :base0A "#F3E877"
    :base0B "#59F176"
    :base0C "#0EF0F0"
    :base0D "#66B0FF"
    :base0E "#F10596"
    :base0F "#F003EF")
  "All colors for Base16 Outrun Dark are defined here.")

;; Define the theme
(deftheme base16-outrun-dark)

;; Add all the faces to the theme
(base16-theme-define 'base16-outrun-dark base16-outrun-dark-colors)

;; Mark the theme as provided
(provide-theme 'base16-outrun-dark)

(provide 'base16-outrun-dark-theme)

;;; base16-outrun-dark-theme.el ends here
