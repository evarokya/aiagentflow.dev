"use client";

import { Link, usePathname } from "@/i18n/navigation";

interface DocItem {
    metadata: {
        slug: string;
        title: string;
    };
}

export function DocsSidebar({ docs }: { docs: DocItem[] }) {
    const pathname = usePathname();

    return (
        <aside className="w-full md:w-64 lg:w-72 border-r border-white/5 bg-brand-bg/50 backdrop-blur-xl z-20 flex-shrink-0">
            <div className="sticky top-16 p-8 overflow-y-auto max-h-[calc(100vh-4rem)] text-slate-300">
                <div className="mb-8">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Documentation</h3>
                    <nav className="space-y-1">
                        {docs.map((doc) => {
                            const href = `/docs/${doc.metadata.slug}`;
                            const isActive = pathname === href;

                            return (
                                <Link
                                    key={doc.metadata.slug}
                                    href={href}
                                    className={`block px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${isActive
                                        ? "bg-brand-primary/10 text-white border border-brand-primary/20 shadow-[0_0_20px_-5px_rgba(var(--brand-primary),0.2)]"
                                        : "text-slate-400 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    {doc.metadata.title}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                <div className="pt-8 border-t border-white/5">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Resources</h3>
                    <nav className="space-y-1">
                        <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200">
                            GitHub Repository
                        </a>
                        <Link href="/blog" className="block px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200">
                            Blog
                        </Link>
                    </nav>
                </div>
            </div>
        </aside>
    );
}
