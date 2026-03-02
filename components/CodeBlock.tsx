"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

export function CodeBlock({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) {
    const [copied, setCopied] = useState(false);

    const extractText = (node: React.ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return String(node);
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (React.isValidElement(node) && node.props?.children) return extractText(node.props.children);
        return '';
    };

    const textToCopy = extractText(children).trimEnd();

    const handleCopy = () => {
        navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group relative my-6">
            <pre {...props} className={`${props.className || ''} !my-0 pr-14`}>
                {children}
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-3 right-3 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
                aria-label="Copy code"
            >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
        </div>
    );
}
