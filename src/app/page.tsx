export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Mark's Blog
      </h1>
      <p className="text-lg mt-4">
        Technology, Learning and Thoughts
      </p>

      <nav className="mt-8 gap-6 flex">
        <a href="/about" className="text-2xl italic">
        [About]
        </a>
        <a href="/blog" className="text-2xl underline">
        [Blog]
        </a>
      </nav>
    </main>
  );
}