'use client'
import Image from "next/image";
import { InteractiveElement } from '@/app/components/InteractiveElement'; 

export default function Home() {
  return (
    <section className="relative flex-1 flex flex-col items-center justify-center h-[100dvh] overflow-hidden my-bg-radial">
      <InteractiveElement className="transform 0s ease-out" amountX={10} amountY={10}>
        <div className="w-120 h-120 absolute -bottom-40 left-1/2 -translate-x-1/2 bg-radial from-transparent to-white/20 rounded-full"></div>
      </InteractiveElement>

      <div className="mt-auto z-1 absolute bottom-0 left-1/2 -translate-x-1/2">
        <InteractiveElement>
          <Image
            src="/huddin.webp"
            alt="Welcome Image"
            width={400}
            height={400}
            priority
            className="-mb-6"
          />
        </InteractiveElement>
      </div>
    </section>
  );
}