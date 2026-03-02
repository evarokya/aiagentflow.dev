import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Image from "next/image";
import { CodeBlock } from "./CodeBlock";

interface MarkdownRendererProps {
    content: string;
    className?: string; // Opt-in to override prose styles
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
    const defaultClasses = "prose prose-invert prose-slate prose-lg md:prose-xl max-w-none min-w-0 break-words prose-h2:font-serif prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:text-white prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-4 prose-h2:border-b prose-h2:border-white/5 prose-h3:font-serif prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-white/90 prose-h3:mt-8 prose-h3:mb-4 prose-p:text-slate-600 dark:text-slate-400 prose-p:leading-[1.8] prose-p:mb-6 prose-strong:text-slate-900 dark:text-white prose-strong:font-black prose-pre:bg-[#09090b] prose-pre:border prose-pre:border-white/10 prose-pre:shadow-2xl prose-pre:rounded-[2rem] prose-pre:overflow-x-auto prose-pre:max-w-[100vw]";

    return (
        <div className={className || defaultClasses}>
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
                components={{
                    img: (props) => {
                        const { src, alt, ...rest } = props;

                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        const { width, height, ...cleanRest } = rest;

                        // If it's an external image or doesn't have a source, fall back to standard img
                        if (!src || src.startsWith('http')) {
                            // eslint-disable-next-line @next/next/no-img-element
                            return <img src={src} alt={alt} {...cleanRest} className="rounded-2xl" />;
                        }

                        // Use next/image for local assets to get automatic WebP conversion and sized optimization
                        return (
                            <Image
                                src={src}
                                alt={alt || "Markdown Image"}
                                width={800} // Default wrapper width
                                height={450} // Default wrapper height
                                className="rounded-2xl object-cover w-full h-auto"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                            />
                        );
                    },
                    pre: (props) => <CodeBlock {...props} />
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}
