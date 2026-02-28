"use client";

import { useState, useMemo } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Post } from "@/lib/content";

interface BlogGridProps {
    allPosts: Post[];
}

export function BlogGrid({ allPosts }: BlogGridProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => {
        const cats = new Set(allPosts.map(p => p.metadata.category).filter(Boolean));
        return ["All", ...Array.from(cats)];
    }, [allPosts]);

    const filteredPosts = useMemo(() => {
        return allPosts.filter(post => {
            const matchesSearch = post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.metadata.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = activeCategory === "All" || post.metadata.category === activeCategory;
            return matchesSearch && matchesCategory;
        });
    }, [allPosts, searchQuery, activeCategory]);

    return (
        <div className="max-w-[1400px] mx-auto relative z-10 font-sans">
            <header className="text-center mb-20">
                <h1 className="text-5xl md:text-7xl font-serif text-slate-900 dark:text-white mb-6 tracking-tight">
                    Insights & Engineering
                </h1>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-xl font-medium mb-12">
                    Deep dives into multi-agent orchestration, local AI, and the future of software automation.
                </p>

                {/* Search & Filter UI */}
                <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
                    <div className="relative w-full group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-brand-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-16 pr-8 py-5 rounded-[2rem] bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 outline-none transition-all text-lg backdrop-blur-xl text-slate-900 dark:text-white placeholder:text-slate-400 font-sans"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat!)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 scale-105"
                                    : "bg-slate-200/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredPosts.map((post) => {
                    const readingTime = Math.ceil(post.content.split(/\s/g).length / 200);

                    return (
                        <Link
                            key={post.metadata.slug}
                            href={`/blog/${post.metadata.slug}`}
                            className="group flex flex-col h-full"
                        >
                            <article className="flex flex-col h-full rounded-[2.5rem] bg-white dark:bg-[#09090b]/80 border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-500 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 group-hover:-translate-y-2 relative">
                                {/* Image Placeholder/Visual */}
                                <div className="aspect-[16/10] bg-slate-100 dark:bg-white/5 relative overflow-hidden">
                                    {post.metadata.image ? (
                                        <Image
                                            src={post.metadata.image}
                                            alt={post.metadata.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 opacity-30">
                                            <span className="text-brand-primary font-black uppercase tracking-tighter text-4xl">AI Flow</span>
                                        </div>
                                    )}
                                    <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-brand-primary/90 text-white text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-xl">
                                        {post.metadata.category || "Engineering"}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-3 text-slate-500 dark:text-slate-500 text-[11px] font-black uppercase tracking-widest mb-4">
                                        {post.metadata.date && new Date(post.metadata.date).toLocaleDateString("en-US", {
                                            month: "short",
                                            day: "numeric",
                                            year: "numeric"
                                        })}
                                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-800" />
                                        <div className="flex items-center gap-1.5 font-sans">
                                            <Clock className="w-3.5 h-3.5" />
                                            {readingTime} min read
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary transition-colors mb-4 leading-tight">
                                        {post.metadata.title}
                                    </h2>

                                    <p className="text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-8 flex-1 font-sans">
                                        {post.metadata.description}
                                    </p>

                                    <div className="flex items-center text-brand-primary font-black text-xs uppercase tracking-widest group/btn font-sans">
                                        Read More
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    );
                })}

                {filteredPosts.length === 0 && (
                    <div className="col-span-full text-slate-500 text-center py-24 bg-slate-50 dark:bg-white/5 rounded-[3rem] border border-dashed border-slate-200 dark:border-white/10 font-sans">
                        <p className="text-xl font-medium">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                            className="mt-6 text-brand-primary font-bold hover:underline"
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
