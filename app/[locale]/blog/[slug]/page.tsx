import { getPostBySlug, getAllPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { TableOfContents } from "@/components/TableOfContents";
import Image from "next/image";
import { Clock, ChevronLeft, ChevronRight, Twitter, Facebook, Copy } from "lucide-react";

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
            images: post.metadata.image ? [{ url: post.metadata.image }] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: post.metadata.title,
            description: post.metadata.description,
            images: post.metadata.image ? [post.metadata.image] : undefined,
        }
    };
}

export default function BlogPost({ params }: PostPageProps) {
    const post = getPostBySlug("blog", params.slug);
    const allPosts = getAllPosts("blog");

    if (!post) {
        notFound();
    }

    // Calculate Reading Time
    const readingTime = Math.ceil(post.content.split(/\s/g).length / 200);

    // Calculate Next/Prev
    const currentIndex = allPosts.findIndex(p => p.metadata.slug === params.slug);
    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-brand-bg relative transition-colors duration-500">
            {/* Massive Hero Section */}
            <div className="relative h-[60vh] md:h-[70vh] min-h-[500px] w-full overflow-hidden">
                <Image
                    src={post.metadata.image || "/blog-placeholder.jpg"}
                    alt={post.metadata.title}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/60 to-transparent" />

                <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 px-6">
                    <div className="max-w-4xl w-full text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-primary text-white text-xs font-black uppercase tracking-[0.2em] mb-8 shadow-2xl">
                            {post.metadata.category || "Engineering"}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 tracking-tighter leading-[1.05] text-balance drop-shadow-2xl">
                            {post.metadata.title}
                        </h1>
                        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-300 font-bold text-sm uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <span className="text-slate-500">By</span>
                                <span>{post.metadata.author || "AI Agent Flow Team"}</span>
                            </div>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                            <time dateTime={post.metadata.date}>
                                {new Date(post.metadata.date!).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric"
                                })}
                            </time>
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-brand-primary" />
                                {readingTime} min read
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
                {/* Main Content Area */}
                <div className="flex-1 min-w-0 py-16 md:py-32 px-6 md:px-16 lg:px-24">
                    <article className="min-w-0 w-full overflow-hidden">
                        <div className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none min-w-0 break-words
                            prose-h2:font-serif prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:text-white prose-h2:mt-24 prose-h2:mb-10 prose-h2:pb-6 prose-h2:border-b prose-h2:border-white/5
                            prose-h3:font-serif prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-white/90 prose-h3:mt-16 prose-h3:mb-6
                            prose-p:text-slate-600 dark:text-slate-400 prose-p:leading-[1.8] prose-p:mb-10
                            prose-strong:text-slate-900 dark:text-white prose-strong:font-black
                            prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-2xl prose-pre:rounded-[2rem] prose-pre:overflow-x-auto prose-pre:max-w-[100vw]">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Social Share & Backlinks */}
                        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-8">
                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-xs font-black text-slate-500 uppercase tracking-widest mr-2">Share this insight:</span>
                                <button className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-brand-primary transition-colors">
                                    <Copy className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex gap-4">
                                {post.metadata.keywords?.slice(0, 3).map(kw => (
                                    <span key={kw} className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-[10px] font-black uppercase tracking-widest">
                                        #{kw.replace(/\s+/g, '')}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Next/Prev Navigation */}
                        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prevPost ? (
                                <Link
                                    href={`/blog/${prevPost.metadata.slug}`}
                                    className="group flex flex-col gap-3 p-6 sm:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-primary/30 transition-all text-left min-w-0 overflow-hidden"
                                >
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" />
                                        Previous Insight
                                    </span>
                                    <span className="text-slate-900 dark:text-white font-serif text-2xl group-hover:text-brand-primary transition-colors">
                                        {prevPost.metadata.title}
                                    </span>
                                </Link>
                            ) : <div />}

                            {nextPost ? (
                                <Link
                                    href={`/blog/${nextPost.metadata.slug}`}
                                    className="group flex flex-col gap-3 p-6 sm:p-10 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-brand-primary/30 transition-all text-right min-w-0 overflow-hidden"
                                >
                                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center justify-end gap-2">
                                        Next Insight
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                                    </span>
                                    <span className="text-slate-900 dark:text-white font-serif text-2xl group-hover:text-brand-primary transition-colors">
                                        {nextPost.metadata.title}
                                    </span>
                                </Link>
                            ) : <div />}
                        </div>

                        {/* Conversion CTA */}
                        <div className="mt-24 p-12 md:p-20 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-brand-secondary/20 opacity-50" />
                            <div className="relative z-10 text-center">
                                <h3 className="text-3xl md:text-5xl font-serif mb-8 tracking-tight">Build your local AI team today.</h3>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                                    <Link href="/" className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-white text-slate-950 font-black text-lg sm:text-xl hover:scale-105 transition-all shadow-2xl">
                                        Get Started Free
                                    </Link>
                                    <a href="https://github.com/aiagentflow/aiagentflow" className="w-full sm:w-auto px-6 sm:px-10 py-4 sm:py-5 rounded-full bg-white/10 font-bold border border-white/20 hover:bg-white/20 transition-all text-base sm:text-lg">
                                        Star on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Right Sidebar: Table of Contents */}
                <div className="hidden xl:block w-80 py-32 px-8 sticky top-0 h-screen overflow-y-auto">
                    <TableOfContents />
                </div>
            </div>
        </div>
    );
}
