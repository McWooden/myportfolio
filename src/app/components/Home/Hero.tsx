'use client'
import Image from "next/image";
import { InteractiveElement } from '@/app/components/InteractiveElement'; 
import { animate, spring } from 'animejs';
import { useEffect } from "react";

export default function Hero() {
  useEffect (() => {
      animate('#blob', {
        scale: [.5, 1],
        opacity: [.5, 1],
        ease: spring({
          bounce: 0.4,
          duration: 2000
        }),
        directions: 'alternate',
      });
  }, []);

  return (
    <section className="relative flex-1 flex flex-col items-center justify-center h-[100dvh] overflow-hidden my-bg-radial min-h-[100dvh]">
      <InteractiveElement className="absolute -bottom-40 left-1/2 -translate-x-1/2 opacity-0" id="blob" amountX={10} amountY={10} transition="transform 300ms ease-out">
        <div className="w-120 h-120 bg-radial from-transparent to-white/20 rounded-full"></div>
      </InteractiveElement>
      <div className="mt-auto z-1 absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
        <Image
          src="/huddin.webp"
          alt="Welcome Image"
          width={400}
          height={400}
          priority
          className="-mb-6 mx-auto"
        />
      </div>
    </section>
  );
}