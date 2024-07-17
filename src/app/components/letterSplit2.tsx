"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";


export const LetterSplit2 = ({ phrase, delay, className}: { phrase: string, delay: number, className: string }) => {


    const container = useRef(null);
    const isInView = useInView(container, { margin: "-100px"});

    const letter = phrase.split("");

    const slideUp = {
        initial: {
          x: 400,
          opacity: 0,
          transition: {
            type: "spring",
            damping: 20,
          },
        },
        open: (i: number) => ({
          x: 0,
          opacity: 1,
          transition: {
            delay: i * (delay ? delay : 0.09),
            type: "spring",
            damping: 20,
          },
        }),
        closed: {
          x: 400,
          opacity: 0,
          transition: {
            type: "spring",
            damping: 20,
          },
        },
      };


  return (
    <AnimatePresence>
            <div ref={container} className={`m-0 gap-0 inline-flex flex-wrap tracking-[-0.02em] ${className}`}>
                {
                    letter.map((word, index) => {
                        return (
                            <span key={index} className="relative inline-flex overflow-hidden">
                            <motion.span
                                whileHover={{ y: -5 }}
                                custom={index}
                                initial="initial"
                                animate={isInView ? "open" : "closed"}
                                variants={slideUp}
                                className="word mr-[2px]"
                            >
                                {word === " " ? <span>&nbsp;</span> : word}
                            </motion.span>
                            </span>
                        );
                    })
                }
            </div>
    </AnimatePresence>
  )
}