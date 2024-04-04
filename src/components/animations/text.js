'use client'
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

function Text({children,className=""}) {
 

  return (
    <span className={twMerge("n",className)}
    >
      {children.split(" ").map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </span>
  );
}

export default Text;
