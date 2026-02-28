import { getAllPosts } from "@/lib/content";
import { DocsSidebar } from "@/components/DocsSidebar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const docs = getAllPosts("docs");

    return (
        <div className="min-h-screen bg-brand-bg relative flex flex-col md:flex-row pt-16 mt-0">
            {/* Sidebar Background Glow */}
            <div className="absolute top-0 left-[-10%] w-[35%] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none opacity-40" />

            {/* Sidebar */}
            <DocsSidebar docs={docs} />

            {/* Main Content */}
            <main className="flex-1 min-w-0 z-10">
                {children}
            </main>
        </div>
    );
}
