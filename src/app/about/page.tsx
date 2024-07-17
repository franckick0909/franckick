"use client";
import Layout from "@/app/components/layout";
import Skills from "../components/skills";
import Biographie from "../components/biographie";
import Cerveau from "../components/cerveau";
import { motion } from "framer-motion";
import { SvgScroll } from "../components/svgScroll";
import Timeline from "../components/timeline";
import { AnimatedText } from "../components/animatedText";
import Link from "next/link";

export default function About() {
  return (
    <Layout>
      <section className="w-full min-h-screen relative bg-white dark:bg-slate-950">
        <div className="flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 text-xl py-14 relative">
          <div className="relative w-full h-[30vh] flex flex-col items-start justify-center text-start ">
            <AnimatedText
              stagger={0.05}
              delay={0.8}
              className="relative text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white uppercase"
              text="A propos de moi"
            />
          </div>

          <motion.div className="relative grid lg:grid-cols-2 gap-8 mt-14 ">
            <div className="grid gap-20 w-full relative">
              <Biographie />
              <div className="flex justify-center items-center">
                <SvgScroll className="w-20 text-center" />
              </div>

              <Skills />
              <div className="flex justify-center items-center">
                <SvgScroll className="w-20 text-center" />
              </div>

              <Timeline />
            </div>

            <div className="relative">
              <div className="hidden lg:block sticky top-40">
                <Cerveau />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
