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
                <linearGradient id="agentFlowGradComponent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
            </defs>

            {/* Data paths (flows) */}
            <path d="M 120 256 L 392 256" stroke="url(#agentFlowGradComponent)" strokeWidth="24" strokeLinecap="round" opacity={0.6} />
            <path d="M 120 256 L 256 120" stroke="url(#agentFlowGradComponent)" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
            <path d="M 120 256 L 256 392" stroke="url(#agentFlowGradComponent)" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
            <path d="M 256 120 L 392 256" stroke="url(#agentFlowGradComponent)" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
            <path d="M 256 392 L 392 256" stroke="url(#agentFlowGradComponent)" strokeWidth="16" strokeLinecap="round" opacity={0.4} />

            {/* Nodes (Agents) */}
            <circle cx="120" cy="256" r="48" fill="url(#agentFlowGradComponent)" />
            <circle cx="256" cy="120" r="36" fill="url(#agentFlowGradComponent)" opacity={0.9} />
            <circle cx="256" cy="392" r="36" fill="url(#agentFlowGradComponent)" opacity={0.9} />
            <circle cx="392" cy="256" r="64" fill="url(#agentFlowGradComponent)" />

            {/* Inner glowing cores */}
            <circle cx="120" cy="256" r="20" fill="#ffffff" opacity={0.5} />
            <circle cx="392" cy="256" r="30" fill="#ffffff" opacity={0.6} />
        </svg>
    );
}
