"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useRef } from "react";
import { FaCheck } from "react-icons/fa6";
import { motion,useScroll, useTransform } from "framer-motion";
import { MotionValue } from "framer-motion";

interface CardProps {
  progress: MotionValue;
  range: number[];
  targetScale: number;
  i: number;
  title: string;
  subtitle: string;
  description: string;
  couleur: string;
  hebergement?: string;
  responsive: string;
  contenu: string;
  form: string;
  reseaux: string;
  seo: string;
  onligne?: string | null;
  tarif: string;
  color: string;
  image: string;
}

export default function Card({
  progress,
  range,
  targetScale,
  i,
  title,
  subtitle,
  description,
  couleur,
  hebergement,
  responsive,
  contenu,
  form,
  reseaux,
  seo,
  onligne,
  tarif,
  color,
  image,
}: CardProps) {


  const container = useRef(null);
const { scrollYProgress } = useScroll({
  target: container,
  offset: ["start end", "start start"],
});

const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <motion.div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div
        className={`relative w-[1200px] h-[calc(60%+10%)] rounded-2xl overflow-hidden shadow-md ${color} p-6 container flex gap-4 max-lg:flex-col`} style={{ scale, top: `calc(-10% + ${i * 25}px)`}}
      >
        <div className="flex flex-col flex-1 rounded-md border border-white p-4  items-start justify-start gap-2">
          <h3 className="text-2xl md:text-3xl font-semibold text-white">{title}</h3>
          <p className="text-base md:text-lg text-white">{subtitle}</p>
          <h4 className="text-xl md:text-2xl font-bold text-black">{tarif}</h4>

          <div className="grid gap-3 text-sm md:text-base mt-8 text-white">
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{description}</span>
            </div>
            <div className="flex items-center gap-2">
            <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{couleur}</span>
            </div>
            <div className="flex items-center gap-2">
            <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{hebergement}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{responsive}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{contenu}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{form}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{reseaux}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{seo}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCheck className="h-4 w-4 text-indigo-700" />
              <span>{onligne}</span>
            </div>
          </div>

            <button className="w-full bg-slate-950 text-white p-2 rounded-md hover:bg-slate-800 transition-all duration-300 mt-4">
              Choisir
            </button>
          </div>

        <div className="overflow-hidden w-full h-full rounded-lg flex flex-1">
        <motion.div style={{ scale: imageScale }} className="relative group flex overflow-hidden rounded-lg w-full">
          <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
            <span className="sr-only">View</span>
          </Link>
          <Image
            src={image}
            alt="Cover image"
            width={600}
            height={600}
            priority
            className="object-cover w-full h-full group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 "
          />
          <div className="h-full w-full absolute bg-black/50 scale-y-0 group-hover:scale-y-100 origin-bottom group-hover:opacity-100 transition-all text-white p-4 lg:p-8 bottom-0 left-0 justify-center flex flex-col gap-2 duration-400 ">
            <h3 className="font-semibold tracking-tight text-center">
              Découvrez nos offres
            </h3>
            <p className="text-sm md:text-base leading-none text-center">
              Choisissez le forfait qui vous convient le mieux.
            </p>
          </div>
        </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}