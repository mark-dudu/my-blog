export default function Home() {
  return (
    <main className="p-8 max-w-3xl">
      <h1 className="text-2xl font-bold">Mark's Blog</h1>

      <div className="mt-4 space-y-4 text-lg">
        <p>
          A personal blog for technical learning, project progress, and
          long-term personal reflection.
        </p>

        <p>
          This site is also used as a portfolio entry to document my transition
          back into software development.
        </p>
      </div>

      <nav className="mt-8 flex gap-6">
        <a href="/about" className="text-2xl italic">
          [About]
        </a>
        <a href="/blog" className="text-2xl underline">
          [Blog]
        </a>
      </nav>

      <section className="mt-12">
        <h2 className="text-xl font-bold">Projects</h2>

        <div className="mt-4 space-y-8">
          <article>
            <h3 className="text-lg font-semibold">Mini Platform</h3>

            <p className="mt-2">
              A lightweight local development service manager built with
              Python, FastAPI, Jinja2, and YAML.
            </p>

            <p className="mt-2">
              The V1 version supports YAML-based service definitions, a
              services API, a simple dashboard, and mock start/stop actions
              without executing real system commands.
            </p>

            <p className="mt-2">
              This project is part of my Platform Engineer / DevOps learning
              path. It starts from local service management and is designed to
              evolve toward container and Kubernetes-related workflows.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold">Personal Blog</h3>

            <p className="mt-2">
              A personal writing and portfolio site built with Next.js.
            </p>

            <p className="mt-2">
              It is used to document technical learning, project progress,
              career transition notes, and long-term personal reflections.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}