"use client";

import { motion } from "framer-motion";

import { Button } from "./button";
import { useAppAnimation } from "../animations/useAnimationContext";

export const HeroCtAButton = () => {
  const { setContactActive } = useAppAnimation();
  return (
    <button
      className="anim opacity-0 py-2 px-3 text-base  rounded-xl bg-primary-blue text-secondary-blue group transform transition-all duration-200 scale-100 hover:scale-110  relative "
      onClick={() => {
        setContactActive(true);
      }}
    >
      <span className="block relative">
        <motion.span className="block opacity-0">Let&apos;s Begin</motion.span>
        <span className="absolute top-0 left-0  translate-y-0 group-hover:translate-y-[120%] transition-all duration-200 transform hover:opacity-0">
          Let&apos;s Begin
        </span>
        <span className="absolute top-0 left-0  -translate-y-[120%] group-hover:translate-y-0 transition-all duration-200 transform">
          Let&apos;s Begin
        </span>
      </span>
    </button>
  );
};

export const HeroInspirationButton = () => {
  return (
    <div className="space-x-1 md:space-x-2">
      <Button className="btn opacity-0" size="sm" variant="outline">
        Inspire
      </Button>
      <Button className="btn opacity-0" size="sm" variant="outline">
        Create
      </Button>
      <Button
        className="hidden btn opacity-0 lg:inline"
        size="sm"
        variant="outline"
      >
        Empower
      </Button>
      <Button className="btn opacity-0" size="sm" variant="outline">
        Innovate
      </Button>
    </div>
  );
};
