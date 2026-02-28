import { redirect } from "@/i18n/navigation";

export default function DocsIndex({ params: { locale } }: { params: { locale: string } }) {
    redirect({ href: "/docs/getting-started", locale });
}
