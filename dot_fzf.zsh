# Setup fzf
# ---------
if [[ ! "$PATH" == */home/kvoli/.fzf/bin* ]]; then
  export PATH="${PATH:+${PATH}:}/home/kvoli/.fzf/bin"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/home/kvoli/.fzf/shell/completion.zsh" 2> /dev/null

# Key bindings
# ------------
source "/home/kvoli/.fzf/shell/key-bindings.zsh"
