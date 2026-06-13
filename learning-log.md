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

## Day 2 - Understanding Project Structure (2026-06-11)

### Goal

Understand layout.tsx, page.tsx, globals.css, and Next.js App Router.

### Completed

* Analyzed layout.tsx
* Analyzed page.tsx
* Modified page.tsx to customize homepage
* Observed automatic hot reload
* Verified 404 responses for missing pages

### Issues Encountered

* None, just learning observations

### Key Learnings

* layout.tsx wraps all pages; children inserts page content
* page.tsx determines the displayed content
* globals.css applies global styles
* Tailwind classes are applied via className
* App Router automatically maps folder/file structure to URLs
* Missing page.tsx results in 404
* Hot reload enables real-time updates without restarting server

### Next

* Create /about page
* Create /blog page
* Plan homepage navigation links

## Day 3 - Static Pages and List Rendering (2026-06-12)

### Goal

* Build the first version of the blog skeleton.
* Learn React list rendering.

### Completed

* Created About page.
* Created Blog page.
* Connected homepage navigation.
* Used map() to render posts.
* Added React key for list items.
* Verified routing works.

### Issues Encountered

* Rendered post.title as plain text instead of JSX expression.

### Key Learnings

* JSX uses {} to evaluate JavaScript expressions.
* React commonly uses map() to generate UI from arrays.
* key helps React identify list items.
* URL maps directly to App Router folder structure.

### Next

* Learn Podman basics.
* Prepare blog containerization.

#### Podman Basics

Verified that Podman was already available on Fedora.

Successfully ran the first container using:

`podman run docker.io/library/hello-world`

Learned that Podman requires explicit image sources when no default registry is configured.

## Day 4 - Containerization Attempt (2026-06-13)

### Goal

* Explore blog containerization using Podman.
* Understand the basic workflow of building and running containers.
* Prepare the blog project for future production deployment.

### Completed

* Verified that Podman was available on Fedora (`podman version 5.8.2`).
* Successfully ran the first container using:

  * `podman run docker.io/library/hello-world`
* Created the first Dockerfile for the blog project.
* Attempted to build the blog image using Podman.
* Modified the Dockerfile to use fully qualified image names.
* Investigated multiple container build and runtime issues related to pnpm and Next.js.
* Preserved the Dockerfile and containerization experiments for future improvement.

### Issues Encountered

* Podman could not resolve short image names such as `node:24-alpine` because no default registry was configured.
* `pnpm install` failed during image build due to ignored build scripts (`sharp` and `unrs-resolver`).
* Running the application inside the container using `pnpm dev` resulted in:

  * `ERR_PNPM_ABORTED_REMOVE_MODULES_DIR_NO_TTY`.
* The blog could not yet be successfully started from a container.

### Key Learnings

* Podman on Fedora may require fully qualified image names, such as:

  * `docker.io/library/node:24-alpine`
* Container environments are isolated and reproducible; they do not inherit local machine state.
* Successfully running an application locally does not guarantee it will work correctly inside a container.
* Containerizing a Next.js application involves additional considerations beyond simply running development commands.
* Reading logs carefully and identifying the true point of failure is an important engineering skill.
* Encountering and analyzing failures is a normal part of software development and often provides more learning value than straightforward success.

### Next

* Revisit blog containerization in Week 2.
* Explore a production-friendly Next.js containerization approach.
* Continue improving the blog after Milestone 1 priorities are completed.
