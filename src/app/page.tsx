'use client'
import Image from "next/image";
import { InteractiveShadow } from '@/app/components/InteractiveShadow'; // Adjust path as needed

export default function Home() {
  return (
    <section className="flex-1 flex items-end justify-center h-[100dvh] overflow-hidden">
      <InteractiveShadow color="#fff" baseShadowY={0}>
        <Image
          src="/huddin.webp"
          alt="Welcome Image"
          width={400}
          height={400}
          priority
          className="-mb-6"
        />
      </InteractiveShadow>
    </section>
  );
}