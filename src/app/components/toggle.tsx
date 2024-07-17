"use client";

import { FaSun, FaMoon } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Toggle() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setIsDarkMode(theme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-[4.1rem] h-8 flex items-center justify-center rounded-full relative bg-white dark:bg-white border border-slate-200 shadow-inner shadow-indigo-500/30">
      <button
        className="focus:outline-none rounded-full transition-transform duration-300 ease-in-out absolute top-0 left-0"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Activate light mode" : "Activate dark mode"}
      >
        <motion.div
          className="absolute bg-white shadow-indigo-900 shadow-sm rounded-full p-[2px] top-[0.5px] left-0"
          layout
          animate={{
            x: isDarkMode ? 0 : 34, // Animate X position based on darkMode
            transition: {
              type: "spring", // Use a spring animation for a smooth effect
              stiffness: 500, // Adjust stiffness for desired bounceiness
              damping: 20, // Adjust damping for smoothness
            },
          }}
        >
          {isDarkMode ? (
            <FaSun size={22} className="text-yellow-400" />
          ) : (
            <FaMoon size={22} className="text-indigo-500" />
          )}
        </motion.div>
      </button>
    </div>
  );
};