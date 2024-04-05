"use client";
import { useAppAnimation } from "@/components/animations/useAnimationContext";
import { Button } from "@/components/ui/button";
import { useScroll, motion } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";

const Work = () => {
  const workRef = useRef(null);
  const { backgroundColor, color } = useAppAnimation();

  const { scrollYProgress } = useScroll({
    target: workRef,
  });

  const translateColors = [0.14, 0.28, 0.42, 0.71, 0.85, 1];

  const backgroundColorTranslate = useTransform(
    scrollYProgress,
    translateColors,
    ["#f682a5", "#c9da8f", "#c3b2e7", "#f9a474", "#fedf6f", "#b8cedc"]
  );

  const colorTranslate = useTransform(scrollYProgress, translateColors, [
    "#52225e",
    "#1c471f",
    "#52225e",

    "#582614",
    "#4a411e",
    "#184363",
  ]);
  useMotionValueEvent(backgroundColorTranslate, "change", (latest) => {
    backgroundColor.set(latest);
  });
  useMotionValueEvent(colorTranslate, "change", (latest) => {
    color.set(latest);
  });
  return (
    <section
      ref={workRef}
      className="container  lg:max-w-5xl mx-auto px-2 lg:px-6 "
    >
      <h2 className="text-5xl lg:text-7xl py-24">Recent Work</h2>
      <div>
        <div className="relative lg:grid lg:grid-cols-2 lg:first:col-span-2  lg:[&>*:nth-child(3n+1)]:col-span-2 gap-6">
          <Card
            className="lg:col-span-2"
            src={"/projects/godaddy-desktop.webp"}
            title="Ibgroup Landing Page"
            year="2023"
            tags={["HTML", "CSS"]}
          />
          <Card
            src={"/projects/ib-group-desktop.webp"}
            title="Go Daddy Page Clone"
            year="2023"
            tags={["HTML", "CSS", "JavaScript"]}
          />
          <Card
            src={"/projects/sunnyside-desktop.webp"}
            title="SUNNYSIDE LANDING PAGE"
            year="2023"
            tags={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </section>
  );
};
const Card = ({ src, alt, className = "", title, year, tags }) => {
  return (
    <motion.div
      className={twMerge("relative w-full cursor-pointer p-6", className)}
      initial={{ y:60, opacity: 0 }}
      whileInView={{ y:0, opacity: 1, transition: { duration: 0.6 } }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{scale:1.01}}
    >
      <Image
        src={src}
        alt={alt || ""}
        width={1800}
        height={1800}
        className="object-contain object-center rounded-2xl"
      />
      <div className="space-y-1 my-3 space-x-3">
        <Button className="font-normal rounded-2xl" size="sm" variant="outline">
          {year}
        </Button>
        <Button className="  rounded-2xl " size="sm" variant="outline">
          <ul className="flex gap-2 ">
            {tags.map((item) => (
              <li key={item} className="list-disc ml-3 font-normal">
                {item}
              </li>
            ))}
          </ul>
        </Button>
        <h3 className="uppercase py-4  text-2xl lg:text-3xl text-balance  ">{title}</h3>
      </div>
    </motion.div>
  );
};
export default Work;
