"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function PhraseSplit({
  phrases,
  className,
  delay,
}: {
  phrases: string;
  className: string;
  delay: number;
}) {
  const animation = {
    initial: {
      y: "100%",
    },
    enter: (index: number) => ({
        y: "0",
      transition: {
        ease: [0.33, 1, 0.68, 1],
        delay: index * (delay ? delay : 0.05),
      },
    }),
  };

  const container = useRef(null);
  const isInView = useInView(container, { margin: "-100px" });

  return (
    <motion.div ref={container} className={className} >
      {phrases.split("").map((phrase, index) => {
        return (
          <div key={index} className="overflow-hidden inline-block">
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={isInView ? "enter" : ""}
            >
              {phrase === " " ? <span>&nbsp;</span> : phrase}
            </motion.p>
          </div>
        );
      })}
    </motion.div>
  );
}