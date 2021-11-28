;; base16-xcode-dusk-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Elsa Gonsiorowski (https://github.com/gonsie)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-xcode-dusk-colors
  '(:base00 "#282B35"
    :base01 "#3D4048"
    :base02 "#53555D"
    :base03 "#686A71"
    :base04 "#7E8086"
    :base05 "#939599"
    :base06 "#A9AAAE"
    :base07 "#BEBFC2"
    :base08 "#B21889"
    :base09 "#786DC5"
    :base0A "#438288"
    :base0B "#DF0002"
    :base0C "#00A0BE"
    :base0D "#790EAD"
    :base0E "#B21889"
    :base0F "#C77C48")
  "All colors for Base16 XCode Dusk are defined here.")

;; Define the theme
(deftheme base16-xcode-dusk)

;; Add all the faces to the theme
(base16-theme-define 'base16-xcode-dusk base16-xcode-dusk-colors)

;; Mark the theme as provided
(provide-theme 'base16-xcode-dusk)

(provide 'base16-xcode-dusk-theme)

;;; base16-xcode-dusk-theme.el ends here
