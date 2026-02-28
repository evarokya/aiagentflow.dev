import { getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import Link from "next/link";

interface PostPageProps {
    params: { slug: string; locale: string };
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const post = getPostBySlug("blog", params.slug);

    if (!post) {
        return { title: 'Post Not Found' };
    }

    return {
        title: `${post.metadata.title} — AI Agent Flow Blog`,
        description: post.metadata.description,
        keywords: post.metadata.keywords,
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.description,
            type: "article",
            publishedTime: post.metadata.date,
            authors: post.metadata.author ? [post.metadata.author] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: post.metadata.title,
            description: post.metadata.description,
        }
    };
}

export default function BlogPost({ params }: PostPageProps) {
    const post = getPostBySlug("blog", params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-brand-bg text-slate-300 py-24 px-6 md:px-12 relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute top-0 right-[20%] w-[50%] h-[400px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute top-1/4 left-[-10%] w-[40%] h-[500px] bg-brand-secondary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <article className="max-w-3xl mx-auto relative z-10">
                <header className="mb-16">
                    <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-white mb-8 group transition-colors">
                        <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Blog
                    </Link>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 mb-6 tracking-tighter leading-[1.1]">
                        {post.metadata.title}
                    </h1>
                    <div className="flex items-center gap-4 text-slate-400 text-sm font-medium border-l-2 border-brand-secondary pl-4">
                        {post.metadata.author && <span className="text-white">By {post.metadata.author}</span>}
                        {post.metadata.author && post.metadata.date && <span>•</span>}
                        {post.metadata.date && (
                            <time dateTime={post.metadata.date}>
                                {new Date(post.metadata.date).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </time>
                        )}
                    </div>
                </header>

                <div className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/10
          prose-a:text-brand-secondary hover:prose-a:text-brand-secondary/80 prose-a:transition-colors prose-a:underline-offset-4
          prose-code:text-brand-primary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-white/10 prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-[0_0_30px_-5px_rgba(var(--brand-primary),0.15)] prose-pre:rounded-2xl
          prose-strong:text-white prose-strong:font-semibold">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
