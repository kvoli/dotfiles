;; base16-void-bear-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: kvoli (https://github.com/kvoli)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-void-bear-colors
  '(:base00 "#000000"
    :base01 "#655B53"
    :base02 "#6F665B"
    :base03 "#7c8776"
    :base04 "#776E61"
    :base05 "#b2c1aa"
    :base06 "#AA5B2B"
    :base07 "#b2c1aa"
    :base08 "#524B46"
    :base09 "#524B46"
    :base0A "#6F665B"
    :base0B "#655B53"
    :base0C "#887768"
    :base0D "#776E61"
    :base0E "#AA5B2B"
    :base0F "#887768")
  "All colors for Base16 Void Bear are defined here.")

;; Define the theme
(deftheme base16-void-bear)

;; Add all the faces to the theme
(base16-theme-define 'base16-void-bear base16-void-bear-colors)

;; Mark the theme as provided
(provide-theme 'base16-void-bear)

(provide 'base16-void-bear-theme)

;;; base16-void-bear-theme.el ends here
