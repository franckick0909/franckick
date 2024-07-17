"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "./header";


export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeInOut" }}
          className="h-screen w-screen fixed top-0 bg-white pointer-events-none"
        />

          <Header />


        <div className="h-[100vh]" >{children}</div>
      </div>
    </AnimatePresence>
  );
};