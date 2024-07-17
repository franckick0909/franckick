"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ImageScroll({
  imgUrl,
  heading,
  subheading,
  children,
}: {
  imgUrl: string;
  heading: string;
  subheading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="relative h-[150vh] bg-white dark:bg-slate-950 px-4 md:px-8 lg:px-16 xl:px-20 py-20">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
        <div className="">{children}</div>
      </div>
    </div>
  );
}

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <motion.div
      ref={targetRef}
      className="bg-cover bg-center bg-no-repeat h-[calc(100vh-12px*2)] top-3 sticky z-0 overflow-hidden rounded-3xl"
      style={{ scale, backgroundImage: `url(${imgUrl})` }}
    >
      <motion.div style={{ opacity }} className="absolute inset-0 bg-slate-950/70" />
    </motion.div>
  );
};


const OverlayCopy = ({heading, subheading}: {heading: string, subheading: string}) => {

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["end end", "end start"]
    });
  
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 1]);

    return (
        <motion.div ref={targetRef} style={{ scale, opacity }} className="absolute left-0 top-0 flex flex-col items-center justify-center text-white h-screen w-full gap-8">
            <p className="text-center text-lg md:text-xl">{subheading}</p>
            <h1 className="text-center mb-2 text-4xl font-bold md:text-6xl">{heading}</h1>
            
        </motion.div>
    )
}