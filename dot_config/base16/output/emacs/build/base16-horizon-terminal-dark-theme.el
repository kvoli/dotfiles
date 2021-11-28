;; base16-horizon-terminal-dark-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Michaël Ball (http://github.com/michael-ball/)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-horizon-terminal-dark-colors
  '(:base00 "#1C1E26"
    :base01 "#232530"
    :base02 "#2E303E"
    :base03 "#6F6F70"
    :base04 "#9DA0A2"
    :base05 "#CBCED0"
    :base06 "#DCDFE4"
    :base07 "#E3E6EE"
    :base08 "#E95678"
    :base09 "#FAB795"
    :base0A "#FAC29A"
    :base0B "#29D398"
    :base0C "#59E1E3"
    :base0D "#26BBD9"
    :base0E "#EE64AC"
    :base0F "#F09383")
  "All colors for Base16 Horizon Dark are defined here.")

;; Define the theme
(deftheme base16-horizon-terminal-dark)

;; Add all the faces to the theme
(base16-theme-define 'base16-horizon-terminal-dark base16-horizon-terminal-dark-colors)

;; Mark the theme as provided
(provide-theme 'base16-horizon-terminal-dark)

(provide 'base16-horizon-terminal-dark-theme)

;;; base16-horizon-terminal-dark-theme.el ends here
