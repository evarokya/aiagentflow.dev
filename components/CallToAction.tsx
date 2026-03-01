import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface CallToActionProps {
    headlinePrefix?: string;
    headlineGradient: string;
    description: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export function CallToAction({
    headlinePrefix = "Ready to build ",
    headlineGradient,
    description,
    primaryButtonText = "Start Building",
    primaryButtonHref = "/",
    secondaryButtonText = "View on GitHub",
    secondaryButtonHref = "https://github.com/aiagentflow/aiagentflow"
}: CallToActionProps) {
    return (
        <div className="mt-24 pt-24 border-t border-slate-200 dark:border-white/5 relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-32 bg-brand-primary/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-tertiary/20 to-transparent" />

            <div className="text-center relative z-10 space-y-8">
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                    <span className="text-slate-900 dark:text-white">{headlinePrefix}</span>
                    <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-blue-500 to-brand-tertiary">
                        {headlineGradient}
                    </span>
                </h3>

                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href={primaryButtonHref}
                        className="group relative px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-950 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(var(--brand-primary),0.5)] flex items-center justify-center w-full sm:w-auto"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/20 to-brand-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative flex items-center gap-2">
                            {primaryButtonText}
                            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>

                    <a
                        href={secondaryButtonHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-all flex items-center gap-2 justify-center w-full sm:w-auto border border-slate-200 dark:border-white/10"
                    >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        {secondaryButtonText}
                    </a>
                </div>
            </div>
        </div>
    );
}
