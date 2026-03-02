"use client";

import { useEffect, useState } from "react";

interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function TableOfContents() {
    const [toc, setToc] = useState<TocItem[]>([]);
    const [activeId, setActiveId] = useState<string>("");

    useEffect(() => {
        const headings = Array.from(document.querySelectorAll("h2, h3"))
            .map((heading) => ({
                id: heading.id,
                text: heading.textContent || "",
                level: parseInt(heading.tagName.replace("H", ""))
            }))
            .filter(h => h.id);

        setToc(headings);

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: "0% 0% -80% 0%" }
        );

        document.querySelectorAll("h2, h3").forEach((h) => observer.observe(h));

        return () => observer.disconnect();
    }, []);

    if (toc.length === 0) return null;

    return (
        <nav className="space-y-4">
            <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6">
                On This Page
            </h4>
            <div className="space-y-3">
                {toc.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className={`block text-sm transition-all duration-300 hover:text-slate-900 dark:hover:text-white ${item.level === 3 ? "pl-4" : ""
                            } ${activeId === item.id
                                ? "text-brand-primary font-bold translate-x-1"
                                : "text-slate-500 font-medium"
                            }`}
                    >
                        {item.text}
                    </a>
                ))}
            </div>
        </nav>
    );
}
