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

## Day 5 - Dynamic Blog Routes (2026-06-18)

### Goal

Implement dynamic routes for blog posts using the Next.js App Router.

### Completed

* Added links from the blog list page to individual blog posts.
* Created the dynamic route: `src/app/blog/[slug]/page.tsx`.
* Retrieved route parameters using `params`.
* Used `Array.find()` to locate the corresponding post based on the slug.
* Rendered post details, including title, date, and excerpt.
* Implemented a fallback state for non-existent posts.
* Verified that navigation and rendering worked as expected.

### Issues Encountered

* Initially, I only displayed the `slug` value instead of rendering the actual post data.
* Needed to distinguish between obtaining route parameters and using those parameters to retrieve and display data.
* The `params` typing in newer versions of Next.js differs from many tutorials online, which required additional verification.

### Key Learnings

* Dynamic routes in Next.js are implemented using folder names such as `[slug]`.
* The overall flow can be summarized as:

  `URL → params → find data → render UI`

* `params.slug` acts as the bridge between the URL and application data.
* `Array.find()` provides a simple way to retrieve matching records from a collection.
* Handling invalid routes is an important part of building robust applications.

### Reflection

Before implementing this feature, dynamic routing felt like a relatively advanced concept. After completing it step by step, I realized that the underlying idea is straightforward: extract a parameter from the URL, retrieve the corresponding data, and render the result.

This experience reinforced that building small, complete feedback loops leads to deeper understanding than only reading documentation.

### Next

* Extract the shared `posts` data into a separate module to avoid duplication.
* Explore Next.js `notFound()` as a more idiomatic way to handle missing content.
* Prepare the blog structure for future Markdown-based posts.

## Day 6 - Shared Blog Data and Error Handling (2026-06-19)

### Goal

Improve the blog's code organization by extracting shared post data and adopting more idiomatic Next.js error handling.

### Completed

* Extracted duplicated blog post data into `src/data/posts.ts`.
* Updated both the blog list page and dynamic blog detail page to use the shared data source.
* Added a `content` field to blog posts to better simulate real articles.
* Replaced manual "Post not found" rendering with Next.js `notFound()`.
* Verified that all existing functionality continued to work correctly after the refactor.

### Issues Encountered

* Initially misunderstood how `notFound()` should be used and attempted to return the function itself instead of calling it.
* Needed to distinguish between rendering an error message manually and delegating error handling to the framework.

### Key Learnings

* Duplicated data creates maintenance overhead and increases the risk of inconsistencies.
* Centralizing shared data improves maintainability and prepares the project for future enhancements.
* Next.js provides framework-level conventions such as `notFound()` to handle missing resources more elegantly.
* Refactoring changes the internal structure of the code without necessarily changing visible functionality.

### Reflection

Today's work was less exciting than implementing new features, but it felt closer to real engineering practice. Organizing code, removing duplication, and adopting framework conventions make the project easier to extend and maintain.

I also realized that good software development is not only about adding features. Improving the structure of existing code is equally important.

### Next

* Complete the Week 2 review and evaluate overall progress.
* Review the current blog architecture and identify any remaining improvements.
* Research approaches for integrating Markdown-based posts in Week 3 without rushing into implementation.

## Day 7 - Portfolio and Writing Experience Improvements (2026-07-11)

### Goal

Improve the blog from a basic Next.js practice project into a clearer personal website that supports both professional project showcase and long-term writing.

### Completed

* Redesigned the homepage with a clearer personal introduction and career direction.
* Added current focus areas including Linux, Containers, Kubernetes, CI/CD, Automation, and Platform Engineering.
* Improved the project showcase for Mini Platform and Personal Blog.
* Added clearer navigation to projects, writing, About, and GitHub.
* Changed the main website interface from English to Chinese while keeping technical terms and project names in English.
* Improved the blog list page with article cards, categories, dates, descriptions, and hover states.
* Updated the blog detail page with a consistent layout, category, date, and navigation links.
* Expanded the About page with personal background, current work, technical direction, and the purpose of the website.
* Removed automatic dark mode support for now and fixed the low-contrast text issue.
* Updated the site metadata, HTML language, browser title, description, and favicon.
* Added a one-time typewriter effect to the homepage title.
* Verified the production build and production server using `pnpm build` and `pnpm start`.

### Issues Encountered

* The default automatic dark mode created a dark background while many page elements still used dark text colors.
* The original blog list lacked visual hierarchy and was difficult to scan.
* The blog detail page used a narrower container than the other pages, making the layout feel inconsistent.
* The browser title and favicon still used the default Create Next App values.
* The original English interface did not match the website's intended use as a primarily Chinese writing space.
* The blog's professional showcase purpose initially felt stronger than its long-term personal writing purpose, so the overall positioning needed to be reconsidered.

### Key Learnings

* A portfolio website depends heavily on information hierarchy, not only on the amount of content.
* The homepage should quickly communicate who I am, what I am building, and where visitors can find supporting evidence.
* Professional project presentation and personal writing do not need to be separated into different websites.
* Clear navigation and content structure can allow project documentation, technical writing, reading notes, and personal reflections to coexist.
* The interface language should match the language used for most of the actual writing.
* Technical names such as Kubernetes, FastAPI, GitHub, and Platform Engineering can remain in English within a Chinese interface.
* Dark mode should only be enabled after both themes have been intentionally designed and tested.
* Metadata, favicon, spacing, navigation, and visual consistency all affect whether a project feels ready for public presentation.
* A successful development server is not enough; production build verification is also necessary.

### Reflection

Today's work changed the role of the blog significantly.

It is no longer only a Next.js learning project. It has started to become a personal website that can present my engineering work while also supporting long-term writing and reflection.

I initially focused mainly on its portfolio value, but during the redesign I realized that this website should continue to be useful even after the current job search stage. Technical notes, project records, reading notes, personal reflection, and career growth can all belong to the same long-term space.

The website is still simple, but its purpose and information structure are now much clearer.

### Next

* Replace the current test post data with real content when the article system is ready.
* Research and select an appropriate Markdown or MDX content approach.
* Write the first real project article about Mini Platform.
* Consider adding a shared navigation header when the number of pages increases.
* Prepare the blog for deployment at an appropriate stage.
