"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

type TabType = "react" | "python" | "cli";

export function InteractiveDemo() {
    const t = useTranslations("Demo");
    const [activeTab, setActiveTab] = useState<TabType>("react");

    return (
        <section className="py-24 relative overflow-hidden bg-white dark:bg-brand-bg transition-colors duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand-primary/5 dark:bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

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
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8"
                        >
                            {t("description")}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a href="https://github.com/aiagentflow/aiagentflow/tree/main/docs" target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-center transition-all hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(var(--brand-primary),0.5)]">
                                {t("readDocs")}
                            </a>
                        </motion.div>
                    </div>

                    {/* Interactive Code Window */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="rounded-2xl overflow-hidden bg-[#09090b] border border-slate-800/80 shadow-[0_0_60px_-15px_rgba(var(--brand-tertiary),0.3)]">
                            {/* Window Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-[#121216] border-b border-white/5">
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                                </div>
                                <div className="flex space-x-1 bg-[#09090b] rounded-lg p-1 border border-white/5">
                                    {(["react", "python", "cli"] as const).map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${activeTab === tab ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300 hover:bg-white/5"}`}
                                        >
                                            {tab === "react" ? "React/JS" : tab === "python" ? "Python" : "CLI"}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Code Content */}
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm leading-relaxed text-slate-300">
                                    <motion.code
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="block"
                                    >
                                        {activeTab === "react" && (
                                            <>
                                                <span className="text-brand-secondary">import</span> {"{"} AgentRole, StructuredWorkflow {"}"} <span className="text-brand-secondary">from</span> <span className="text-emerald-400">&quot;ai-agent-flow&quot;</span>;<br /><br />
                                                <span className="text-brand-secondary">const</span> workflow = <span className="text-brand-secondary">new</span> <span className="text-amber-300">StructuredWorkflow</span>({"{"}<br />
                                                {"  "}roles: [AgentRole.<span className="text-brand-primary">Architect</span>, AgentRole.<span className="text-brand-primary">Coder</span>, AgentRole.<span className="text-brand-primary">Reviewer</span>],<br />
                                                {"  "}model: <span className="text-emerald-400">&quot;claude-3-5-sonnet-20241022&quot;</span>,<br />
                                                {"  "}rootDir: <span className="text-emerald-400">&quot;./src&quot;</span><br />
                                                {"}"});<br /><br />
                                                <span className="text-brand-secondary">await</span> workflow.<span className="text-sky-400">run</span>(<span className="text-emerald-400">&quot;Create a dynamic pricing table component&quot;</span>);
                                            </>
                                        )}
                                        {activeTab === "python" && (
                                            <>
                                                <span className="text-brand-secondary">from</span> ai_agent_flow <span className="text-brand-secondary">import</span> Workflow, Role<br /><br />
                                                workflow = <span className="text-amber-300">Workflow</span>(<br />
                                                {"    "}roles=[Role.<span className="text-brand-primary">ARCHITECT</span>, Role.<span className="text-brand-primary">CODER</span>, Role.<span className="text-brand-primary">REVIEWER</span>],<br />
                                                {"    "}model=<span className="text-emerald-400">&quot;gpt-4o&quot;</span>,<br />
                                                {"    "}working_dir=<span className="text-emerald-400">&quot;./app&quot;</span><br />
                                                )<br /><br />
                                                workflow.<span className="text-sky-400">run</span>(<span className="text-emerald-400">&quot;Implement a Redis caching layer for the user API&quot;</span>)
                                            </>
                                        )}
                                        {activeTab === "cli" && (
                                            <>
                                                <span className="text-slate-500">$</span> ai-agent-flow run <span className="text-emerald-400">&quot;Build a markdown parser&quot;</span> \<br />
                                                {"    "}<span className="text-brand-secondary">--roles</span> architect,coder,reviewer,tester \<br />
                                                {"    "}<span className="text-brand-secondary">--model</span> gemini-2.5-pro \<br />
                                                {"    "}<span className="text-brand-secondary">--dir</span> ./packages/parser
                                            </>
                                        )}
                                    </motion.code>
                                </pre>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
