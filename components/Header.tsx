"use client";

import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useTranslations } from "next-intl";

export function Header() {
    const t = useTranslations("Header");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${scrolled
                ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm"
                : "bg-transparent border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden sm:block">
                            AI Agent Flow
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <Link href="/blog" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t("blog")}</Link>
                        {/* <Link href="/docs/getting-started" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t("docs")}</Link> */}
                        <Link href="/use-cases/aiagentflow-vs-langchain" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t("comparisons")}</Link>
                        <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t("github")}</a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                        <kbd className="font-mono text-xs">npm i -g @aiagentflow/cli</kbd>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </motion.header>
    );
}
