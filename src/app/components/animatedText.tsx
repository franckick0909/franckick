"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedTextProps = {
  text: string | string[];
  el?: keyof JSX.IntrinsicElements;
  className?: string;
  stagger?: number;
  delay?: number;
  duration?: number;
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const AnimatedText = ({
  text,
  el: Wrapper = "p",
  className,
  stagger,
  delay,
  duration,
}: AnimatedTextProps) => {
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "100px" });

  return (
    <Wrapper className={`${className} relative`}>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: stagger, delayChildren: delay, duration: duration }}
        aria-hidden
      >
        {textArray.map((line, index) => (
          <span className="block relative" key={index}>
            {line.split(" ").map((word, index) => (
              <span className="inline-block overflow-hidden " key={index}>
                {word.split("").map((char, index) => (
                  <motion.span
                    className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-slate-950 to-violet-500"
                    variants={letterVariants}
                    key={index}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block"
                >
                  &nbsp;
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
};