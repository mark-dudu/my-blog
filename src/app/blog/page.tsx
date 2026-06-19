import Link from "next/link";
import {posts} from "@/data/posts"

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