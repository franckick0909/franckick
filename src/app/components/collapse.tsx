"use client";
import Image from "next/image";
import { useState } from "react";
import {
  useMotionValue,
  motion,
  useSpring,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import React, { useRef } from "react";
import { FaExpand, FaXmark } from "react-icons/fa6";
import Heading from "./heading";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function Collapse({
  title,
  stack,
  date,
  num,
  imgProjet,
  images,
  desc,
  theme,
  href,
  github,
}: {
  title: string;
  stack: string;
  date: string;
  num: string;
  imgProjet: string;
  images: { id: string; url: string }[];
  desc: string;
  theme: string;
  href: string;
  github: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["5%", "95%"]);

  const handleMouseMove = (e: any) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    if (!isNaN(xPct) && !isNaN(yPct)) {
      x.set(xPct);
      y.set(yPct);
    }
  };

  const [openCollapse, setOpenCollapse] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [borderColor, setBorderColor] = useState("black");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  {
    /* MODAL */
  }
  const handleOpenModal = (image: { url: string }) => {
    setSelectedImage(image.url);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleCollapse = () => {
    setOpenCollapse(!openCollapse);
    setBorderColor(openCollapse ? "black" : "indigo-500");
  };

  const list = {
    visible: {
      height: "auto",
      transition: {
        duration: 0.4,
      },
    },
    hidden: {
      height: 0,
      transition: {
        delay: 0.4,
        duration: 0.3,
      },
    },
  };

  const item = {
    visible: {
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        staggerDirection: -1,
      },
    },
    hidden: {
      y: 300,
      transition: {
        duration: 0.5,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const itemHover = {
    hiddenHover: {
      scale: 0,
      rotate: "-12.5deg",
      transition: {
        duration: 0.3,
      },
    },
    visibleHover: {
      scale: 1,
      rotate: "12.5deg",
      transition: {
        duration: 0.5,
        type: "spring",
      },
    },
  };

  const modaleVariants = {
    initial: {
      opacity: 0,
      y: 400,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const collapses = useRef(null);
  const isCollapseInView = useInView(collapses, { margin: "-100px" });

  return (
    <>
      <AnimatePresence>
        <motion.section ref={ref} className="">
          <motion.div
            ref={collapses}
            initial={{ opacity: 0, x: 200 }}
            animate={
              isCollapseInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }
            }
            transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
            className={`relative w-full h-auto flex flex-col gap-2 border-t-[2px] dark:border-t-[1.5px] border-${borderColor} dark:border-indigo-950 pt-1 pb-1`}
            onClick={handleCollapse}
          >
            <motion.div
              initial="initial"
              whileHover="whileHover"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              className="border-separate max-w-full w-full items-center justify-between gap-4 flex max-md:flex-col max-md:items-start h-auto bg-white dark:bg-slate-950/10 rounded-b-md p-4 shadow-inner dark:shadow dark:shadow-slate-900 shadow-indigo-500/30 border-black dark:border-white overflow-hidden"
            >
              <div className="flex-[2] h-full flex items-center w-full justify-start">
                <Heading heading={title} subheading={num} />
                <motion.div
                  onClick={handleCollapse}
                  variants={{
                    initial: {
                      x: "25%",
                      opacity: 0,
                    },
                    whileHover: {
                      x: "0%",
                      opacity: 1,
                    },
                  }}
                  transition={{ type: "spring" }}
                  className=" z-10 p-2 max-md:flex hidden justify-end flex-1 w-full"
                >
                  <FiArrowRight className="text-3xl text-neutral-600 dark:text-neutral-300 " />
                </motion.div>
              </div>
              <motion.div
                style={{
                  top,
                  left,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                variants={itemHover}
                initial="hiddenHover"
                animate={hovered ? "visibleHover" : "hiddenHover"}
                exit="hiddenHover"
                className="absolute top-[50%] left-[50%] rounded-lg z-40 bg-white  transform -translate-x-1/2 -translate-y-1/2 h-24 w-32 md:h-48 md:w-64"
              >
                <Image
                  src={imgProjet}
                  alt="projet"
                  width={512}
                  height={384}
                  className="h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
                />
              </motion.div>

              <div className="flex max-md:flex items-center max-md:justify-between max-md:w-full flex-1">
                <div className="flex-1 h-full flex items-center justify-start w-full">
                  <p className="text-xs md:text-base text-black dark:text-white">
                    {stack}
                  </p>
                </div>
                <div className="flex-1 h-full flex items-center justify-center w-full max-md:justify-end">
                  <h3 className="text-md lg:text-lg xl:text-xl text-black dark:text-white">
                    {date}
                  </h3>
                </div>
              </div>
              <div className="flex-1 h-full flex items-center justify-end w-full max-md:hidden">
                <motion.div
                  onClick={handleCollapse}
                  variants={{
                    initial: {
                      x: "25%",
                      opacity: 0,
                    },
                    whileHover: {
                      x: "0%",
                      opacity: 1,
                    },
                  }}
                  transition={{ type: "spring" }}
                  className="relative z-10 p-4"
                >
                  <FiArrowRight className="text-5xl text-neutral-600 dark:text-neutral-300" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className={`w-full h-auto overflow-hidden max-md:text-sm text-base rounded-md ${
                openCollapse ? "h-auto" : "h-0"
              }`}
              variants={list}
              initial="hidden"
              animate={openCollapse ? "visible" : "hidden"}
            >
              <motion.div
                className="w-full h-max px-4 py-4 bg-slate-950 dark:bg-white rounded-md overflow-hidden max-md:text-sm text-base  grid grid-cols-1 lg:grid-cols-3 gap-4"
                variants={item}
              >
                {/* IMAGES */}
                <motion.div
                  className="gap-2"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(120px, 1fr))",
                  }}
                  variants={item}
                >
                  {images.map((image) => (
                    <div
                      className="relative w-full overflow-hidden ring-1 ring-indigo-5000/50 rounded-sm"
                      key={image.id}
                    >
                      <button
                        title="Ouvrir la Modale"
                        className="absolute inset-0 opacity-0 hover:opacity-100 hover:bg-indigo-500/50 transition-all duration-300 text-white text-sm flex items-center justify-center"
                        type="button"
                        onClick={() => handleOpenModal(image)}
                      >
                        <FaExpand className="w-8 h-8" />
                      </button>

                      <div className=" h-full ">
                        <Image
                          src={image.url}
                          alt="projet"
                          width={1000}
                          height={1000}
                          className="object-cover"
                          style={{ width: "100%", height: "100%" }}
                        />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* NAVIGATION */}
                <motion.div
                  className="w-full h-full p-4 rounded-md"
                  variants={item}
                >
                  <h5 className="text-white dark:text-black h5 bold uppercase pb-1">
                    Navigation
                  </h5>
                  <div className=" border-indigo-500 mb-4 border-solid border-b-[1px]"></div>

                  <div className="flex gap-4 items-start flex-col flex-wrap mt-4 uppercase w-full h-auto">
                    <p className="text-white dark:text-black">
                      <span className="text-indigo-500">*</span> {theme}
                    </p>

                    <Link
                      target="_blank"
                      rel="noreferrer"
                      title="Voir le code source"
                      href={github}
                      className="font-extralight lowercase hover:underline text-pretty text-white dark:text-black underline-offset-4 text-base"
                    >
                      {github ? github : ""}
                    </Link>
                    <Link
                      target="_blank"
                      rel="noreferrer"
                      title="Voir le site"
                      href={href}
                      className="font-extralight lowercase hover:underline text-pretty text-white dark:text-black underline-offset-4 text-base"
                    >
                      {href ? href : ""}
                    </Link>
                  </div>
                </motion.div>

                {/* DESCRIPTION */}
                <motion.div
                  className="w-full h-full p-4 rounded-md bg-slate-950 dark:bg-white max-md:text-sm text-base"
                  variants={item}
                >
                  <h4 className="text-white dark:text-black h5 bold uppercase pb-1">
                    DESCRIPTION
                  </h4>
                  <div className="border-indigo-500 mb-4 border-b-[0.5px]"></div>
                  <p className="paragraph text-white dark:text-black">{desc}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* MODAL */}

        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-40"
          >
            <motion.div
              variants={modaleVariants}
              initial="initial"
              animate="animate"
              exit="initial"
              className="relative bg-white p-4 rounded-xl shadow-lg mx-4 my-10 max-w-[80vw] max-h-[90vh] w-full flex flex-col gap-4"
            >
              <h2>{title}</h2>
              <div className="w-full h-full rounded-xl overflow-hidden">
                <Image
                  key={selectedImage}
                  src={selectedImage}
                  alt="projet"
                  width={1200}
                  height={1200}
                  className="rounded-md object-cover aspect-auto"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-base text-black dark:text-white p-1 rounded-md hover:rotate-180 transition-all duration-300"
                title="Fermer la Modale"
              >
                <FaXmark className="w-7 h-7" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}