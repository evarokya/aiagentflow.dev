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
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PseoPageProps {
    params: { slug: string; locale: string };
}

export async function generateMetadata({ params }: PseoPageProps): Promise<Metadata> {
    const post = getPostBySlug("pseo", params.slug);

    if (!post) {
        return { title: 'Not Found' };
    }

    return {
        title: `${post.metadata.title} — AI Agent Flow`,
        description: post.metadata.description,
        keywords: post.metadata.keywords,
        openGraph: {
            title: post.metadata.title,
            description: post.metadata.description,
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title: post.metadata.title,
            description: post.metadata.description,
        }
    };
}

export default function PseoPage({ params }: PseoPageProps) {
    const post = getPostBySlug("pseo", params.slug);
    const allPosts = getAllPosts("pseo");

    if (!post) {
        notFound();
    }

    // Calculate Next/Prev
    const currentIndex = allPosts.findIndex(p => p.metadata.slug === params.slug);
    const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
    const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-brand-bg relative overflow-hidden">
            {/* Premium Dynamic Grid & Glow Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--brand-primary),0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--brand-primary),0.05)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-[-10%] w-[40%] h-[600px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none opactiy-30" />

            <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto relative z-10">
                {/* Main Content Area */}
                <div className="flex-1 min-w-0 py-16 md:py-32 px-6 md:px-16 lg:px-20">
                    <article>
                        <header className="mb-20 pb-12 border-b border-white/5">
                            <div className="inline-flex items-center space-x-2 bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-semibold mb-8 uppercase tracking-wider backdrop-blur-sm">
                                Comparison Guide
                            </div>
                            <h1 className="text-4xl md:text-7xl font-serif text-white mb-8 tracking-tight leading-[1.05] text-balance">
                                {post.metadata.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
                                {post.metadata.description}
                            </p>
                        </header>

                        <div className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none 
                            prose-h1:font-serif prose-h1:text-4xl md:prose-h1:text-5xl lg:prose-h1:text-6xl prose-h1:text-white prose-h1:tracking-tighter
                            prose-h2:font-serif prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:text-white/95 prose-h2:mt-24 prose-h2:mb-10 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
                            prose-h3:font-serif prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-white/90 prose-h3:mt-16 prose-h3:mb-6
                            prose-a:text-brand-primary hover:prose-a:text-brand-secondary prose-a:transition-colors prose-a:underline-offset-4
                            prose-code:text-brand-primary prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:border prose-code:border-white/10 prose-code:before:content-none prose-code:after:content-none
                            prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.15)] prose-pre:rounded-2xl
                            prose-strong:text-white prose-strong:font-bold
                            prose-table:border-collapse prose-th:bg-white/5 prose-th:p-5 prose-th:border prose-th:border-white/10 prose-th:font-black prose-th:text-white prose-td:p-5 prose-td:border prose-td:border-white/10">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                            >
                                {post.content}
                            </ReactMarkdown>
                        </div>

                        {/* Next/Prev Navigation */}
                        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between">
                            {prevPost ? (
                                <Link
                                    href={`/use-cases/${prevPost.metadata.slug}`}
                                    className="group flex flex-col gap-2 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all text-left max-w-sm"
                                >
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                        <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                        Previous Comparison
                                    </span>
                                    <span className="text-white font-bold group-hover:text-brand-primary transition-colors text-lg">
                                        {prevPost.metadata.title}
                                    </span>
                                </Link>
                            ) : <div />}

                            {nextPost ? (
                                <Link
                                    href={`/use-cases/${nextPost.metadata.slug}`}
                                    className="group flex flex-col gap-2 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all text-right max-w-sm"
                                >
                                    <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center justify-end gap-2">
                                        Next Comparison
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </span>
                                    <span className="text-white font-bold group-hover:text-brand-primary transition-colors text-lg">
                                        {nextPost.metadata.title}
                                    </span>
                                </Link>
                            ) : <div />}
                        </div>

                        {/* High Converting Premium CTA Box */}
                        <div className="mt-24 pt-24 border-t border-white/5 relative">
                            {/* Decorative Background Elements */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-32 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-primary/20 to-transparent" />

                            <div className="text-center relative z-10 space-y-8">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                                    <span className="text-white">Ready to build </span>
                                    <br className="hidden md:block" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-emerald-400 to-brand-tertiary">
                                        better software?
                                    </span>
                                </h3>

                                <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
                                    Stop wrestling with abstraction layers. Use our opinionated, high-performance CLI to orchestrate your local AI engineering team.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                    <Link
                                        href="/"
                                        className="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.5)] flex items-center justify-center w-full sm:w-auto"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <span className="relative flex items-center gap-2">
                                            Start Building
                                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </Link>

                                    <a
                                        href="https://github.com/aiagentflow/aiagentflow"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-medium transition-all flex items-center gap-2 justify-center w-full sm:w-auto border border-white/10"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                        View on GitHub
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
