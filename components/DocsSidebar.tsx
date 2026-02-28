"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Hash, BookOpen, Settings, Users, Terminal } from "lucide-react";

interface DocItem {
    metadata: {
        slug: string;
        title: string;
    };
}

export function DocsSidebar({ docs }: { docs: DocItem[] }) {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close sidebar on navigation (mobile)
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scrolling when sidebar is open (mobile)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const categories = [
        {
            title: "Getting Started",
            emoji: "🏁",
            items: docs.filter(d => ["getting-started", "configuration"].includes(d.metadata.slug))
        },
        {
            title: "Core Concepts",
            emoji: "🤖",
            items: docs.filter(d => ["agent-roles"].includes(d.metadata.slug))
        }
    ];

    return (
        <>
            {/* Mobile Toggle Button */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-14 h-14 bg-brand-primary text-white rounded-full shadow-lg shadow-brand-primary/40 flex items-center justify-center transition-all active:scale-95"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Backdrop for mobile */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
                fixed md:sticky top-0 md:top-16 inset-y-0 left-0 z-40
                w-[280px] lg:w-72 bg-[#05050a]/95 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none
                border-r border-white/5 md:border-white/5
                transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                overflow-y-auto max-h-screen md:max-h-[calc(100vh-4rem)]
            `}>
                <div className="p-8 pt-24 md:pt-8 text-slate-300">
                    <div className="mb-10 block md:hidden">
                        <span className="font-black text-xl tracking-tighter text-white">AI Agent Flow</span>
                        <div className="h-1 w-full bg-gradient-to-r from-brand-primary to-transparent mt-2 rounded-full opacity-50" />
                    </div>

                    {categories.map((cat, idx) => (
                        <div key={idx} className="mb-10">
                            <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <span className="text-sm grayscale-[0.5] opacity-70">{cat.emoji}</span>
                                {cat.title}
                            </h3>
                            <nav className="space-y-1">
                                {cat.items.map((doc) => {
                                    const href = `/docs/${doc.metadata.slug}`;
                                    const isActive = pathname === href;

                                    return (
                                        <Link
                                            key={doc.metadata.slug}
                                            href={href}
                                            className={`group flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${isActive
                                                ? "bg-brand-primary/10 text-white shadow-[inset_0_0_20px_rgba(var(--brand-primary),0.05)] border border-brand-primary/20"
                                                : "text-slate-500 hover:text-white hover:bg-white/5"
                                                }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? "rotate-90 text-brand-primary" : "text-slate-700 group-hover:text-slate-500"}`} />
                                                {doc.metadata.title}
                                            </span>
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    ))}

                    <div className="pt-8 border-t border-white/5 mt-auto">
                        <h3 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-4">Resources</h3>
                        <nav className="space-y-1">
                            <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200">
                                <Terminal className="w-4 h-4 text-slate-700" />
                                GitHub Repo
                            </a>
                            <Link href="/blog" className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-500 hover:text-white hover:bg-white/5 transition-all duration-200">
                                <BookOpen className="w-4 h-4 text-slate-700" />
                                Blog
                            </Link>
                        </nav>
                    </div>
                </div>
            </aside>
        </>
    );
}
