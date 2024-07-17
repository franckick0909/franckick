"use client";

import AnimatedLink from "./animatedLink";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavTop() {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "About", href: "/about" },
    { text: "Service", href: "/service" },
    { text: "Tarifs", href: "/tarifs" },
    { text: "Contact", href: "/contact" },
  ];

  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-end uppercase gap-8 text-base mr-24 overflow-hidden">
        {navLinks.map((link, index) => {
          return (
            <motion.div key={index} className="relative overflow-hidden">
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "text-indigo-500"
                    : "text-black dark:text-white"
                } font-medium hover:text-indigo-500 dark:hover:text-indigo-400 transition-all`}
              >
                <AnimatedLink title={link.text} />
              </Link>
            </motion.div>
          );
        })}
      </div>
      
    </>
  );
};