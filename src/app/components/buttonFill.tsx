

export default function ButtonFill({textButton}: {textButton: string}) {
    return (
      <button className="group/button relative overflow-hidden rounded-full border border-indigo-500/20 bg-white px-4 py-1 text-xs md:text-base font-medium text-indigo-500 transition-all duration-150 hover:border-indigo-500 active:scale-95">
        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 transition-all duration-500 group-hover/button:h-full" />
        <span className="relative z-10 transition-all duration-500 group-hover/button:text-white flex items-center justify-center gap-2">
          {textButton}
        </span>
      </button>
    )
  }