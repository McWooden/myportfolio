import Section from "@/app/components/Section";

export default function AboutMe() {
    return (
        <Section className="mx-auto max-w-5xl flex flex-col gap-2">
            <h2 className="text-2xl font-bold text-just-purple">About Me</h2>
            <div className="flex flex-col opacity-80">
                <p className="text-md">
                    Hi, aku Huddin. Aku bantu orang bikin professional web portofolio yang lagi trending 
                </p>
                <p className="text-md">
                    dan menghubungkan mereka dengan agensi marketing terpercaya.
                </p>
            </div>
        </Section>
    );
}