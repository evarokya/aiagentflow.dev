"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function TerminalAnimation() {
    const t = useTranslations("Terminal");

    const terminalSteps = [
        { text: t("step1"), delay: 0 },
        { text: t("step2"), delay: 800 },
        { text: t("step3"), delay: 2500 },
        { text: t("step4"), delay: 5000 },
        { text: t("step5"), delay: 6500 },
        { text: t("step6"), delay: 7800 },
        { text: t("step7"), delay: 8500 },
    ];

    const [displayedSteps, setDisplayedSteps] = useState<number>(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        const timers = terminalSteps.map((step, index) => {
            return setTimeout(() => {
                setDisplayedSteps(index + 1);
                if (index === terminalSteps.length - 1) {
                    setIsTyping(false);
                }
            }, step.delay);
        });

        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl mx-auto mt-12 bg-[#09090b] rounded-xl overflow-hidden border border-slate-800/60 shadow-[0_0_50px_-12px_rgba(var(--brand-primary),0.3)] relative"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 via-transparent to-brand-secondary/10 pointer-events-none" />

            <div className="flex items-center px-4 py-3 border-b border-slate-800/60 bg-[#121216]/80 backdrop-blur-sm">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                </div>
                <div className="mx-auto text-xs text-slate-500 font-mono">
                    bash
                </div>
            </div>

            <div className="p-6 font-mono text-sm leading-relaxed text-slate-300 min-h-[220px] relative z-10">
                {terminalSteps.slice(0, displayedSteps).map((step, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`mb-2 flex items-start ${i === 0 ? "text-brand-primary" : ""} ${step.text.includes("✔") ? "text-emerald-400" : ""}`}
                    >
                        {i === 0 && <span className="mr-3 text-brand-secondary">❯</span>}
                        <span>{step.text}</span>
                    </motion.div>
                ))}
                {isTyping && (
                    <motion.div
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="inline-block w-2 ml-1 h-4 bg-slate-400 align-middle"
                    />
                )}
            </div>
        </motion.div>
    );
}
