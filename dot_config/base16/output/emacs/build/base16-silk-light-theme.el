;; base16-silk-light-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Gabriel Fontes (https://github.com/Misterio77)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-silk-light-colors
  '(:base00 "#E9F1EF"
    :base01 "#CCD4D3"
    :base02 "#90B7B6"
    :base03 "#5C787B"
    :base04 "#4B5B5F"
    :base05 "#385156"
    :base06 "#0e3c46"
    :base07 "#D2FAFF"
    :base08 "#CF432E"
    :base09 "#D27F46"
    :base0A "#CFAD25"
    :base0B "#6CA38C"
    :base0C "#329CA2"
    :base0D "#39AAC9"
    :base0E "#6E6582"
    :base0F "#865369")
  "All colors for Base16 Silk Light are defined here.")

;; Define the theme
(deftheme base16-silk-light)

;; Add all the faces to the theme
(base16-theme-define 'base16-silk-light base16-silk-light-colors)

;; Mark the theme as provided
(provide-theme 'base16-silk-light)

(provide 'base16-silk-light-theme)

;;; base16-silk-light-theme.el ends here
