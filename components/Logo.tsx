import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={className}
            {...props}
        >
            <defs>
                <linearGradient id="agentFlowGradComponent" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
                <linearGradient id="agentFlowGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
                </linearGradient>
            </defs>

            {/* Glowing Backdrop */}
            <path
                d="M256 64 L384 416 L128 416 Z"
                fill="none"
                stroke="url(#agentFlowGlow)"
                strokeWidth="48"
                strokeLinejoin="round"
                className="blur-md"
            />

            {/* The Main "A" geometry with continuous flowchart lines */}
            <path
                d="M 230 110 L 140 370"
                fill="none"
                stroke="url(#agentFlowGradComponent)"
                strokeWidth="40"
                strokeLinecap="round"
            />

            <path
                d="M 282 110 L 372 370"
                fill="none"
                stroke="url(#agentFlowGradComponent)"
                strokeWidth="40"
                strokeLinecap="round"
            />

            {/* Crossbar styled as an interconnected data node line */}
            <path
                d="M 175 280 L 335 280"
                fill="none"
                stroke="url(#agentFlowGradComponent)"
                strokeWidth="32"
                strokeLinecap="round"
            />

            {/* Glowing Circuit Node / Agent */}
            <circle cx="256" cy="110" r="28" fill="#ffffff" />
            <circle cx="256" cy="110" r="14" fill="url(#agentFlowGradComponent)" />

            <circle cx="140" cy="370" r="24" fill="url(#agentFlowGradComponent)" />
            <circle cx="372" cy="370" r="24" fill="url(#agentFlowGradComponent)" />
        </svg>
    );
}
