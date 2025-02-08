git init: to initialize a repo and let git track changes made to project
git log: log all changes made to repo
git log --oneline : changes git log to oneline format
git log -S "keyword" : log specific keywords in changes made
git log --oneline --graph - --graph : shows a graphical view of changes made.
git clone: brings repository to your pc
git clone
git checkout -b : create and new branch and switch to the branch
git checkout -b newBranchName
git checkout HEAD filename - used to remove file/files from staging area and return to working directory.
git add: moves files from working directory to staging area to be checked before sending to repo
git add . : adds all files into repository
git rm: remove files from git !!BE CAREFUL!!
git rm --cached <file> : removes files from staging area  
git status : Untracked files and file changes staged for commit
git diff: check differences in file you're committing to
a plus will show up next to changes in file
git commit : permanently moves changes from the staging area inside the repository - last step in git workflow
!! important !! got commit -m: commits and adds message with commit - must be in quotes, written in paste tense, should be less that 50 chars.
git commit --amend : used to amend files already in staging area without having to make a new commit.
git commit --amend --no-edit : when you want to amend a change but not change the commit message
git push: pushes into repository
git push -- set-upstream origin fileName
Pull requests on github??
can probably do it in term too - git pull ...
git stash - used to save work locally without pushing to staging or commit
git stash pop - used to recover stashed file separate from main branch.
