;; base16-danqing-theme.el -- A base16 colorscheme

;;; Commentary:
;; Base16: (https://github.com/chriskempson/base16)

;;; Authors:
;; Scheme: Wenhan Zhu (Cosmos) (zhuwenhan950913@gmail.com)
;; Template: Kaleb Elwert <belak@coded.io>

;;; Code:

(require 'base16-theme)

(defvar base16-danqing-colors
  '(:base00 "#2d302f"
    :base01 "#434846"
    :base02 "#5a605d"
    :base03 "#9da8a3"
    :base04 "#cad8d2"
    :base05 "#e0f0eF"
    :base06 "#ecf6f2"
    :base07 "#fcfefd"
    :base08 "#F9906F"
    :base09 "#B38A61"
    :base0A "#F0C239"
    :base0B "#8AB361"
    :base0C "#30DFF3"
    :base0D "#B0A4E3"
    :base0E "#CCA4E3"
    :base0F "#CA6924")
  "All colors for Base16 DanQing are defined here.")

;; Define the theme
(deftheme base16-danqing)

;; Add all the faces to the theme
(base16-theme-define 'base16-danqing base16-danqing-colors)

;; Mark the theme as provided
(provide-theme 'base16-danqing)

(provide 'base16-danqing-theme)

;;; base16-danqing-theme.el ends here
