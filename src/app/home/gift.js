"use client";
import { useAppAnimation } from "@/components/animations/useAnimationContext";
import { motion } from "framer-motion";
import { useMotionValueEvent ,useScroll,useTransform} from "framer-motion";

import Image from "next/image";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

const Gift = () => {
  const featuresRef = useRef(null);
  const {
    backgroundColor,
    color,
    navBackgroundColor,
    navColor,
    setContactActive,
  } = useAppAnimation();

  const { scrollYProgress } = useScroll({
    target: featuresRef,
  });

  const pic1TranslateTop = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["50%", "80%"]
  );
  const pic1TranslateLeft = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ["50%", "30%"]
  );

  // const pic2TranslateTop = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "40%"]);
  // const pic2TranslateLeft = useTransform(scrollYProgress, [0.2, 0.8], ["50%", "10%"]);

  const pic3TranslateTop = useTransform(
    scrollYProgress,
    [0, 0.8],
    ["50%", "80%"]
  );
  const pic3TranslateLeft = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    ["50%", "30%"]
  );

  const pic4TranslateTop = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["50%", "20%"]
  );
  const pic4TranslateRight = useTransform(
    scrollYProgress,
    [0.2, 0.8],
    ["50%", "80%"]
  );
  const pic5TranslateTop = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    ["50%", "20%"]
  );
  const pic5TranslateLeft = useTransform(
    scrollYProgress,
    [0.3, 0.8],
    ["50%", "20%"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  const translateColors = [0, 0.14, 0.28, 0.42, 0.57, 0.71, 0.85, 1];

  const backgroundColorTranslate = useTransform(
    scrollYProgress,
    translateColors,
    [
      "#fff",
      "#b8cedc",
      "#c9da8f",
      "#c3b2e7",
      "#f682a5",
      "#f9a474",
      "#fedf6f",
      "#b8cedc",
    ]
  );

  const colorTranslate = useTransform(scrollYProgress, translateColors, [
    "#000",
    "#184363",
    "#1c471f",
    "#52225e",
    "#52225e",
    "#582614",
    "#4a411e",
    "#184363",
  ]);
  useMotionValueEvent(backgroundColorTranslate, "change", (latest) => {
    backgroundColor.set(latest);
    navBackgroundColor.set("#fff");
    navColor.set("#000");
  });
  useMotionValueEvent(colorTranslate, "change", (latest) => {
    color.set(latest);
  });
  return (
    <section ref={featuresRef} className="h-[300svh] w-full">
      <motion.div className=" sticky h-svh top-0 w-full left-0 py-2">
        <motion.div
          className="text-center space-y-3 lg:p-3 -translate-y-1/2  relative z-50 "
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            opacity,
            scale,
          }}
        >
          <h3 className="leading-none text-2xl lg:text-4xl font-bold w-full">
            Discover What Sets Us Apart
          </h3>
          <p className="text-sm lg:text-lg ">
            Find out what distinguishes our services from the rest, promising a
            superior experience and results.
          </p>
          {/* <HeroCtAButton/> */}
          <motion.button
            onClick={() => {
              setContactActive(true);
            }}
            style={{ color: backgroundColor, backgroundColor: color }}
            className=" p-3 rounded-md cursor-pointer relative z-50"
          >
            Contact Us
          </motion.button>
        </motion.div>

        <div className="relative  h-svh  ">
          <Picture
            src="/screenshots/gf1.jpg"
            alt=""
            initial={{
              top: "50%",
              right: "50%",
              x: "50%",
              y: "-50%",
            }}
            style={{
              top: pic5TranslateTop,
              right: pic5TranslateLeft,
            }}
          />
          <Picture
            src="/screenshots/gf2.jpg"
            alt="1"
            style={{ top: pic1TranslateTop, left: pic1TranslateLeft }}
            initial={{
              top: "50%",
              left: "50%",
            }}
          />

          <Picture
            src="/screenshots/gf4.jpg"
            alt="3"
            initial={{
              top: "50%",
              right: "50%",
              x: "50%",
              y: "-50%",
            }}
            style={{
              top: pic3TranslateTop,
              right: pic3TranslateLeft,
            }}
          />
          <Picture
            src="/screenshots/gf4.jpg"
            alt=""
            initial={{
              top: "50%",
              right: "50%",
              x: "50%",
              y: "-50%",
            }}
            style={{
              top: pic4TranslateTop,
              right: pic4TranslateRight,
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Gift;

const Picture = ({ src, alt, initial, style, className = "" }) => {
  return (
    <motion.div
      initial={initial}
      style={style}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      {/* <div className="relative w-32 h-44  md:w-36 md:h-52 lg:w-72 lg:h-52"> */}{" "}
      <Image
        src={src}
        width={120}
        height={120}
        alt={alt}
        className={twMerge("object-cover object-center rounded-md", className)}
      />
      {/* </div> */}
    </motion.div>
  );
};
