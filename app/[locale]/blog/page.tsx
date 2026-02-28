import { getAllPosts } from "@/lib/content";
import Link from "next/link";

export default function BlogIndex() {
    const posts = getAllPosts("blog");

    return (
        <div className="min-h-screen bg-slate-950 text-white py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Blog</h1>
                <p className="text-slate-400 mb-12 text-lg">
                    Insights, updates, and deep dives into the world of multi-agent orchestration.
                </p>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Link
                            key={post.metadata.slug}
                            href={`/blog/${post.metadata.slug}`}
                            className="block group"
                        >
                            <article className="p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 transition-colors duration-300 hover:border-blue-500/50 hover:bg-slate-800/80">
                                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h2 className="text-2xl font-semibold text-slate-100 group-hover:text-blue-400 transition-colors">
                                        {post.metadata.title}
                                    </h2>
                                    <time className="text-sm text-slate-500 md:shrink-0">
                                        {post.metadata.date && new Date(post.metadata.date).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                    </time>
                                </div>
                                <p className="text-slate-400 leading-relaxed">
                                    {post.metadata.description}
                                </p>
                                <div className="mt-6 flex items-center text-blue-500 font-medium text-sm">
                                    Read article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </article>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-slate-500 text-center py-12 bg-slate-900/50 rounded-2xl border border-slate-800 border-dashed">
                            No posts found. Check back soon!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
