'use client'
import Image from "next/image";
import { InteractiveShadow } from '@/app/components/InteractiveShadow'; // Adjust path as needed

export default function Home() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center h-[100dvh] overflow-hidden bg-blue-radial">
      <InteractiveShadow color="#fff" baseShadowY={0} className="mt-auto z-1">
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