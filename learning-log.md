# Learning log

## Day 1 - Project Initialization (2026-06-10)

### Goal

Initialize the blog project and establish a complete development workflow.

### Completed

#### Environment Setup

* Verified Git installation
* Installed Node.js
* Installed pnpm
* Confirmed Next.js development environment works

#### Project Creation

* Created a Next.js project using create-next-app
* Enabled:

  * TypeScript
  * ESLint
  * React Compiler
  * Tailwind CSS
  * App Router
  * Turbopack
  * src directory

#### Project Structure

Created:

```text
content/
└── posts/

docs/

learning-log.md
```

#### Version Control

* Created GitHub repository
* Added README.md
* Completed first commit
* Pushed project to remote repository

### Issues Encountered

#### Problem

Project initialization failed during dependency installation.

```bash
ERR_PNPM_IGNORED_BUILDS

Ignored build scripts:
- sharp
- unrs-resolver
```

#### Solution

Approved the required build scripts.

```bash
pnpm approve-builds
```

Selected:

* sharp
* unrs-resolver

After approval, dependency installation completed successfully.

### Key Learnings

#### pnpm Basics

pnpm is a package manager in the Node.js ecosystem.

Comparable concepts:

| Java        | Node.js      |
| ----------- | ------------ |
| Maven       | pnpm         |
| pom.xml     | package.json |
| mvn install | pnpm install |

Common commands:

```bash
pnpm install
pnpm add <package>
pnpm dev
pnpm build
```

#### Modern Frontend Project Workflow

A project should be initialized in the following order:

```text
Environment Setup
    ↓
Project Creation
    ↓
Git Initialization
    ↓
README & Documentation
    ↓
First Commit
    ↓
Feature Development
```

#### Engineering Is More Than Writing Code

A working software project requires:

* Toolchain setup
* Dependency management
* Version control
* Documentation
* Development workflow

These are part of engineering work and should be established before feature development begins.

### Next

* Understand the Next.js project structure
* Study layout.tsx and page.tsx
* Customize the homepage
* Complete Day 2 tasks

## Day 2 - Understanding Project Structure

### Goal

Understand layout.tsx, page.tsx, globals.css, and Next.js App Router.

### Completed

- Analyzed layout.tsx
- Analyzed page.tsx
- Modified page.tsx to customize homepage
- Observed automatic hot reload
- Verified 404 responses for missing pages

### Issues Encountered

- None, just learning observations

### Key Learnings

- layout.tsx wraps all pages; children inserts page content
- page.tsx determines the displayed content
- globals.css applies global styles
- Tailwind classes are applied via className
- App Router automatically maps folder/file structure to URLs
- Missing page.tsx results in 404
- Hot reload enables real-time updates without restarting server

### Next

- Create /about page
- Create /blog page
- Plan homepage navigation links