"use client";
import { motion } from "framer-motion";
import ContentFooter from "./contentFooter";
import { FlipLink } from "../components/flipLink";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer2 = () => {
  return (
    <motion.section
      className="relative h-screen bg-slate-950 dark:bg-white"
      style={{ clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px] -top-[100vh]">
        <div className="sticky top-[calc(100vh-800px)] h-[800px]">
          <ContentFooter />

          <div className="grid place-content-center place-items-start gap-8 px-8 mt-20  text-indigo-500 min-h-screen w-full">

            <div className="flex items-center group">
              <FlipLink href="#" className="group-hover:text-cyan-500 transition-all duration-300">Twitter</FlipLink>
              <motion.span className="text-white text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ml-6 md:ml-10 lg:ml-14 xl:ml-20 group-hover:text-cyan-500 transition-all duration-300">
                <FaTwitter className="translate-x-[50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
              </motion.span>
            </div>
            <div className="flex items-center group">
              <FlipLink href="#" className="group-hover:text-blue-500 transition-all duration-300">Linkedin</FlipLink>
              <span className="text-white text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ml-6 md:ml-10 lg:ml-14 xl:ml-20 group-hover:text-blue-500 transition-all duration-300">
                <FaLinkedin className="translate-x-[50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
              </span>
            </div>
            <div className="flex items-center group">
              <FlipLink href="#" className="group-hover:text-violet-500 transition-all duration-300">Facebook</FlipLink>
              <span className="text-white text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ml-6 md:ml-10 lg:ml-14 xl:ml-20 group-hover:text-violet-500 transition-all duration-300">
                <FaFacebook className="translate-x-[50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
              </span>
            </div>
            <div className="flex items-center group">
              <FlipLink href="#" className="group-hover:text-orange-500 transition-all duration-300">Instagram</FlipLink>
              <span className="text-white text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl ml-6 md:ml-10 lg:ml-14 xl:ml-20 group-hover:text-orange-500 transition-all duration-300">
                <FaInstagram className="translate-x-[50%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Footer2;

// style={{ backgroundImage: "url('/images/divers/img4.jpg')", backgroundSize: "cover" }}
