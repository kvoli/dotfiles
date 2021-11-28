;; base16-horizon-dark-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Michaël Ball (http://github.com/michael-ball/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-horizon-dark-colors
  '(:base00 "#1C1E26"
    :base01 "#232530"
    :base02 "#2E303E"
    :base03 "#6F6F70"
    :base04 "#9DA0A2"
    :base05 "#CBCED0"
    :base06 "#DCDFE4"
    :base07 "#E3E6EE"
    :base08 "#E93C58"
    :base09 "#E58D7D"
    :base0A "#EFB993"
    :base0B "#EFAF8E"
    :base0C "#24A8B4"
    :base0D "#DF5273"
    :base0E "#B072D1"
    :base0F "#E4A382")
  "All colors for Base16 Horizon Dark are defined here.")

;; Define the theme
(deftheme base16-horizon-dark)

;; Add all the faces to the theme
(base16-theme-define 'base16-horizon-dark base16-horizon-dark-colors)

;; Mark the theme as provided
(provide-theme 'base16-horizon-dark)

(provide 'base16-horizon-dark-theme)

;;; base16-horizon-dark-theme.el ends here
