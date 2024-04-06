"use client";
import { Button } from "@/components/ui/button";
import HeroImages from "./heroImages";
import { useEffect } from "react";
import { Meteors } from "@/components/meterior";
import { useAppAnimation } from "@/components/animations/useAnimationContext";
import { useAnimate } from "framer-motion";
import { stagger } from "framer-motion";
import { HeroCtAButton, HeroInspirationButton } from "@/components/ui/HeroButton";

const Hero = () => {
  const {  setMarqueStart } = useAppAnimation();
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const heroAnimation = async () => {
      await animate(
        ".anim",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.3, delay: stagger(0.25) }
      );
      await animate(
        ".btn",
        { opacity: [0, 1], y: [10, 0] },
        { duration: 0.1, delay: stagger(0.075) }
      );
      await animate(
        ".heroImages",
        { opacity: [0, 1], y: [10, 0] },
        {
          duration: 0.3,
          delay: stagger(0.02),
          onComplete: () => {
            setMarqueStart(true);
          },
        }
      );
    };

    heroAnimation();
  }, []);

  return (
    <section ref={scope} className="overflow-x-hidden md:overflow-x-visible">
      <div
        className="max-h-svh relative mx-auto flex flex-col items-center gap-3 lg:gap-6 py-12 lg:py-24 
        px-12 "
      >
        <Meteors
          className="z-10 bg-primary-green text-primary-green"
          number={20}
        />
        <h1 className="opacity-0 anim text-center  relative z-20  text-balance  text-3xl lg:text-5xl mt-6 leading-tight">
          Elevate your online presence with us.
          <br className="hidden md:block" />
          <span className="hidden lg:block">
            journey for <br className="md:hidden" /> every clients
          </span>
        </h1>
        <p className="anim max-w-3xl text-center text-sm md:text-base opacity-0">
          Elevate your online presence with our innovative approach, ensuring
          your website not only stands out but leaves a lasting impression. Are
          you ready to Wow the digital world?
        </p>
        <HeroCtAButton />
        <HeroInspirationButton/>
        <HeroImages />
      </div>
    </section>
  );
};
export default Hero;
