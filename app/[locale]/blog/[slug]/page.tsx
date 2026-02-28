import { getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

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
        <div className="min-h-screen bg-slate-950 text-slate-300 py-24 px-6 md:px-12">
            <article className="max-w-3xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                        {post.metadata.title}
                    </h1>
                    <div className="flex items-center gap-4 text-slate-500 text-sm">
                        {post.metadata.author && <span>By {post.metadata.author}</span>}
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

                <div className="prose prose-invert prose-slate prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-code:text-blue-300 prose-code:bg-blue-900/30 prose-code:px-1 prose-code:rounded prose-pre:bg-slate-900 prose-pre:border prose-pre:border-slate-800">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
