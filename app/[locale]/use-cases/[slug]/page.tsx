import { getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Metadata } from "next";
import { Link } from "@/i18n/navigation";

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

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-brand-bg text-slate-300 py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Premium Dynamic Grid & Glow Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--brand-primary),0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--brand-primary),0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-[20%] w-[60%] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            <article className="max-w-4xl mx-auto relative z-10">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center space-x-2 bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-wider backdrop-blur-sm">
                        Comparison Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary mb-6 tracking-tighter leading-[1.1]">
                        {post.metadata.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400/90 max-w-2xl mx-auto leading-relaxed">
                        {post.metadata.description}
                    </p>
                </header>

                <div className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none 
          prose-h1:font-serif prose-h1:text-4xl md:prose-h1:text-5xl lg:prose-h1:text-6xl prose-h1:text-white prose-h1:tracking-tighter
          prose-h2:font-serif prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:text-white/95 prose-h2:mt-24 prose-h2:mb-10 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/10
          prose-h3:font-serif prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-white/90 prose-h3:mt-16 prose-h3:mb-6
          prose-a:text-brand-secondary hover:prose-a:text-brand-secondary/80 prose-a:transition-colors prose-a:underline-offset-4
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

                {/* High Converting Premium CTA Box */}
                <div className="mt-32 p-8 md:p-16 rounded-[2.5rem] bg-[#09090b]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_-12px_rgba(var(--brand-primary),0.2)] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/15 blur-[100px] rounded-full mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/15 blur-[100px] rounded-full mix-blend-screen" />

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Ready to automate your dev workflow?</h3>
                        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Don&apos;t spend hours writing boilerplate LangChain agent code. Use our out-of-the-box CLI tool to orchestrate local AI agents today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                            <Link href="/" className="px-10 py-4 rounded-full bg-white text-slate-950 hover:bg-slate-200 font-bold transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.6)] flex items-center justify-center w-full sm:w-auto text-lg">
                                Get Started Free
                            </Link>
                            <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noopener noreferrer" className="px-10 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold transition-colors border border-white/10 flex items-center justify-center w-full sm:w-auto backdrop-blur-sm text-lg">
                                View GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
