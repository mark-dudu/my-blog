import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/posts";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 py-16 sm:px-8">
      <article>
        <header>
          <p className="text-sm font-semibold tracking-wide text-zinc-500">
            {post.category}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            {post.title}
          </h1>

          <time
            dateTime={post.date}
            className="mt-4 block text-sm text-zinc-500"
          >
            {post.date}
          </time>
        </header>

        <div className="mt-10 border-t border-zinc-200 pt-8">
          <p className="text-lg leading-8 text-zinc-700">
            {post.description}
          </p>
        </div>

      </article>

      <nav className="mt-16 border-t border-zinc-200 pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/blog"
            className="text-sm font-semibold text-zinc-700 hover:text-zinc-950"
          >
            ← 返回文章列表
          </Link>

          <Link
            href="/"
            className="text-sm font-semibold text-zinc-700 hover:text-zinc-950"
          >
            返回首页
          </Link>
        </div>
      </nav>
    </main>
  );
}