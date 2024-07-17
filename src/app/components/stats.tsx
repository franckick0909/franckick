"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function Stats() {


  const slideDown = {
    initial: {
      y: 200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        stiffness: 100,
        type: "spring",
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const stats = [
    { title: "Années d'expériences", count: 1 },
    { title: "Projects terminés", count: 15 },
    { title: "Technologies maîtrisées", count: 10 },
    { title: "Nombres de commits", count: 184 },
  ];

  return (
    <section className="w-full h-full">
      <motion.div
        variants={slideDown}
        initial="initial"
        animate="animate"
        className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {stats.map((stat, index) => (
          <motion.div
            variants={slideDown}
            key={index}
            className="w-full flex flex-1 flex-wrap gap-0 lg:gap-2 xl:gap-4 items-center justify-start border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 shadow-inner bg-white dark:bg-slate-950 gap-x-4"
          >
            <CountUp
              start={0}
              end={stat.count}
              duration={5}
              delay={2}
              separator=" "
              decimals={0}
              decimal=","
              prefix=""
              suffix=""
              onEnd={() => { }}
              className="font-extrabold text-indigo-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
            />
            <p
              className={` ${
                stat.title.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-black/80 dark:text-white/80 paragraph`}
            >
              {stat.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};