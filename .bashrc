echo "Welcome, Commander"

alias rm='rm -i'    # Ask before deleting files
alias cp='cp -i'    # Ask before overwriting files
alias mv='mv -i'    # Ask before overwriting files

alias c='code .'                      # Open current directory
alias code-here='code .'              # More descriptive version

alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
