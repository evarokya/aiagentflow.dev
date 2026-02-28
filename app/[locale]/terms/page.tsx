import { useTranslations } from 'next-intl';

export default function TermsOfService() {
    const t = useTranslations('Footer');

    return (
        <div className="min-h-screen bg-brand-bg text-white py-24 px-6 md:px-12 relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-[50%] h-[300px] bg-brand-secondary/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tight">{t('terms')}</h1>

                <div className="prose prose-invert prose-slate max-w-none">
                    <p className="text-slate-400 text-lg mb-6">
                        Effective Date: February 2026
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
                        <p className="text-slate-400 leading-relaxed">
                            By accessing aiagentflow.dev and using the AI Agent Flow CLI, you agree to be bound by these Terms of Service.
                            If you do not agree, please do not use our services.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">2. Open Source License</h2>
                        <p className="text-slate-400 leading-relaxed">
                            AI Agent Flow is distributed under the MIT License. You are free to use, modify, and distribute the software
                            subject to the terms of that license.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">3. Use of Service</h2>
                        <p className="text-slate-400 leading-relaxed">
                            You agree not to use AI Agent Flow for any illegal or unauthorized purpose.
                            You are responsible for all content processed through the CLI on your local machine.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">4. Limitation of Liability</h2>
                        <p className="text-slate-400 leading-relaxed">
                            In no event shall AI Agent Flow or its contributors be liable for any damages arising out of the use or
                            inability to use the software.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-white">5. Modifications</h2>
                        <p className="text-slate-400 leading-relaxed">
                            We reserve the right to modify these terms at any time. We will notify users of any significant changes
                            by updating the date at the top of this page.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
