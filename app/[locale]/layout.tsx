import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Agent Flow — Multi-Agent AI Workflow Orchestrator",
  description: "Open-source CLI tool that orchestrates multi-agent AI workflows for software development. Architect, code, review, test, and ship — automatically.",
  keywords: ["ai agent", "workflow", "multi-agent", "cli", "code review", "testing", "automation", "open source", "local-first"],
  openGraph: {
    title: "AI Agent Flow — Your AI Engineering Team",
    description: "Orchestrate specialized AI agents in a structured workflow. No cloud lock-in. Your code stays on your machine.",
    url: "https://aiagentflow.dev",
    siteName: "AI Agent Flow",
    images: [{ url: "https://aiagentflow.dev/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Flow — Multi-Agent AI Workflow Orchestrator",
    description: "Open-source CLI tool that orchestrates multi-agent AI workflows for software development.",
    images: ["https://aiagentflow.dev/og-image.png"],
  },
};

export default async function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
