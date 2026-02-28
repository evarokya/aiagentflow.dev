import { getAllPosts } from "@/lib/content";
import { Link } from "@/i18n/navigation";

export default function BlogIndex() {
    const posts = getAllPosts("blog");

    return (
        <div className="min-h-screen bg-brand-bg text-white py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[50%] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-[40%] h-[400px] bg-brand-secondary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Blog</h1>
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
                            <article className="p-6 md:p-8 rounded-[2rem] bg-[#09090b]/80 backdrop-blur-md border border-white/5 transition-all duration-300 hover:border-brand-primary/30 hover:bg-[#121216] relative overflow-hidden shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.15)]">
                                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-transparent to-brand-secondary/0 group-hover:from-brand-primary/5 group-hover:to-brand-secondary/5 transition-colors duration-500" />

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                    <h2 className="text-2xl font-bold text-slate-100 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-primary group-hover:to-brand-secondary transition-colors">
                                        {post.metadata.title}
                                    </h2>
                                    <time className="text-sm text-slate-500 md:shrink-0 font-medium">
                                        {post.metadata.date && new Date(post.metadata.date).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                    </time>
                                </div>
                                <p className="relative z-10 text-slate-400 leading-relaxed">
                                    {post.metadata.description}
                                </p>
                                <div className="relative z-10 mt-6 flex items-center text-brand-primary font-semibold text-sm">
                                    Read article <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </article>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <div className="text-slate-500 text-center py-12 bg-white/5 rounded-2xl border border-white/10 border-dashed">
                            No posts found. Check back soon!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
