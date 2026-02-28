"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function VisitorCounter() {
    const [visitors, setVisitors] = useState<number | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        // In a real application without a database, we would call an external API or Edge function
        // For this static site demo, we'll simulate a realistic growing count + current reading based on path
        const baseCount = 14205;
        const pageSpecificCount = pathname.length * 42;

        setVisitors(baseCount + pageSpecificCount + Math.floor(Math.random() * 10));

        // Optional: Real integration would look like this
        /*
        fetch('/api/visitors', { method: 'POST' })
          .then(res => res.json())
          .then(data => setVisitors(data.count))
          .catch(console.error);
        */
    }, [pathname]);

    if (visitors === null) return null;

    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-400">
            <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            {visitors.toLocaleString()} views
        </div>
    );
}
