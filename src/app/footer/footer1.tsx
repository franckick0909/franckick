"use client";
import ContentFooter from "./contentFooter";
import { motion } from "framer-motion";

export default function Footer1() {
  return (
    <motion.section className="relative h-[80vh] mt-96" style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}>
      <div className="fixed h-[800px] w-full bottom-0">
        <ContentFooter />
      </div>
    </motion.section>
  );
};