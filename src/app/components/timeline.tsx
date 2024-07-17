"use client";
import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";
import { dataTimeline } from "./datas/dataTimeline";
import Lilcon from "./lilcon";

type DetailsProps = {
  position: string;
  compagny: string;
  compagnyLink: string;
  time: string;
  adresse: string;
  work: string;
  diplome: string;
  obtenu: React.ReactNode;
};

const Details = ({
  position,
  compagny,
  compagnyLink,
  time,
  adresse,
  work,
  diplome,
  obtenu,
}: DetailsProps) => {
  const boxRef = useRef(null);
  const isboxInView = useInView(boxRef, { margin: "-70px" });

  const container = useRef(null);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  return (
    <li
      ref={container}
      className="first:mt-0 last:mb-0 flex flex-col items-start ml-6 overflow-hidden rounded-md bg-black max-w-[33rem]"
    >
      <div className="z-10">
        <Lilcon reference={container} />
      </div>

      <motion.div
     ref={ref}
        style={{ scaleY: scrollYProgress }}
        className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-950 dark:bg-white origin-top  rounded-full"
      />

      <motion.div
        ref={boxRef}
        initial={{ x: "-50%" }}
        animate={isboxInView ? { x: 0 } : { x: "-50%" }}
        transition={{ duration: 0.5 }}
        className="relative max-w-[33rem] h-auto p-4 border border-slate-200 dark:border-slate-700 rounded-md shadow-inner bg-white dark:bg-slate-950"
      >
        <h4 className="text-base md:text-lg xl:text-xl flex flex-wrap capitalize font-semibold text-black dark:text-white">
          {position}&nbsp;
          <a href={compagnyLink} target="_blank" className="text-indigo-500">
            @{compagny}
          </a>
        </h4>
        <span className="capitalize font-semibold text-indigo-700 dark:text-indigo-500 text-sm">
          {time}
        </span>
        &nbsp;|&nbsp;
        <span className="text-base md:text-lg capitalize font-normal text-slate-800 dark:text-slate-300">
          {adresse}
        </span>
        <p className="text-base md:text-lg text-slate-950 dark:text-slate-200">
          {work}
        </p>
        <p className="text-base font-semibold text-slate-950 dark:text-slate-200 flex items-center">
          {diplome}&nbsp;
          <span className="text-indigo-700 dark:text-indigo-500">{obtenu}</span>
        </p>
      </motion.div>
    </li>
  );
};

export default function Timeline() {

  const TimelineRef = useRef(null);
  const isTimelineRefInView = useInView(TimelineRef, { margin: "-100px" });


  return (
    <motion.section className="relative flex flex-col gap-20 justify-start items-start pr-4 mb-10 h-[200vh] sm:h-[170vh] md:h[180vh] lg:h-[230vh]">
      <motion.div
        ref={TimelineRef}
        className="flex items-baseline justify-start gap-4 overflow-hidden w-full "
      >
        <motion.h1
          initial={{ opacity: 0, x: "-100%" }}
          animate={
            isTimelineRefInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: "-100%" }
          }
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold text-slate-950 dark:text-white uppercase font-serif mb-8"
        >
          03
        </motion.h1>
        <h2 className="text-lg md:text-xl font-normal border-collapse border-y-2 border-indigo-500 text-black dark:text-slate-200 uppercase">
          Timeline
        </h2>
      </motion.div>



      <ul className="relative flex flex-col gap-12 w-full h-full mb-10">
        {dataTimeline.map((items, id) => (
          <Details
            key={id}
            {...items}
            position={items.position}
            compagny={items.compagny}
            compagnyLink={items.compagnyLink}
            time={items.time}
            adresse={items.adresse}
            work={items.work}
            diplome={items.diplome}
            obtenu={items.obtenu}
          />
        ))}
      </ul>
    </motion.section>
  );
}