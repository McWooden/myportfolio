'use client'
import Image from "next/image";
import { InteractiveShadow } from '@/app/components/InteractiveShadow'; // Adjust path as needed

export default function Home() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center h-[100dvh] overflow-hidden my-bg-blue-radial-bg-at-bottom">
      <HuddinVideoMask/>
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

export function HuddinVideoMask() {
  return (
    <div className="flex-1 flex items-center justify-center overflow-hidden p-4 pt-4">
      {/* WebP animasi di belakang */}
      {/* Teks yang jadi “mask” */}
      <h2
        className="text-5xl md:text-7xl lg:text-9xl font-extrabold text-transparent select-none drop-shadow-lg"
        style={{
          backgroundImage: 'url(/koi.webp)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
        }}
      >
        Huddin.
      </h2>
    </div>
  )
}
