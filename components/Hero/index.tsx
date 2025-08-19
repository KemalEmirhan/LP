import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeroProps = {  
  ref: React.Ref<HTMLElement>;
}

export default function Hero({ ref }: HeroProps) {
  return (
    <section className="flex flex-col w-full h-screen items-center justify-center" id="hero" ref={ref}>
      <div className="flex flex-col items-center gap-4 z-10 text-center max-w-[900px]">
        <h1 className="text-4xl md:text-6xl font-bold text-neutral-950 font-sans">Supercharge Your Green Home: <span className="italic underline decoration-[#ffd233]">Solar-Powered Heat</span> That Pays Back</h1>
        <h2 className="text-xl md:text-2xl text-gray-200">Harness your rooftop’s solar power to drive a sleek, silent heat pump—for year-round comfort and tiny bills</h2>
        <Link href="#signup-form" className="bg-[#ffd233] cursor-pointer text-black px-6 py-4 rounded-md w-fit text-lg font-bold hover:bg-[#ffd233]/90 transition-[colors,scale] duration-150 active:scale-97">Get Your Heat Pump</Link>
      </div>
      <Image src="/images/hero.webp" alt="Green Energy" fill loading="eager" className="object-cover" />
    </section>
  )
};