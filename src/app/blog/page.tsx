const posts = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    date: "2026-06-18",
    excerpt: "My first impressions of App Router.",
  },
  {
    slug: "career-restart-journey",
    title: "Career Restart Journey",
    date: "2026-06-17",
    excerpt: "Why I decided to rebuild my engineering skills.",
  },
  {
    slug: "Test-article-not-exist",
    title: "Test Article Not Exist",
    date: "2026-06-19",
    excerpt: "Hey, what are you waiting for?",
  },
];

import Link from "next/link";

export default function Blog() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        My Blog
      </h1>

      <p>
        Sharing my learning journey.
      </p>

      <ul className="mt-6 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>

            <p>{post.date}</p>

            <p>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}