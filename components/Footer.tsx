import Link from "next/link";
import { Logo } from "./Logo";
import { VisitorCounter } from "./VisitorCounter";

export function Footer() {
    return (
        <footer className="bg-slate-50 dark:bg-[#020617] border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group inline-flex">
                            <Logo className="w-6 h-6 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                            <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white">
                                AI Agent Flow
                            </span>
                        </Link>
                        <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-sm">
                            The open-source multi-agent orchestration framework for software engineering. Built by developers, for developers.
                        </p>
                        <div className="flex items-center gap-4">
                            {/* Social Icons Placeholder */}
                            <a href="https://github.com/aiagentflow/aiagentflow" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/blog" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Blog</Link></li>
                            <li><Link href="/use-cases/ai-agent-flow-vs-langchain" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Alternatives</Link></li>
                            <li><a href="https://github.com/aiagentflow/aiagentflow/tree/main/docs" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Documentation</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</Link></li>
                            <li><a href="https://opensource.org/licenses/MIT" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">License (MIT)</a></li>
                        </ul>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        &copy; {new Date().getFullYear()} AI Agent Flow Contributors. All rights reserved.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                        <VisitorCounter />
                        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            All systems operational
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
