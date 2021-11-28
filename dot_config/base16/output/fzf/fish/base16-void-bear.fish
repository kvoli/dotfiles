# Base16 Void Bear
# Author: kvoli (https://github.com/kvoli)

set -l color00 '#000000'
set -l color01 '#655B53'
set -l color02 '#6F665B'
set -l color03 '#7c8776'
set -l color04 '#776E61'
set -l color05 '#b2c1aa'
set -l color06 '#AA5B2B'
set -l color07 '#b2c1aa'
set -l color08 '#524B46'
set -l color09 '#524B46'
set -l color0A '#6F665B'
set -l color0B '#655B53'
set -l color0C '#887768'
set -l color0D '#776E61'
set -l color0E '#AA5B2B'
set -l color0F '#887768'

set -l FZF_NON_COLOR_OPTS

for arg in (echo $FZF_DEFAULT_OPTS | tr " " "\n")
    if not string match -q -- "--color*" $arg
        set -a FZF_NON_COLOR_OPTS $arg
    end
end

set -Ux FZF_DEFAULT_OPTS "$FZF_NON_COLOR_OPTS"\
" --color=bg+:$color01,bg:$color00,spinner:$color0C,hl:$color0D"\
" --color=fg:$color04,header:$color0D,info:$color0A,pointer:$color0C"\
" --color=marker:$color0C,fg+:$color06,prompt:$color0A,hl+:$color0D"
