"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedTextProps = {
  texte: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
};

const letterVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const TextSplit = ({
  texte,
  el: Wrapper = "p",
  className,
  stagger,
  delay,
  duration,
}: AnimatedTextProps) => {
  const textArray = Array.isArray(texte) ? texte : [texte];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });
  return (
    <Wrapper className={className}>
      <span className="sr-only">{texte}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: stagger, delayChildren: delay, duration: duration }}
        aria-hidden
      >
        {textArray.map((line, index) => (
          <span className="block" key={index}>
            {line.split(" ").map((word, index) => (
              <span className="inline-block overflow-hidden" key={index}>
                {word.split("").map((char, index) => (
                  <motion.span
                    className="inline-block"
                    variants={letterVariants}
                    key={index}
                  >
                    {char}
                  </motion.span>
                ))}
                <span className="inline-block">&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};
