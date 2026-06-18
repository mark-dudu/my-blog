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
];

export default async function BlogPost({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = posts.find(
        (post) => post.slug === slug
    );

    if (!post) {
        return (
            <div>Post not found.</div>
        )
    } else {

        return (
            <main className="p-8">
                <h1 className="text-4xl font-bold">
                    {post.title}
                </h1>

                <p className="mt-2 text-gray-500">
                    {post.date}
                </p>

                <p className="mt-6">
                    {post.excerpt}
                </p>
            </main>
        );
    }

}