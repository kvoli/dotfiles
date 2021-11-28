;; base16-framer-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Framer (Maintained by Jesse Hoyos)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-framer-colors
  '(:base00 "#181818"
    :base01 "#151515"
    :base02 "#464646"
    :base03 "#747474"
    :base04 "#B9B9B9"
    :base05 "#D0D0D0"
    :base06 "#E8E8E8"
    :base07 "#EEEEEE"
    :base08 "#FD886B"
    :base09 "#FC4769"
    :base0A "#FECB6E"
    :base0B "#32CCDC"
    :base0C "#ACDDFD"
    :base0D "#20BCFC"
    :base0E "#BA8CFC"
    :base0F "#B15F4A")
  "All colors for Base16 Framer are defined here.")

;; Define the theme
(deftheme base16-framer)

;; Add all the faces to the theme
(base16-theme-define 'base16-framer base16-framer-colors)

;; Mark the theme as provided
(provide-theme 'base16-framer)

(provide 'base16-framer-theme)

;;; base16-framer-theme.el ends here
