import { getPostBySlug, getAllPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Metadata } from "next";
import { TableOfContents } from "@/components/TableOfContents";
import { Link } from "@/i18n/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DocPageProps {
    params: { slug: string; locale: string };
}

export async function generateMetadata({ params }: DocPageProps): Promise<Metadata> {
    const doc = getPostBySlug("docs", params.slug);

    if (!doc) {
        return { title: 'Document Not Found' };
    }

    return {
        title: `${doc.metadata.title} — AI Agent Flow Documentation`,
        description: doc.metadata.description,
        openGraph: {
            title: doc.metadata.title,
            description: doc.metadata.description,
            type: "article",
        },
    };
}

export default function DocPage({ params }: DocPageProps) {
    const doc = getPostBySlug("docs", params.slug);
    const allDocs = getAllPosts("docs");

    if (!doc) {
        notFound();
    }

    // Calculate Next/Prev
    const currentIndex = allDocs.findIndex(d => d.metadata.slug === params.slug);
    const prevDoc = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
    const nextDoc = currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

    // Calculate Reading Time
    const wordsPerMinute = 200;
    const noOfWords = doc.content.split(/\s/g).length;
    const readingTime = Math.ceil(noOfWords / wordsPerMinute);

    return (
        <div className="flex flex-col lg:flex-row w-full max-w-[1400px] mx-auto relative">
            {/* Background Glow for Content */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none opacity-20" />

            {/* Main Content Area */}
            <article className="flex-1 min-w-0 py-8 md:py-12 px-6 md:px-16 lg:px-20 relative z-10">
                <header className="mb-12 pb-8 border-b border-white/5">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="flex items-center gap-2 text-brand-primary text-xs font-bold uppercase tracking-widest">
                            <span className="w-8 h-[1px] bg-brand-primary/30" />
                            Documentation
                        </div>
                        <span className="text-slate-700 font-black text-xs uppercase tracking-widest">•</span>
                        <div className="flex items-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest">
                            {readingTime} min read
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 tracking-tight leading-[1.1] text-balance">
                        {doc.metadata.title}
                    </h1>
                    <p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-3xl font-medium opacity-90">
                        {doc.metadata.description}
                    </p>

                    <div className="mt-10 flex items-center gap-6 text-xs font-bold text-slate-500 uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <span className="text-slate-700">Last updated</span>
                            <span className="text-slate-300">{doc.metadata.date || "Feb 28, 2026"}</span>
                        </div>
                    </div>
                </header>

                <MarkdownRenderer
                    content={doc.content}
                    className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none 
                        prose-h2:font-serif prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:text-white/95 prose-h2:mt-12 prose-h2:mb-6 prose-h2:pt-8 prose-h2:border-t prose-h2:border-white/5
                        prose-h3:font-serif prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-white/90 prose-h3:mt-8 prose-h3:mb-4
                        prose-p:text-slate-400/90 prose-p:leading-relaxed prose-p:mb-6
                        prose-a:text-brand-primary hover:prose-a:text-brand-secondary prose-a:transition-colors prose-a:underline-offset-4
                        prose-code:text-brand-primary prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:border prose-code:border-white/10 prose-code:before:content-none prose-code:after:content-none
                        prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.15)] prose-pre:rounded-2xl
                        prose-strong:text-white prose-strong:font-bold"
                />

                {/* Next/Prev Navigation */}
                <nav className="mt-16 pt-10 border-t border-white/5 flex flex-col sm:flex-row gap-4 justify-between">
                    {prevDoc ? (
                        <Link
                            href={`/docs/${prevDoc.metadata.slug}`}
                            className="group flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all text-left max-w-sm"
                        >
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                Previous
                            </span>
                            <span className="text-white font-bold group-hover:text-brand-primary transition-colors">
                                {prevDoc.metadata.title}
                            </span>
                        </Link>
                    ) : <div />}

                    {nextDoc ? (
                        <Link
                            href={`/docs/${nextDoc.metadata.slug}`}
                            className="group flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-brand-primary/30 transition-all text-right max-w-sm"
                        >
                            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center justify-end gap-2">
                                Next
                                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                            <span className="text-white font-bold group-hover:text-brand-primary transition-colors">
                                {nextDoc.metadata.title}
                            </span>
                        </Link>
                    ) : <div />}
                </nav>
            </article>

            {/* Right Sidebar: Table of Contents */}
            <aside className="hidden xl:block w-72 pt-12 pb-24 px-8 sticky top-0 h-[calc(100vh-4rem)] overflow-y-auto">
                <TableOfContents />
            </aside>
        </div>
    );
}
