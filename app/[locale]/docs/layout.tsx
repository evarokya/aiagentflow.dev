import { getAllPosts } from "@/lib/content";
import { DocsSidebar } from "@/components/DocsSidebar";

export default function DocsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const docs = getAllPosts("docs");

    return (
        <div className="min-h-screen bg-brand-bg relative overflow-hidden flex flex-col md:flex-row pt-16 mt-0">
            {/* Sidebar Background Glow */}
            <div className="absolute top-0 left-[-10%] w-[30%] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Sidebar */}
            <DocsSidebar docs={docs} />

            {/* Main Content */}
            <main className="flex-1 min-w-0 z-10">
                {children}
            </main>
        </div>
    );
}
