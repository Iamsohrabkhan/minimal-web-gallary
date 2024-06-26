"use client";
import Hero from "./home/hero";
import Work from "./home/work";
import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import Footer from "./home/footer";
import Contact from "@/components/contact";
import Features from "./home/features";
import Gift from "./home/gift";
import { useAppAnimation } from "@/components/animations/useAnimationContext";

export default function Home() {
  const { backgroundColor, color } = useAppAnimation();

  return (
    <motion.main style={{ backgroundColor, color }}>
      <Navbar />
      <Hero />
      <Features />
      <Gift />
      <Work />
      <Footer />
      <Contact />
    </motion.main>
  );
}
