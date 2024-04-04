"use client";
import {  useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { ContextProvider } from "@/components/animations/useAnimationContext";

const Template = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    // lenis.on("scroll", (e) => {
    //   console.log("🚀 ~ lenis.on ~ e:", e)
    // });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <ContextProvider>
        <div>{children}</div>
    </ContextProvider>
  );
};

export default Template;
