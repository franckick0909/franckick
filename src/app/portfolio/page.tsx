"use client";

import Collapse from "@/app/components/collapse";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { RiListSettingsLine } from "react-icons/ri";
import { AnimatedText } from "../components/animatedText";
import { dataProjet } from "../components/datas/dataProjets";
import Layout from "../components/layout";

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Tous");

  const filteredProjects =
    filter === "Tous"
      ? dataProjet
      : dataProjet.filter((p) => p.theme === filter);

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  const filters = useRef(null);
  const isFilterInView = useInView(filters, { margin: "-50px" });

  return (
    <Layout>
      <AnimatePresence>
        <motion.section className="w-full min-h-screen relative bg-white dark:bg-slate-950 overflow-hidden">
          <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14">
            <div className="relative w-full h-[30vh] flex flex-col items-start justify-center text-start ">
              <AnimatedText
                stagger={0.05}
                delay={0.8}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white uppercase "
                text="Mes Projets"
              />
            </div>

            <article
              ref={filters}
              className="flex justify-between gap-4 max-lg:flex-col w-full h-auto"
            >
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: -300 }}
                  animate={
                    isFilterInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -300 }
                  }
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    delay: 0.2,
                    stiffness: 100,
                    damping: 20,
                  }}
                  className="max-w-full lg:w-56 p-4 rounded-lg mt-0 bg-white dark:bg-slate-950/10  border border-slate-200 dark:border-slate-900 shadow-inner dark:shadow dark:shadow-slate-900 shadow-indigo-500/30"
                >
                  <div className="">
                    <h4 className="h4 font-poppins mb-4 text-black dark:text-white flex items-center justify-between">
                      Filtres
                      <span>
                        <RiListSettingsLine />
                      </span>
                    </h4>
                  </div>
                  <div className="border-b-[0.5px] border-indigo-100 mb-8"></div>
                  <div className="grid grid-cols-2 md:grid-cols-1 place-content-start place-items-start gap-2">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Tous")}
                      className={` rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Tous"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Tous
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Site Portfolio")}
                      className={` rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Site Portfolio"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Site Portfolio
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Site Vitrine")}
                      className={`rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Site Vitrine"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Site Vitrine
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Site Ecommerce")}
                      className={` rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Site Ecommerce"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Site Ecommerce
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Site Evènement")}
                      className={` rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Site Evènement"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Site Evènement
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Site Personnel")}
                      className={`rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Site Personnel"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Site Personnel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setFilter("Site Entreprise")}
                      className={`rounded-sm flex w-full text-xs md:text-base hover:bg-indigo-500 hover:text-white px-4 py-2 transition-color duration-300 ${
                        filter === "Site Entreprise"
                          ? "bg-indigo-500 text-white"
                          : "bg-indigo-500/10 text-black dark:bg-indigo-500/10 dark:text-white"
                      }`}
                    >
                      Site Entreprise
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              <motion.div className="w-full flex flex-col gap-6 flex-1 rounded-lg ">
                {filteredProjects.map((projet) => (
                  <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    key={projet.id}
                    className=""
                  >
                    <Collapse
                      num={projet.num}
                      title={projet.title}
                      stack={projet.stack}
                      date={projet.date}
                      imgProjet={projet.image}
                      images={projet.images.map((img) => ({
                        id: img.id,
                        url: img.url,
                      }))}
                      theme={projet.theme}
                      desc={projet.desc}
                      href={projet.href}
                      github={projet.github}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </article>
          </div>
        </motion.section>
      </AnimatePresence>
    </Layout>
  );
}