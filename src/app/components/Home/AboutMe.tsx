import Section from "@/app/components/Section";

export default function AboutMe() {
    return (
        <Section className="flex flex-col gap-2">
            <div className="p-4 shadow-[0_10px_0px_var(--color-dark-purple)]/80 border-2 border-dark-purple/80 rounded">
                <h2 className="text-2xl font-bold text-dark opacity-90">Hi, Aku Huddin</h2>
                <div className="flex flex-col opacity-80">
                    <p className="text-md">
                        Aku bantu orang bikin professional web portofolio yang lagi trending 
                    </p>
                    <p className="text-md">
                        dan bikin mereka terhubung sama agensi marketing terpercaya.
                    </p>
                </div>
            </div>
        </Section>
    );
}