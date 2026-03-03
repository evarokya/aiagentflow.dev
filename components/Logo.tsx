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
                    <stop offset="0%" stopColor="#06B6D4" /> {/* Cyan */}
                    <stop offset="100%" stopColor="#6366F1" /> {/* Indigo */}
                </linearGradient>
                <linearGradient id="agentFlowGlow" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0.5" />
                </linearGradient>
            </defs>

            {/* Glowing Backdrop Diamond */}
            <path
                d="M256 64 L416 256 L256 448 L96 256 Z"
                fill="none"
                stroke="url(#agentFlowGlow)"
                strokeWidth="60"
                strokeLinejoin="round"
                className="blur-xl"
            />

            {/* Inner Core Diamond */}
            <path
                d="M256 160 L336 256 L256 352 L176 256 Z"
                fill="none"
                stroke="url(#agentFlowGradComponent)"
                strokeWidth="16"
                strokeLinejoin="round"
            />

            {/* Outer Hull Diamond */}
            <path
                d="M256 64 L416 256 L256 448 L96 256 Z"
                fill="none"
                stroke="url(#agentFlowGradComponent)"
                strokeWidth="24"
                strokeLinejoin="round"
            />

            {/* Connecting Struts (Network Aesthetic) */}
            <path d="M256 64 L256 160" stroke="url(#agentFlowGradComponent)" strokeWidth="16" />
            <path d="M256 448 L256 352" stroke="url(#agentFlowGradComponent)" strokeWidth="16" />
            <path d="M96 256 L176 256" stroke="url(#agentFlowGradComponent)" strokeWidth="16" />
            <path d="M416 256 L336 256" stroke="url(#agentFlowGradComponent)" strokeWidth="16" />

            {/* Network Nodes (Dots) */}
            <circle cx="256" cy="64" r="16" fill="#fff" />
            <circle cx="416" cy="256" r="16" fill="#fff" />
            <circle cx="256" cy="448" r="16" fill="#fff" />
            <circle cx="96" cy="256" r="16" fill="#fff" />

            <circle cx="256" cy="160" r="12" fill="url(#agentFlowGradComponent)" />
            <circle cx="336" cy="256" r="12" fill="url(#agentFlowGradComponent)" />
            <circle cx="256" cy="352" r="12" fill="url(#agentFlowGradComponent)" />
            <circle cx="176" cy="256" r="12" fill="url(#agentFlowGradComponent)" />
        </svg>
    );
}
