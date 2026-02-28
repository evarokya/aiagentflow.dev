import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'AI Agent Flow - Multi-Agent Orchestrator';
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #020617, #0f172a, #082f49)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 40 }}>
                    <svg width="120" height="120" viewBox="0 0 512 512">
                        <path d="M 120 256 L 392 256" stroke="#06B6D4" strokeWidth="24" strokeLinecap="round" opacity={0.6} />
                        <path d="M 120 256 L 256 120" stroke="#3B82F6" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
                        <path d="M 120 256 L 256 392" stroke="#3B82F6" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
                        <path d="M 256 120 L 392 256" stroke="#06B6D4" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
                        <path d="M 256 392 L 392 256" stroke="#06B6D4" strokeWidth="16" strokeLinecap="round" opacity={0.4} />
                        <circle cx="120" cy="256" r="48" fill="#3B82F6" />
                        <circle cx="256" cy="120" r="36" fill="#06B6D4" opacity={0.9} />
                        <circle cx="256" cy="392" r="36" fill="#06B6D4" opacity={0.9} />
                        <circle cx="392" cy="256" r="64" fill="#3B82F6" />
                        <circle cx="120" cy="256" r="20" fill="#ffffff" opacity={0.5} />
                        <circle cx="392" cy="256" r="30" fill="#ffffff" opacity={0.6} />
                    </svg>
                    <span style={{ fontSize: 72, fontWeight: 'bold', marginLeft: 32, color: '#e0f2fe' }}>AI Agent Flow</span>
                </div>
                <div style={{ fontSize: 42, fontWeight: 500, color: '#94a3b8', textAlign: 'center', maxWidth: '80%' }}>
                    Your AI Engineering Team, Running Locally
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
