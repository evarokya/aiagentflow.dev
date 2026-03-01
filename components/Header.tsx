"use client";

import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";

export function Header() {
    const t = useTranslations("Header");
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between relative">

                {/* Mobile Menu Toggle (Left) */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="md:hidden p-2 -ml-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Logo Area (Left on Desktop, Centered on Mobile) */}
                <div className="flex items-center gap-8 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                        <Logo className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                        <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white hidden sm:block">
                            AI Agent Flow
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
                        <Link
                            href="/blog"
                            className={`transition-colors ${pathname.startsWith('/blog') ? "text-slate-900 dark:text-white font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
                        >
                            {t("blog")}
                        </Link>
                        {/* <Link href="/docs/getting-started" className="hover:text-slate-900 dark:hover:text-white transition-colors">{t("docs")}</Link> */}
                        <Link
                            href="/use-cases/aiagentflow-vs-langchain"
                            className={`transition-colors ${pathname.startsWith('/use-cases') ? "text-slate-900 dark:text-white font-semibold" : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"}`}
                        >
                            {t("comparisons")}
                        </Link>
                        <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">{t("github")}</a>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                        <kbd className="font-mono text-xs">npm i -g @aiagentflow/cli</kbd>
                    </div>
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden overflow-hidden bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800"
                    >
                        <nav className="flex flex-col px-6 py-6 space-y-6">
                            <Link
                                href="/blog"
                                className={`text-lg font-medium transition-colors ${pathname.startsWith('/blog') ? "text-brand-primary" : "text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary"}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t("blog")}
                            </Link>
                            <Link
                                href="/use-cases/aiagentflow-vs-langchain"
                                className={`text-lg font-medium transition-colors ${pathname.startsWith('/use-cases') ? "text-brand-primary" : "text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary"}`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t("comparisons")}
                            </Link>
                            <a
                                href="https://github.com/aiagentflow/aiagentflow"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-brand-primary transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t("github")}
                            </a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
