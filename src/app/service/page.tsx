"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "../components/animatedText";
import Image from "next/image";
import { FaArrowAltCircleRight } from "react-icons/fa";
import SwipeTopBottom from "../components/swipeTopBottom";
import Link from "next/link";
import Layout from "../components/layout";
import { TextSplit } from "../components/textSplit";

const Card = ({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <motion.div
      animate={{ x: 5, transition: { type: "spring" } }}
      className=" sticky top-0 h-[70vh] w-full flex z-20"
    >
      <div className="rounded-xl overflow-hidden  hover:shadow-lg transition-all duration-300 w-[320px] max-w-full dark:hover:shadow-indigo-400/30 border border-indigo-300 z-10">
        <div className="relative">
          <Image
            src={image}
            alt={title}
            width={350}
            height={350}
            priority
            className="object-cover w-full h-full"
          />
          <div className="absolute top-4 left-4 bg-indigo-500 text-white ring-1 ring-indigo-100 px-3 py-1 rounded-full text-sm font-medium w-10 h-10 flex items-center justify-center">
            {number}
          </div>
        </div>
        <div className="p-6 backdrop-blur-md bg-black/10 h-full">
          <h3 className="text-xl font-bold mb-2 text-indigo-700">{title}</h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-white">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const CardList = ({
  data,
}: {
  data: {
    id: number;
    number: string;
    title: string;
    description: string;
    image: string;
  }[];
}) => {
  return (
    <div className="sticky top-0 h-full min-w-screen flex items-center justify-center gap-20">
      {data.map((item) => (
        <Card
          key={item.id}
          number={item.number}
          title={item.title}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default function Service() {
  const data = [
    {
      id: 1,
      number: "01",
      title: "Entretien initial",
      description:
        "Prenez un café, un thé ou une bière et discutons. Je veux savoir comment vous avez commencé, ce que vous faites actuellement et où vous allez. Il est temps pour vous de partager votre vision. J'arrive avec beaucoup de questions, mais les questions sont simplement là pour aider à guider la conversation.",
      image: "/services/img1.webp",
    },
    {
      id: 2,
      number: "02",
      title: "Maquette du projet",
      description:
        "Réalisations d'une maquette prête à l'emploi pour votre site web, en utilisant les dernières technologies comme Figma. Vous pourrez ainsi visualiser le rendu final de votre site web avant même de commencer le développement.",
      image: "/services/img2.webp",
    },
    {
      id: 3,
      number: "03",
      title: "Référencement Naturel (SEO)",
      description:
        "Optimisation de votre site web pour les moteurs de recherche en utilisant les dernières technologies. Rapidité et performance sur l'ensemble de mes réalisations.",
      image: "/services/img3.webp",
    },
    {
      id: 4,
      number: "04",
      title: "UI/UX Design",
      description:
        "Création de l'interface utilisateur pour votre site web en utilisant les dernières technologies.",
      image: "/services/img4.webp",
    },
    {
      id: 5,
      number: "05",
      title: "Social Media Marketing",
      description:
        "Création de contenu pour les réseaux sociaux avec un suivi complet et une analyse des résultats. Vous pourrez ainsi visualiser le rendu final de votre site web avant même de commencer le développement.",
      image: "/services/img5.webp",
    },
    {
      id: 6,
      number: "06",
      title: "Livraison du projet",
      description:
        "Livraison du projet avec une livraison rapide et une livraison sous contrat.",
      image: "/services/img6.webp",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 350 * 10]);

  return (
    <Layout>
      <motion.section
        className="min-h-[600vh] md:h-[500vh] bg-white dark:bg-slate-950 relative"
        ref={ref}
        style={{ scrollBehavior: "smooth", position: "relative" }}
      >
        <div className="relative w-full h-[70vh] flex flex-col items-center justify-center text-center">
          <AnimatedText
            stagger={0.05}
            delay={0.8}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-slate-950 dark:text-white uppercase"
            text="Mes services"
          />

          <TextSplit
            stagger={0.03}
            delay={0.8}
            className="text-slate-950 dark:text-white text-xs md:text-base lg:text-lg xl:text-xl"
            texte="Voici tous les services que je réalise avec une approche moderne."
          />

          <div className="absolute bottom-8 flex flex-col items-center justify-end gap-8 ">
            <motion.div
              initial={{ opacity: 0, x: 50, y: 50, rotate: 45 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 1.4,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className=""
            >
              <FaArrowAltCircleRight className="text-4xl md:text-5xl lg:text-8xl xl:text-10xl text-indigo-500 dark:text-indigo-500 drop-shadow-md" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{
                duration: 1,
                delay: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="text-base font-extralight text-black dark:text-white"
            >
              Scroll bottom
            </motion.p>
          </div>
        </div>

        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-gradient-to-l  from-black to-[#000000fd]">
          <div className="relative">
            <motion.div
              style={{ x }}
              className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-40 via-blue-950 to-black flex items-center justify-start pr-96"
            >
              <div className="h-full w-[90vw] ml-48 flex items-center justify-center" />
              <motion.div
                style={{ x: x2 }}
                className="relative h-[100vh] w-full z-0 flex items-center justify-start"
              >
                <StickyImage img="/services/maintenance.png" />
              </motion.div>
              <CardList data={data} />

              <div className="fixed right-[-50%] top-[30%] lg:top-10 flex items-center justify-center flex-col z-[-1] w-full h-full">
                <SwipeTopBottom />
              </div>
            </motion.div>

            <div className="h-screen w-screen flex flex-col items-center bg-indigo-500 dark:bg-slate-950 py-24">
              <h1 className="text-center max-w-[75%]">
                <AnimatedText
                  stagger={0.05}
                  delay={0.8}
                  className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white dark:text-indigo-500 uppercase"
                  text="Création de site web : des formules adaptées à vos besoins"
                />
              </h1>

              <div className="relative">
                <motion.svg
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  viewBox="0 0 300 300"
                  className="w-72 h-72 md:w-[500px] md:h-[500px] flex flex-col items-center justify-center"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
                    />
                  </defs>
                  <text fill="none" fontSize="100">
                    <textPath xlinkHref="#circlePath" className="text-xl fill-black dark:fill-white ">
                      Front-end Developpeur - Designer - Seo -
                    </textPath>
                  </text>
                </motion.svg>

                <Link
                  href="/contact"
                  className="w-20 h-20 md:w-28 md:h-28 text-sm md:-text-base text-white text-center bg-black rounded-full absolute m-auto left-0 right-0 bottom-0 top-0 flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
                >
                  Contactez Moi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}

const StickyImage = ({ img }: { img: string }) => {
  return (
    <motion.div
      className="bg-contain bg-center bg-no-repeat h-[80%] w-3/4 top-0 sticky z-0 drop-shadow-lg"
      style={{ backgroundImage: `url(${img})` }}
    ></motion.div>
  );
};
