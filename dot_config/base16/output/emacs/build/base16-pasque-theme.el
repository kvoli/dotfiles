;; base16-pasque-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Gabriel Fontes (https://github.com/Misterio77)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-pasque-colors
  '(:base00 "#271C3A"
    :base01 "#100323"
    :base02 "#3E2D5C"
    :base03 "#5D5766"
    :base04 "#BEBCBF"
    :base05 "#DEDCDF"
    :base06 "#EDEAEF"
    :base07 "#BBAADD"
    :base08 "#A92258"
    :base09 "#918889"
    :base0A "#804ead"
    :base0B "#C6914B"
    :base0C "#7263AA"
    :base0D "#8E7DC6"
    :base0E "#953B9D"
    :base0F "#59325C")
  "All colors for Base16 Pasque are defined here.")

;; Define the theme
(deftheme base16-pasque)

;; Add all the faces to the theme
(base16-theme-define 'base16-pasque base16-pasque-colors)

;; Mark the theme as provided
(provide-theme 'base16-pasque)

(provide 'base16-pasque-theme)

;;; base16-pasque-theme.el ends here
