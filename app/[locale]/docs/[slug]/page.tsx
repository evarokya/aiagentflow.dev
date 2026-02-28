import { getPostBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
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
        <div className="py-16 md:py-24 px-6 md:px-16 lg:px-24">
            <article className="max-w-4xl">
                <header className="mb-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-tight leading-[1.1]">
                        {doc.metadata.title}
                    </h1>
                    <p className="text-slate-400 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium opacity-90">
                        {doc.metadata.description}
                    </p>
                </header>

                <div className="prose prose-invert prose-slate prose-lg md:prose-xl max-w-none 
          prose-h2:font-serif prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:text-white/95 prose-h2:mt-24 prose-h2:mb-8 prose-h2:pt-10 prose-h2:border-t prose-h2:border-white/5
          prose-h3:font-serif prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-white/90 prose-h3:mt-16 prose-h3:mb-6
          prose-p:text-slate-400/90 prose-p:leading-relaxed prose-p:mb-8
          prose-a:text-brand-primary hover:prose-a:text-brand-secondary prose-a:transition-colors prose-a:underline-offset-4
          prose-code:text-brand-primary prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:border prose-code:border-white/10 prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.15)] prose-pre:rounded-2xl
          prose-strong:text-white prose-strong:font-bold">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                    >
                        {doc.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}
