import { Code, GitCompare, Terminal } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";
// import AnimatedBorder from "./AnimatedBorder";

function Home() {
  const { rootRef, animatedClassName } = useFadeIn();

  return (
    <div className="h-full flex flex-col justify-center items-center" ref={rootRef}>

      <div className={`text-xs md:text-sm xl:text-xl text-neutral-300 px-10 xl:px-32 py-16 flex justify-center relative border-[1px] border-primary/90 draw-border ${animatedClassName}`}>

        <div className="flex flex-col lg:flex-row items-center">
          <span>
            Hey! Myself
            <span className="text-primary">
              &nbsp;Tejas.&nbsp;
            </span>
          </span>
          <span>
            Welcome to my
            <span className="text-primary">
              &nbsp;Terminal.&nbsp;
            </span>
          </span>
        </div>

        <div className="absolute bottom-[-31%] lg:bottom-[-42%] xl:bottom-[-55%]">
          <div className="py-4 flex gap-x-6 text-primary/90">
            <div className="bg-neutral-800 px-3 lg:px-6 xl:px-8 py-2 lg:py-4 xl:py-6 rounded-sm flex gap-x-2 border-[1px] border-dashed border-primary/60">
              <Terminal className="icon size-[15px] xl:size-[30px]" size={30} strokeWidth={1} />
            </div>
            <div className="bg-neutral-800 px-3 lg:px-6 xl:px-8 py-2 lg:py-4 xl:py-6 rounded-sm flex gap-x-2 border-[1px] border-dashed border-primary/60">
              <Code className="icon size-[15px] xl:size-[30px]" size={30} strokeWidth={1} />
            </div>
            <div className="bg-neutral-800 px-3 lg:px-6 xl:px-8 py-2 lg:py-4 xl:py-6 rounded-sm flex gap-x-2 border-[1px] border-dashed border-primary/60">
              <GitCompare className="icon size-[15px] xl:size-[30px]" size={30} strokeWidth={1} />
            </div>
          </div>
          <div className="text-xs md:text-sm xl:text-xl text-neutral-300 text-center">
            enter
            <span className="text-primary font-semibold">
              &nbsp;help&nbsp;
            </span>
            to begin
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;