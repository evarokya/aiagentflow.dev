import { getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

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
        <div className="min-h-screen bg-slate-950 text-slate-300 py-32 px-6 md:px-12 relative overflow-hidden">
            {/* Dynamic Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <article className="max-w-4xl mx-auto relative z-10">
                <header className="mb-16 text-center">
                    <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium mb-6 uppercase tracking-wider">
                        Comparison Guide
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 tracking-tight leading-tight">
                        {post.metadata.title}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        {post.metadata.description}
                    </p>
                </header>

                <div className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-slate-800
          prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-a:transition-colors
          prose-code:text-cyan-300 prose-code:bg-slate-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#0d1117] prose-pre:border prose-pre:border-slate-800 prose-pre:shadow-2xl prose-pre:shadow-blue-900/20
          prose-strong:text-white prose-strong:font-semibold
          prose-table:border-collapse prose-th:bg-slate-900 prose-th:p-4 prose-th:border prose-th:border-slate-800 prose-td:p-4 prose-td:border prose-td:border-slate-800">
                    <ReactMarkdown>
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* High Converting CTA Box */}
                <div className="mt-24 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full" />

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">Ready to automate your dev workflow?</h3>
                        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                            Don&apos;t spend hours writing boilerplate LangChain agent code. Use our out-of-the-box CLI tool to orchestrate local AI agents today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="/" className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors shadow-lg shadow-blue-500/25 flex items-center justify-center w-full sm:w-auto">
                                Get Started Free
                            </a>
                            <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors border border-slate-700 flex items-center justify-center w-full sm:w-auto">
                                View GitHub Repo
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
