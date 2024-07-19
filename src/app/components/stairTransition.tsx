"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Stairs from "./stairs";

export default function StairTransition() {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={key}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 bottom-0 pointer-events-none flex z-50 text-white font-playfair">
            <Stairs />
            <motion.div
              key={key}
              className="fixed m-auto top-0 bottom-0 left-0 right-0 z-50 text-white text-8xl cursor-default w-fit h-fit text-[48px] lg:text-[70px] xl:text-[100px] leading-[1.1] font-bold uppercase"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.09, duration: 1, ease: "easeOut" }}
            >
              {pathname.substring(1)}
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};