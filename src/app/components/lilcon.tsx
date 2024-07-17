"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

export default function Lilcon({ reference }: { reference: React.RefObject<HTMLDivElement> }) {


const { scrollYProgress } = useScroll({
target: reference,
offset: ["center end", "center center"]
})


  return (
    <figure className="absolute -left-[2.2rem] stroke-slate-950 dark:stroke-white">
      <svg className="-rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="15" className="stroke-indigo-500 stroke-1 fill-none" />
        <motion.circle
        style={{ pathLength: scrollYProgress }}
         cx="75" cy="50" r="20" className="stroke-[4px] fill-white dark:fill-black" />
        <circle cx="75" cy="50" r="10" className="stroke-1 fill-indigo-500 animate-pulse" />
      </svg>
    </figure>
  );
}