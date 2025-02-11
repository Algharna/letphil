# Git Course

## Introduction

Welcome to the Git Course. This course covers Git from the basics to advanced topics like branching, undoing changes, and forking repositories.

### What is Git?

Git is a version control system that helps track changes in code and collaborate with others.

### What is Version Control?

Version control allows developers to manage changes to code over time, enabling collaboration and tracking modifications.

## Terms to Learn

- Repository: A storage space for your project
- Commit: A saved change in the repository
- Branch: A separate line of development
- Merge: Combining changes from different branches
- Push: Uploading local changes to a remote repository

## Git Commands

Below are some essential Git commands:

```sh
# Initialize a new repository
git init

# Clone an existing repository
git clone <repository-url>

# Add changes to staging area
git add .

# Commit changes
git commit -m "Your message"

# Push changes to remote repository
git push origin main
```

## Setting Up GitHub

1. Sign up at [GitHub](https://github.com)
2. Set up a repository
3. Install Git on your local machine

## Using Git Locally

1. Install Git
   - Download from [git-scm.com](https://git-scm.com)
   - Verify installation:
   ```sh
   git --version
   ```
2. Get a code editor (e.g., VS Code)
3. Open VS Code and set up Git

## Cloning Through VS Code

1. Open VS Code
2. Open the terminal and run:
   ```sh
   git clone <repository-url>
   ```

## Committing Changes

1. Add files to the staging area:
   ```sh
   git add .
   ```
2. Commit the changes:
   ```sh
   git commit -m "Your commit message"
   ```

## Pushing Changes

1. Push to GitHub:
   ```sh
   git push origin main
   ```
2. If using SSH keys, set them up:
   ```sh
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
   ```
   Add the generated key to GitHub under Settings > SSH and GPG keys.

## Git Branching

```sh
# Create a new branch
git checkout -b feature-branch

# Switch to the new branch
git checkout feature-branch

# Merge the branch back to main
git checkout main
git merge feature-branch
```

## Undoing in Git

```sh
# Undo last commit but keep changes staged
git reset --soft HEAD~1

# Undo last commit and remove changes
git reset --hard HEAD~1
```

## Forking in Git

1. Go to the repository on GitHub
2. Click **Fork** (creates a copy in your account)
3. Clone your fork locally:
   ```sh
   git clone <your-forked-repo-url>
   ```
4. Sync changes from the original repository:
   ```sh
   git remote add upstream <original-repo-url>
   git fetch upstream
   git merge upstream/main
   ```

## Live Practice: Create Your Own GitHub Repository

Follow these steps to practice your Git skills:

1. **Create a new repository on GitHub**

   - Go to [GitHub](https://github.com) and click **New Repository**
   - Name it **git-practice** and initialize with a README

2. **Clone the repository to your local machine**

   ```sh
   git clone <your-repository-url>
   cd git-practice
   ```

3. **Add a new file and commit the changes**

   ```sh
   echo "# My Git Practice" > practice.md
   git add .
   git commit -m "Added practice.md"
   git push origin main
   ```

4. **Create a new branch**

   ```sh
   git checkout -b new-feature
   git checkout new-feature
   ```

5. **Modify the file and commit in the new branch**

   ```sh
   echo "This is a new feature" >> practice.md
   git add .
   git commit -m "Updated practice.md with new feature"
   git push origin new-feature
   ```

6. **Merge the new branch into main**
   ```sh
   git checkout main
   git merge new-feature
   git push origin main
   ```

Congratulations! You’ve successfully created a GitHub repository, added new code, created a branch, and merged it with main. Keep practicing to master Git!
