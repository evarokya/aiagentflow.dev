import { NextResponse } from 'next/server';

// In-memory store for views (resets on Vercel deployment/cold boot)
const viewedIps = new Set<string>();
let totalViews = 14205; // Starting base count

export async function POST(request: Request) {
    try {
        // Get IP from headers (works on Vercel and most proxies)
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

        // Prevent local/unknown IPs from constantly bumping if needed, or just track unique raw string
        const uniqueKey = ip.split(',')[0].trim();

        if (uniqueKey !== 'unknown' && !viewedIps.has(uniqueKey)) {
            viewedIps.add(uniqueKey);
            totalViews++;
        }

        return NextResponse.json({ count: totalViews });
    } catch {
        return NextResponse.json({ count: totalViews });
    }
}
