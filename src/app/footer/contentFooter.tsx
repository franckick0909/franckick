import Link from "next/link";

export default function ContentFooter() {
  return (
    <footer className="p-6 md:py-12 w-full h-full bg-slate-100 dark:bg-slate-950 flex items-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="grid">
          <div className="flex items-baseline gap-4 mb-8 text-black dark:text-white">
            <MountainIcon className="h-7 w-7" />
            <h3 className="text-md lg:text-lg xl:text-2xl font-semibold ">
              Franck Chapelon
            </h3>
          </div>
          <h4 className="text-md lg:text-lg xl:text-xl mb-2 text-indigo-500 dark:text-indigo-500">
            DEVELOPPEUR WEB FRONT-END FREELANCE
          </h4>
          <p className="text-slate-950 dark:text-slate-200 text-xs md:text-base">
            1505 Route de la forêt,
            <br />
            24300 Savignac de Nontron
            <br />
            France
          </p>
        </div>
        <div className="grid">
          <h3 className="text-md lg:text-lg xl:text-2xl font-semibold mb-8 text-indigo-500/70 dark:text-indigo-400">
            Société
          </h3>
          <div className="flex flex-col text-slate-950 dark:text-slate-200">
            <Link
              href="/home"
              prefetch={false}
              className="text-xs md:text-base"
            >
              Home
            </Link>
            <Link
              href="/portfolio"
              prefetch={false}
              className="text-xs md:text-base"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              prefetch={false}
              className="text-xs md:text-base"
            >
              About
            </Link>
            <Link
              href="/services"
              prefetch={false}
              className="text-xs md:text-base"
            >
              Services
            </Link>
            <Link href="/tarifs" prefetch={false} className="text-xs md:text-base">
              Tarifs
            </Link>
            <Link href="/contact" prefetch={false} className="text-xs md:text-base">
              Contact
            </Link>
          </div>
        </div>
        <div className="grid">
          <h3 className="text-md lg:text-lg xl:text-2xl font-semibold mb-8 text-indigo-500/70 dark:text-indigo-400">
            Ressources
          </h3>
          <div className="flex flex-col text-slate-950 dark:text-slate-200">
            <Link href="#" prefetch={false} className="text-xs md:text-base">
              Documentation
            </Link>
            <Link href="#" prefetch={false} className="text-xs md:text-base">
              Support
            </Link>
          </div>
        </div>
        <div className="grid">
          <h3 className="text-md lg:text-lg xl:text-2xl font-semibold mb-8 text-indigo-500/70 dark:text-indigo-400">
            À propos
          </h3>
          <div className="flex flex-col text-slate-950 dark:text-slate-200">
            <Link
              href="/about"
              prefetch={false}
              className="text-xs md:text-base"
            >
              Qui suis-je ?
            </Link>
            <Link href="#" prefetch={false} className="text-xs md:text-base">
              Expériences
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

{
  /* <div className="text-white text-lg">© 2021 Franck Chapelon. All rights reserved.</div> */
}
