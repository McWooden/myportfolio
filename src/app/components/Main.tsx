import { cn } from "@/lib/utils";

export default function Main({children, className}: {children: React.ReactNode, className?: string}) {
    return <main className={cn("flex flex-col gap-[100px] lg:gap-[150px] min-h-[100dvh]", className)}>
        {children}
    </main>
}