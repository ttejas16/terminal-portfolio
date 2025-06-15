import { Terminal } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";

function Home() {
  const { rootRef, animatedClassName } = useFadeIn();

  return (
    <div className="h-full flex justify-start items-start p-6" ref={rootRef}>

      <div className={`text-xs md:text-sm xl:text-base text-neutral-300 px-6 xl:px-16 py-8 xl:py-16 
        flex flex-col gap-y-8 relative border-[1px] border-primary/90 draw-border ${animatedClassName}`}>
        <div>
          Hello myself <span className="text-primary">Tejas</span>. Welcome to my <span className="text-primary">Terminal.</span>
        </div>
        <div>
          Avaliable Commands -
          <div className="flex flex-col text-primary pt-2">
            <span>01 home</span>
            <span>02 projects</span>
            <span>03 about</span>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-6 h-6 bg-neutral-200"></div>
          <div className="w-6 h-6 bg-neutral-700"></div>
          <div className="w-6 h-6 bg-neutral-400"></div>
          <div className="w-6 h-6 bg-primary"></div>
        </div>

        <div>
          <span>Why <span className="text-primary">Terminal</span> you ask? Because it looks <span className="text-teal-400">simple.</span></span>
          <div className="flex gap-x-2 pt-4">
            <Terminal className="text-primary size-4 xl:size-5" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home;