"use client";
import { dataTarifs } from "../components/datas/dataTarifs";
import Card from "../components/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Layout from "../components/layout";
import { AnimatedText } from "../components/animatedText";
import { TextSplit } from "../components/textSplit";
import Footer2 from "../footer/footer2";


export default function Tarifs() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <Layout>
      <motion.main
        ref={container}
        className="relative mb-[10vh] bg-white dark:bg-slate-950"
      >
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6 mb-[10vh] px-[5vw] text-xl py-14">
            <div className="relative w-full h-[30vh] flex flex-col items-center justify-center text-center">
              <AnimatedText
                stagger={0.05}
                delay={0.8}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white uppercase"
                text="Nos Tarifs"
              />

              <TextSplit
                stagger={0.03}
                delay={0.8}
                className="text-slate-950 dark:text-white text-xs md:text-base lg:text-lg xl:text-xl"
                texte="Découvrez nos différentes offres et choisissez celle qui vous convient le mieux."
              />
            </div>
          </div>
          
          {dataTarifs.map((tarif, i) => {
            const targetScale = 1 - (dataTarifs.length - i) * 0.05;
            return (
              <Card
                key={i}
                i={i}
                {...tarif}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}

        <div className="relative w-full h-[100vh] bg-slate-950 dark:bg-white overflow-hidden">
          <Footer2 />
        </div>
      </motion.main>
    </Layout>
  );
}
