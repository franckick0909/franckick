"use client";
import Link from "next/link";
import NavTop from "./navTop";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Toggle from "./toggle";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "Portfolio", href: "/portfolio" },
  { text: "About", href: "/about" },
  { text: "Service", href: "/service" },
  { text: "Tarifs", href: "/tarifs" },
  { text: "Contact", href: "/contact" },
];

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    close: {
      y: 0,
      rotate: 0,
      scale: [0.6, 1],
      transition: {
        when: "afterChildren",
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    open: {
      y: "0.45rem",
      rotate: 45,
      scale: 0.6,
      // backgroundColor: "white",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const middleVariants = {
    close: {
      opacity: 1,
      scale: [0, 1],
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.3,
      },
    },
    open: {
      opacity: 0,
      scale: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const bottomVariants = {
    close: {
      y: 0,
      rotate: 0,
      scale: [0.6, 1],
      transition: {
        when: "afterChildren",
        type: "spring",
        stiffness: 100,
        damping: 20,

      },
    },
    open: {
      y: "-0.5rem",
      rotate: -45,
      scale: 0.6,
      // backgroundColor: "white",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const menuVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
      },
    },
  };

  return (
    <header className="relative w-full h-full flex py-8 text-black bg-white dark:bg-slate-950 overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            FK<span className="text-indigo-500">.</span>
          </h1>
        </Link>

        {/* Dark mode */}

        <div className="flex h-full items-end justify-start w-full ml-8">
          <Toggle />
        </div>

        {/* Menu on top */}
        <div className="w-full max-lg:hidden">
          <NavTop />
        </div>

        <div className="">
          {/* Burger button */}
          {/* DESKTOP MENU 3 traits */}
          <motion.div className="fixed top-4 right-4 max-xl:right-8 z-[51]">
            <motion.button
              aria-label="Menu"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                borderRadius: ["30%", "50%"],
              }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 1 }}
              className="h-16 w-16 max-lg:h-12 max-lg:w-12 bg-black dark:bg-white  shadow flex flex-col justify-center items-center gap-[5px] z-50 relative"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="absolute flex items-center justify-center h-14 w-14 max-lg:h-10 max-lg:w-10 rounded-full ring-1 ring-indigo-500 "></div>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col justify-center items-center gap-[5px] z-50 relative"
              >
                <motion.div
                  variants={topVariants}
                  animate={isOpen ? "open" : "close"}
                  className="w-10 max-lg:w-7 h-[2px] bg-white dark:bg-black rounded"
                ></motion.div>
                <motion.div
                  variants={middleVariants}
                  animate={isOpen ? "open" : "close"}
                  className="w-10 max-lg:w-7 h-[2px] bg-white dark:bg-black rounded"
                ></motion.div>
                <motion.div
                  variants={bottomVariants}
                  animate={isOpen ? "open" : "close"}
                  className="w-10 max-lg:w-7 h-[2px] bg-white dark:bg-black rounded"
                ></motion.div>
              </motion.div>
            </motion.button>
          </motion.div>
          {/* Menu Mobile */}

          <AnimatePresence>
            {isOpen && (
              <motion.nav
                variants={menuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed left-0 top-0 w-full h-screen z-50 p-10 bg-black flex justify-center items-center origin-top"
              >
                <div className="h-full flex flex-col justify-center items-start w-3/4">
                  <div className="flex items-center justify-between w-full mb-4 border-x-transparent border-y-slate-400 border-y-[0.5px] py-6 text-base text-slate-400 ">
                    <p>Navigation</p>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-base text-slate-400"
                    >
                      Close
                    </button>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full w-full justify-center gap-0"
                  >
                    {navLinks.map((link, index) => {
                      return (
                        <div key={index} className="overflow-hidden">
                          <MobileNavLink link={link.text} href={link.href} />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

const mobileLinkVars = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const MobileNavLink = ({ link, href }: {link: string, href: string}) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="relative group"
    >
      <span className="w-full rounded bg-gradient-to-r to-transparent via-slate-950 from-slate-800 absolute bottom-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full z-[-1] scale-y-0 group-hover:scale-y-75 bg-origin-content cursor-pointer "></span>
      <Link
        href={href}
        className="cursor-pointer z-[3000] text-white uppercase w-full group-hover:tracking-widest ease-linear duration-300 font-serif text-4xl md:text-6xl lg:text-8xl xl:text-9xl"
      >
        {link}
      </Link>
    </motion.div>
  );
};
