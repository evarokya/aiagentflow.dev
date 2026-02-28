import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
    const t = useTranslations('Footer');

    return (
        <div className="min-h-screen bg-brand-bg text-white py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 left-1/4 w-[50%] h-[300px] bg-brand-primary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{t('privacy')}</h1>

                <div className="prose prose-invert prose-slate max-w-none">
                    <p className="text-slate-400 text-lg mb-6">
                        Last Updated: February 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Welcome to AI Agent Flow. We value your privacy and are committed to protecting your personal data.
                            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Data Collection</h2>
                        <p className="text-slate-400 leading-relaxed">
                            As a local-first CLI tool, AI Agent Flow does not collect your proprietary source code.
                            Our website may collect anonymous analytics data to improve the user experience, such as page views and interaction counts.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Cookies</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We use essential cookies to maintain your preferences (such as theme and language settings).
                            You can disable cookies in your browser settings, though some features may not function correctly.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Third-Party Services</h2>
                        <p className="text-slate-400 leading-relaxed">
                            Our website is hosted on Vercel. We may use third-party tools for analytics or performance monitoring.
                            These services have their own privacy policies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Contact Us</h2>
                        <p className="text-slate-400 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact us through our GitHub repository.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
