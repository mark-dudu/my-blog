import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16 sm:px-8">
      <header className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          Notes · Essays · Reflections
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          写作
        </h1>

        <p className="mt-5 text-lg leading-8 text-zinc-600">
          这里收录技术笔记、项目记录、读书笔记、个人反思，以及关于职业与长期成长的思考。
        </p>
      </header>

      <section className="mt-14">
        <div className="space-y-5">
          {posts.map((post) => (
            <article key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block rounded-xl border border-zinc-200 p-6 transition hover:border-zinc-400 hover:bg-zinc-50"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-2xl">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                      {post.category}
                    </p>

                    <h2 className="text-xl font-semibold tracking-tight text-zinc-900 transition group-hover:text-zinc-600">
                      {post.title}
                    </h2>

                    <p className="mt-3 leading-7 text-zinc-600">
                      {post.description}
                    </p>
                  </div>

                  <time
                    dateTime={post.date}
                    className="shrink-0 text-sm text-zinc-500"
                  >
                    {post.date}
                  </time>
                </div>

                <div className="mt-5 text-sm font-semibold text-zinc-900">
                  阅读全文
                  <span
                    aria-hidden="true"
                    className="ml-1 inline-block transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <nav className="mt-14 border-t border-zinc-200 pt-8">
        <Link
          href="/"
          className="text-sm font-semibold text-zinc-700 hover:text-zinc-950"
        >
          ← 返回首页
        </Link>
      </nav>
    </main>
  );
}