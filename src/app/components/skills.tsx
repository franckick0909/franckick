"use client";
import { useRef } from "react";
import Image from "next/image";
import { dataSkills } from "./datas/dataSkills";
import { motion, useInView } from "framer-motion";
import { TextSplit } from "./textSplit";

export default function Skills() {
  const skillRef1 = useRef(null);
  const isSkillInView1 = useInView(skillRef1, { margin: "-100px" });

  const skillRef2 = useRef(null);
  const isSkillRefInView2 = useInView(skillRef2, { margin: "-100px" });

  return (
    <section className="flex flex-col gap-4">
      <motion.div
        ref={skillRef2}
        className="flex items-baseline justify-start gap-4 overflow-hidden"
      >
        <motion.h1
          initial={{ opacity: 0, x: "-100%" }}
          animate={
            isSkillRefInView2
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: "-100%" }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-slate-950 dark:text-white uppercase font-serif mb-1"
        >
          02
        </motion.h1>
        <h2 className="text-lg md:text-xl font-normal border-collapse border-y-2 border-indigo-500 text-black dark:text-slate-200 uppercase">
          COMPÉTENCES TECHNIQUES
        </h2>
      </motion.div>

      <TextSplit
        stagger={0.02}
        delay={0.1}
        className="text-sm md:text-base text-black dark:text-white"
        texte="Voici toutes les compétences que j'ai acquisises, et avec lesquelles j'ai pu réaliser des projets."
      />
      <motion.div
        ref={skillRef1}
        className="w-full flex items-center justify-evenly flex-wrap gap-4 lg:gap-6 mt-12"
      >
        {dataSkills.map((skill, indexSkill) => (
          <motion.div
            whileHover={{ y: -5, scale: 1.1, transition: { type: "spring" } }}
            initial={{ y: "100%", opacity: 0 }}
            animate={
              isSkillInView1 ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
            }
            transition={{ type: "spring", delay: indexSkill * 0.07 }}
            key={`${skill.id}-${indexSkill}`}
            className="overflow-hidden hover:shadow-indigo-500/30 hover:shadow-lg rounded-lg transition-shadow duration-300 z-10 shadow-md"
          >
            <motion.div className="flex flex-col border border-slate-200 dark:border-slate-700 rounded-lg p-4 w-max items-center justify-center hover:border-indigo-500 transition-all duration-300 z-10">
              <Image
                src={skill.img}
                alt={skill.title}
                width={100}
                height={100}
                priority={indexSkill < 5}
                className="w-20 h-20"
              />
              <p className="text-sm md-text-base text-center text-black dark:text-white">
                {skill.title}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
