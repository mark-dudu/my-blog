import { posts } from "@/data/posts";
import { notFound } from "next/navigation";

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
        notFound()
    }

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