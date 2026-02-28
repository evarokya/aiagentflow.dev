import { getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

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

    if (!doc) {
        notFound();
    }

    return (
        <div className="py-12 md:py-24 px-6 md:px-12 max-w-4xl">
            <article>
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                        {doc.metadata.title}
                    </h1>
                    <p className="text-slate-400 text-lg">
                        {doc.metadata.description}
                    </p>
                </header>

                <div className="prose prose-invert prose-slate prose-lg max-w-none 
          prose-headings:text-white prose-headings:font-bold prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-b prose-h2:border-white/10
          prose-a:text-brand-secondary hover:prose-a:text-brand-secondary/80 prose-a:transition-colors prose-a:underline-offset-4
          prose-code:text-brand-primary prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:border prose-code:border-white/10 prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-[0_0:30px_-5px_rgba(var(--brand-primary),0.15)] prose-pre:rounded-2xl
          prose-strong:text-white prose-strong:font-semibold">
                    <ReactMarkdown>
                        {doc.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
