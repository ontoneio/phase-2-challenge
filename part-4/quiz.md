1.  When you run a command in the terminal, where does BASH look for that command?
*   BASH refers to the ~/.bashrc file or the $PATH variable as to look through a variable list of directories to execute both built-in commands and user defined commands. In my case these directories are : /usr/local/bin , /usr/bin , /bin , /usr/sbin , /sbin

2.  On a UNIX computer, how do you stop a running process?
*   Use "ps aux" to list running processes. Take note of PID (Process ID) and use command "kill (PID)"

3.  What packages do you have installed via homebrew?
*   coreutils, icu4c, openssl, posgresql, fish, node, pcre2, readline, atom, dash, postgres, slack, spotify.   

4.  On a UNIX computer, how do you find the process id of a running process?
*   "ps aux" command or "pgrep [options] pattern"

5.  In a terminal, what does control-c do?
*   Ctrl-c allows you to exit the current child process by sending a SIGINT signal from the kernel.

6.  In a terminal, what does control-a do?
*   Places cursor at the beginning of the current line.

7.  In a terminal, what does control-e do?
*   Places cursor at the end of the current line.

8.  What keyboard shortcut do you use to split the screen in your editor?
*   'cmd-alt-2': 'pane:split-right'
    'cmd-alt-3': 'pane:split-down'  

9.  What keyboard shortcut do you use to split the screen in your terminal?
*   "Cmd+Shift+p" type 'split' + 'Up', 'Down', 'Left', or 'Right'

10. When a terminal command completes, how can you tell if it was successful or not?
*   It just exits the process and doesn't give you an error message.

11. What does your ~/.gitconfig have in it? (paste the whole file here)
*   [user]
	name = ontoneio
	email = ontoneio.mm@gmail.com
    [core]
	editor = fish
*   Just got a new computer so there isn't anything setup past the basics.


12. What is the difference between a relative and absolute path?
*   Absolute paths give a fully explicit locations on a harddrive that never changes regardless of working directory. A relative path starts from a relative location to the users current working directory.

13. Lets say you have the following file structure

~
└── Projects
    ├── pinterest-for-dogs
    │   ├── README.md
    │   └── package.json
    └── linkedin-for-dancers
        ├── README.md
        └── package.json

And you were in the linkedin-for-dancers folder. What command would you use to change folders to the pinterest-for-dogs folder?
*   cd Projects/pinterest-for-dogs/

14. What keyboard shortcut do you use, in your editor, when you want to open a specific file?
*   "Cmd+O"

15. What files or folders do you want all git repositories to ignore?
*  

*.com
*.class
*.dll
*.exe
*.o
*.so

*.7z
*.dmg
*.gz
*.iso
*.jar
*.rar
*.tar
*.zip

*.log
*.sql
*.sqlite

.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

16. What is the main difference between == and === in JavaScript?
*   === is a strict identity comparison operator meaning that both the objects being compared must have the same type and will not convert the type to do the comparison where == is a type converting operator meaning it converts the two objects to the same type before doing a strict comparison.
