'use client'
import { useAnimation, motion } from "framer-motion";



export default function AnimatedTitle({text}) {

  
  // const ctrls = useAnimation();
  
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };
  
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };
  
  return (
    <span aria-label={text} className="block ">
      {text.split(" ").map((word, index) => {
        return (
          <motion.span
            // ref={ref}
            className="inline-block -mr-3.5 text-nowrap"
            aria-hidden="true"
            key={index}
            initial="hidden"
            // animate={ctrls}
            animate="visible"
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.25,
              staggerChildren: 0.05,
            }}
          >
           &nbsp; {word.split("").map((character, index) => {
              return (
                <motion.span
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  className="inline-block -mr-0.5"
                >
                  {character}
                </motion.span>
              );
            })}
          </motion.span>
        );
      })}
    </span>
  );
}