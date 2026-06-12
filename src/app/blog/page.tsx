const posts = [
  {
    title: "Day 1 - Project Initialization",
    slug: "day-1-project-initialization",
  },
  {
    title: "Day 2 - Understanding Project Structure",
    slug: "day-2-understanding-project-structure",
  },
];

export default function Blog() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold">
        Posts
      </h1>

      <ul className="mt-6 space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            {post.title}
          </li>
        ))}
      </ul>
    </main>
  );
}