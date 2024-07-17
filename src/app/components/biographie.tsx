"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import { TextSplit } from "./textSplit";


export default function Biographie() {

  const bioRef = useRef(null);
  const isBioRefInView = useInView(bioRef, { margin: "-100px" });

  return (
    <section className="relative flex flex-col gap-20 justify-center items-center">
              <motion.div ref={bioRef} className="flex items-baseline justify-start gap-4 overflow-hidden w-full" style={{ position: 'relative' }} >
                <motion.h1
                  initial={{ opacity: 0, x: "-100%" }}
                  animate={
                    isBioRefInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: "-100%" }
                  }
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-slate-950 dark:text-white uppercase font-serif mb-1"
                >
                  01
                </motion.h1>

                <h2 className="text-lg md:text-xl font-normal border-collapse border-y-2 border-indigo-500 text-black dark:text-slate-200 uppercase">
                  Biographie
                </h2>
              </motion.div>


      <TextSplit
        stagger={0.02}
        delay={0.1}
        className="text-sm md:text-base text-black dark:text-white"
        texte="Je suis un développeur web full stack passionné par la création de sites web et d'applications web. J'ai une expérience de plus de 5 ans dans le développement web. J'ai travaillé sur des projets allant de simples sites web à des applications web complexes. J'ai une solide expérience dans le développement de sites web responsives, de sites web e-commerce et d'applications web personnalisées."
      />

      <div className="relative w-full bg-slate-950 dark:bg-white rounded-lg flex max-lg:flex-col items-center flex-wrap gap-12 shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
        <div className="flex flex-col gap-4 text-base lg:text-lg flex-[2]">
          <div className="grid grid-cols-2 items-center gap-4 md:gap-10 w-full h-full">
            <p className="font-medium text-white dark:text-black">
              <span className="mr-2 text-indigo-500 dark:text-indigo-700 dark:font-bold">
                &#10003;
              </span>
              Prénom:
            </p>
            <p className="text-indigo-400 dark:text-black">
              Franck Chapelon
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 md:gap-10">
            <p className="font-medium text-white dark:text-black">
              <span className="mr-2 text-indigo-500 dark:text-indigo-700 dark:font-bold">
                &#10003;
              </span>
              Age:
            </p>
            <p className="text-indigo-400 dark:text-black">48 ans</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 md:gap-10">
            <p className="font-medium text-white dark:text-black">
              <span className="mr-2 text-indigo-500 dark:text-indigo-700 dark:font-bold">
                &#10003;
              </span>
              Nationnalité:
            </p>
            <p className="text-indigo-400 dark:text-black">Français</p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 md:gap-10">
            <p className="font-medium text-white dark:text-black">
              <span className="mr-2 text-indigo-500 dark:text-indigo-700 dark:font-bold">
                &#10003;
              </span>
              Emplacement:
            </p>
            <p className="text-indigo-400 dark:text-black">
              Dordogne, France
            </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4 md:gap-10 relative group">
            <p className="font-medium text-white dark:text-black">
              <span className="mr-2 text-indigo-500 dark:text-indigo-700 dark:font-bold">
                &#10003;
              </span>
              Freelance:
            </p>
            <p className="group relative">
              <span className="px-1 relative z-10 group-hover:text-white text-indigo-400 dark:text-black">
                Disponible
              </span>
              <span className="absolute left-0 bottom-0 w-[6rem] h-0.5 transition-all bg-emerald-500 z-0 group-hover:h-full rounded"></span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-end flex-1 rounded-full">
          <Image
            src="/img/lunette.jpg"
            alt="Image de fond"
            width={200}
            height={200}
            priority={true}
            className="object-cover rounded-full aspect-square"
          />
        </div>
      </div>
      <q className=" font-normal text-slate-950 dark:text-indigo-500">
        Programmeur : Une machine qui transforme le café&#9749; en code&#128187;. 
      </q>

<div className="flex gap-8">
      <Link href="/img/CV.pdf" target="_blank" download="CV_Franck_Chapelon.pdf">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="rounded-full bg-indigo-700 px-6 py-2 text-sm md:text-base font-medium text-white flex items-center justify-center gap-2 group overflow-hidden "
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key="unique-key-button"
        >
          Télécharger mon CV
          <FaDownload className="text-sm md:text-base transition-all duration-300 translate-x-10 group-hover:translate-x-0" />
        </motion.button>
      </Link>

      <Link href="/contact">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="rounded-full bg-indigo-700 px-6 py-2 text-sm md:text-base font-medium text-white flex items-center justify-center gap-2 group overflow-hidden "
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          key="unique-key-button"
        >
          Me contacter
          <FaEnvelope className="text-sm md:text-base transition-all duration-300 translate-x-10 group-hover:translate-x-0" />
        </motion.button>
        </Link>
      </div>
    </section>
  );
}