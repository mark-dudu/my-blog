export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Mark's Blog
      </h1>
      <p className="text-lg mt-4">
        A personal blog for technical learning, project progress, and long-term personal reflection.

        This site is also used as a portfolio entry to document my transition back into software development.
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