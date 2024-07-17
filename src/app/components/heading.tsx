"use client";
import { motion } from "framer-motion";

export default function Heading({ heading, subheading }: { heading: string, subheading: string }) {
  return (
    <div className="flex flex-row-reverse gap-8 max-md:gap-4 items-center">
    <motion.h3
      variants={{
        initial: { x: 0 },
        whileHover: { x: -16 },
      }}
      transition={{
        type: "spring",
        staggerChildren: 0.075,
        delayChildren: 0.25,
      }}
      className="relative text-2xl md:text-3xl lg:text-3xl xl:text-5xl z-10 block  font-bold text-neutral-600 dark:text-neutral-300 transition-colors duration-500 group-hover:text-neutral-50"
    >
      {heading.split("").map((l, i) => (
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: 16 },
          }}
          transition={{ type: "spring" }}
          className="inline-block"
          key={i}
        >
          {l}
        </motion.span>
      ))}
    </motion.h3>
    <span className="relative z-10 mt-2 block text-base text-neutral-500 dark:text-indigo-500/80 transition-colors duration-500 group-hover:text-neutral-50">
      {subheading}
    </span>
  </div>
  )
}