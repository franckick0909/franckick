"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const stairsVariants = {
  animate: {
    height: "0vh",
  },
  exit: {
    height: "120vh",
  },
};

export default function Stairs() {
  const [totalBandes, setTotalBandes] = useState(7);

  const updateBandes = useCallback(() => {
    if (window.innerWidth <= 375) {
      setTotalBandes(1);
    } else if (window.innerWidth <= 768) {
      setTotalBandes(4);
    } else {
      setTotalBandes(7);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateBandes);
    updateBandes(); // Initial call

    return () => window.removeEventListener('resize', updateBandes);
  }, [updateBandes]);

  const reverseIndex = (index: number) => totalBandes - index - 1;

  const calculateDelay = (index: number) => {
    const baseDelay = 0.1;
    return reverseIndex(index) * baseDelay * (7 / totalBandes);
  };

  return (
    <>
      {[...Array(totalBandes)].map((_, index) => (
        <motion.div
          key={`stair-${index}`} // Utilisation d'une clé unique combinant un préfixe et l'index
          variants={stairsVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.3,
            delay: calculateDelay(index),
            ease: [0.37, 0, 0.63, 1],
          }}
          className="w-full h-screen bg-black relative"
        />
      ))}
    </>
  );
};