"use client";

import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedLink ({title}: {title: string}) {

  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative cursor-pointer">
      <AnimatedWord
        title={title}
        animation={letterAnimation}
        isHovered={isHovered}
        />
      
      <motion.div className="absolute top-0 bottom-0 left-0">
        <AnimatedWord
          title={title}
          animation={letterAnimationTwo}
          isHovered={isHovered}
          />
          
        </motion.div>
    </motion.div>
  );
}


const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  }, hover: {
    y: -30,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
  },
};

const AnimatedWord = ({ title, animation, isHovered }: {title: string, animation: any, isHovered: boolean}) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative">
      {title
        .split("")
        .map((charactere: string, i: number) =>
        charactere === " " ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <motion.span
            variants={animation}
            key={i}
            className="relative inline-block whitespace-nowrap">
            {charactere}
          </motion.span>
        )
      )}
    </motion.span>
  );
};