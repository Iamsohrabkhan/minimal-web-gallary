"use client";
import { Button } from "@/components/ui/button";
import HeroImages from "./heroImages";
import { motion} from "framer-motion";
import { useRef } from "react";
import { Meteors } from "@/components/meterior";
import { useAppAnimation } from "@/components/animations/useAnimationContext";

const Hero = () => {
  const containerRef = useRef(null);
  const { setContactActive } = useAppAnimation();

  return (
    <section ref={containerRef}>
      <div
        ref={containerRef}
        className="h-svh relative mx-auto flex flex-col items-center gap-3 lg:gap-6 py-12 lg:py-24 
        px-12"
      >
        <Meteors
          className="z-10 bg-primary-green text-primary-green"
          number={20}
        />
        <h1 className=" text-center  relative z-20  text-balance  text-3xl lg:text-5xl mt-6 leading-tight">
          Elevate your online presence with us.
          <br className="hidden md:block" />
          <span className="hidden lg:block">
            journey for <br className="md:hidden" /> every clients
          </span>
        </h1>
        <p className="max-w-3xl text-center text-sm md:text-base">
          Elevate your online presence with our innovative approach, ensuring
          your website not only stands out but leaves a lasting impression. Are
          you ready to Wow the digital world?
        </p>
        <button
          className="py-2 px-3 text-base  rounded-xl bg-primary-blue text-secondary-blue group transform transition-all duration-200 scale-100 hover:scale-110  relative "
          onClick={()=>{setContactActive(true)}}         
        >
          <span className="block relative">
            <motion.span  className="block opacity-0">Let&apos;s Begin</motion.span>
            <span  className="absolute top-0 left-0  translate-y-0 group-hover:translate-y-[120%] transition-all duration-200 transform hover:opacity-0">Let&apos;s Begin</span>
            <span className="absolute top-0 left-0  -translate-y-[120%] group-hover:translate-y-0 transition-all duration-200 transform" >Let&apos;s Begin</span>
          </span>
        </button>

        <div className="space-x-1 md:space-x-2">
          <Button size="sm" variant="outline">
            Inspire
          </Button>
          <Button size="sm" variant="outline">
            Create
          </Button>
          <Button className="hidden lg:inline" size="sm" variant="outline">
            Empower
          </Button>
          <Button size="sm" variant="outline">
            Innovate
          </Button>
        </div>
        <HeroImages />
      </div>      
    </section>
  );
};
export default Hero;
