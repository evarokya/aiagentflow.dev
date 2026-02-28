"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

type TabType = "react" | "python" | "cli";
type ScenarioType = "feature" | "bug" | "refactor";

export function InteractiveDemo() {
    const t = useTranslations("Demo");
    const [activeTab, setActiveTab] = useState<TabType>("react");
    const [activeScenario, setActiveScenario] = useState<ScenarioType>("feature");

    const scenarios: ScenarioType[] = ["feature", "bug", "refactor"];

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-brand-bg transition-colors duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand-primary/5 dark:bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center space-x-2 bg-brand-tertiary/10 border border-brand-tertiary/20 text-brand-tertiary px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide"
                        >
                            {t("badge")}
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-tight"
                        >
                            {t("headlinePrefix")}<br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-tertiary">
                                {t("headlineSuffix")}
                            </span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
                        >
                            {t("description")}
                        </motion.p>

                        {/* Scenario Picker */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="space-y-4 mb-10"
                        >
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest">{t("badge")}</h4>
                            <div className="flex flex-wrap gap-3">
                                {scenarios.map((scenario) => (
                                    <button
                                        key={scenario}
                                        onClick={() => setActiveScenario(scenario)}
                                        className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 border ${activeScenario === scenario
                                            ? "bg-brand-primary text-white border-brand-primary shadow-lg shadow-brand-primary/25 scale-105"
                                            : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border-transparent hover:border-slate-300 dark:hover:border-white/10"
                                            }`}
                                    >
                                        {t(`scenarios.${scenario}.label`)}
                                    </button>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="/docs/getting-started" className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-center transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(var(--brand-primary),0.5)]">
                                {t("readDocs")}
                            </a>
                        </motion.div>
                    </div>

                    {/* Interactive Code Window */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden bg-[#09090b] border border-slate-800/80 shadow-[0_0_80px_-20px_rgba(var(--brand-primary),0.4)]">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#121216] border-b border-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
                                </div>
                                <div className="flex space-x-1 bg-[#09090b] rounded-lg p-1 border border-white/5">
                                    {(["react", "python", "cli"] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeTab === tab ? "bg-white/10 text-white shadow-sm" : "text-slate-500 hover:text-slate-300 hover:bg-white/5"}`}
                                        >
                                            {tab === "react" ? "React/TS" : tab === "python" ? "Python" : "CLI"}
                                        </button>
                                    ))}
                                </div>
                                <div className="w-12"></div> {/* Spacer for symmetry */}
                            </div>

                            {/* Code Content */}
                            <div className="p-8 min-h-[320px] relative overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={`${activeScenario}-${activeTab}`}
                                        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        exit={{ opacity: 0, filter: "blur(10px)", y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="font-mono text-sm leading-relaxed"
                                    >
                                        {/* User Request Preview */}
                                        <div className="mb-6 pb-6 border-b border-white/5">
                                            <div className="flex items-center gap-2 mb-2 text-slate-500 text-xs uppercase tracking-widest font-bold">
                                                <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                                                User Intent
                                            </div>
                                            <p className="text-white font-medium italic">&quot;{t(`scenarios.${activeScenario}.request`)}&quot;</p>
                                        </div>

                                        {/* Output Preview */}
                                        <div className="text-slate-300 whitespace-pre">
                                            {activeTab === "cli" ? (
                                                <div className="flex gap-3">
                                                    <span className="text-slate-600 select-none">$</span>
                                                    <span>{t(`scenarios.${activeScenario}.cli`)}</span>
                                                </div>
                                            ) : (
                                                t(`scenarios.${activeScenario}.${activeTab}`).split("\n").map((line, i) => (
                                                    <div key={i} className="flex gap-4">
                                                        <span className="w-4 text-slate-700 select-none text-right">{i + 1}</span>
                                                        <span dangerouslySetInnerHTML={{
                                                            __html: line
                                                                .replace(/"([^"]+)"/g, '<span class="text-emerald-400">"$1"</span>')
                                                                .replace(/\b(import|from|const|await|new|from|as)\b/g, '<span class="text-brand-secondary">$1</span>')
                                                                .replace(/\b(Architect|Coder|Reviewer|Tester|Judge|ARCHITECT|CODER|REVIEWER|TESTER|Workflow|StructuredWorkflow|Role|AgentRole)\b/g, '<span class="text-amber-300">$1</span>')
                                                                .replace(/\.run\(/g, '.<span class="text-sky-400">run</span>(')
                                                        }} />
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Footer / Status Bar */}
                            <div className="px-6 py-3 bg-[#121216] border-t border-white/5 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-600">
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                        Ready
                                    </span>
                                    <span>UTF-8</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span>Line 1, Col 1</span>
                                    <span>{activeTab === "react" ? "TypeScript" : activeTab === "python" ? "Python" : "Zsh"}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
