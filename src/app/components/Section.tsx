import { cn } from "@/lib/utils";

export default function Section({children, className}: {children: React.ReactNode, className?: string}) {
    return <section className={cn("w-full max-w-7xl mx-auto px-4", className)}>
        {children}
    </section>
}