"use client";

import Stats from "../components/stats";
import { AnimatedText } from "../components/animatedText";
import { motion } from "framer-motion";
import { LetterSplit2 } from "../components/letterSplit2";
import PhraseSplit from "../components/phraseSplit";


export default function Hero() {
  return (
    <motion.section className=" w-full h-[calc(100vh-6rem)] relative bg-white dark:bg-slate-950">
      <div className="w-full h-full mx-auto overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 grid grid-cols-1 place-content-between">
        <div className="w-full h-full flex max-lg:flex-col justify-between mt-[40px] gap-4">
          <div className=" flex flex-col flex-[2]">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-semibold text-slate-950 dark:text-slate-100 uppercase">
              <LetterSplit2
                phrase="Développeur &nbsp;"
                delay={0.08}
                className="text-slate-950 dark:text-slate-100 tracking-tighter overflow-hidden"
              />
              <br />
              <PhraseSplit
                phrases="Front-End"
                className="text-slate-950 dark:text-white tracking-tighter overflow-hidden"
                delay={0.09}
              />
            </h1>
          </div>

          <div className="flex flex-1 flex-col justify-between h-[70vh] gap-10">
            <div className="flex flex-col flex-1 mt-10 max-lg:justify-center text-black dark:text-slate-200 w-full">
              <div className="flex">
                <PhraseSplit
                  phrases="Je suis un Développeur web, basé en "
                  className="text-black dark:text-slate-200"
                  delay={0.01}
                />
              </div>

              <div className="flex">
                <PhraseSplit
                  phrases="Aquitaine France. Je suis passionné"
                  className="text-black dark:text-slate-200"
                  delay={0.01}
                />
              </div>

              <div className="flex">
                <PhraseSplit
                  phrases="par la conception web depuis que ça"
                  className="text-black dark:text-slate-200"
                  delay={0.01}
                />
              </div>
              <div className="flex">
                <PhraseSplit
                  phrases="existe, et j'aime créer sur tous supports."
                  className="text-black dark:text-slate-200"
                  delay={0.01}
                />
              </div>
            </div>
            <div className="w-full flex-1 flex max-lg:justify-end">
              <PhraseSplit
                phrases={"Freelance"}
                className="text-slate-950 dark:text-slate-300 overflow-hidden font-semibold text-5xl uppercase max-w-[28rem]"
                delay={0.01}
              />
          
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center mb-10">
          <Stats />
        </div>
      </div>

      {/* <div className="w-full mt-4 sm:mt-10 md:mt-20 lg:mt-32"> */}

      {/* <div className="mb-96">
            <TextParallax />
          </div> */}
    </motion.section>
  );
}
