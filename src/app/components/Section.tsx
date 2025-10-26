import { cn } from "@/lib/utils";

export default function Section({children, className}: {children: React.ReactNode, className?: string}) {
    return <section className={cn("w-full max-w-5xl mx-auto p-4 md:px-6 lg:px-8", className)}>
        {children}
    </section>
}