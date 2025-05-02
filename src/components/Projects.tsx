import { PropsWithChildren, ReactNode } from "react";
import projects from "../utils/projects";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";
import { Pause, Play } from "lucide-react";
import { useAnimationControl } from "../hooks/useAnimationControl";
import usePagination from "../hooks/usePagination";

function Projects() {

  const {
    pageNumber,
    hasPrevious,
    hasNext,
    nextPage,
    previousPage,
    pageStart,
    pageEnd
  } = usePagination(projects.length);

  const { pause, setPause } = useAnimationControl();
  const { rootRef, animatedClassName } = useFadeIn();

  return (
    <div ref={rootRef} className="w-full h-full flex flex-col">

      <div className={`w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
                place-content-start overflow-hidden 
                 ${animatedClassName}`}>
        {
          projects.slice(pageStart, pageEnd).map((project, index) => {
            if (project.thumbnailComponent) {
              return (
                <GridItem key={index} info={project.info} tags={project.tags}>
                  <project.thumbnailComponent />
                </GridItem>
              )
            }
            return (
              <GridItem key={index} info={project.info} tags={project.tags} />
            )
          })
        }
      </div>

      <div className={`mt-auto flex justify-between w-full ${animatedClassName}`}>
        <div className="mt-auto flex items-center gap-x-1 pb-2 pl-1">
          <button onClick={previousPage} disabled={!hasPrevious} className="disabled:opacity-[0.3]">
            <ChevronLeft size={15} className="stroke-neutral-100" />
          </button>
          <span className="px-3 py-1 text-xs text-primary font-bold bg-neutral-800 rounded-md">{pageNumber + 1}</span>
          <button onClick={nextPage} disabled={!hasNext} className="disabled:opacity-[0.3]">
            <ChevronRight size={15} className="stroke-neutral-100" />
          </button>
        </div>
        <button
          onClick={() => setPause((p) => !p)}
          title={pause ? "Play Animations" : "Pause Animations"}
          className="mt-auto self-end px-3 py-2 bg-neutral-800 rounded-sm">
          {
            pause ?
              <Play size={15} className="stroke-primary fill-primary" /> :
              <Pause size={15} className="stroke-primary fill-primary" />
          }
        </button>
      </div>

    </div>
  )
}

interface ItemProps extends PropsWithChildren {
  children?: ReactNode
  info: string,
  tags: string[]
}
function GridItem({ children, info, tags }: ItemProps) {
  return (
    <div className="h-full p-3 sm:p-6 flex flex-col gap-2
    relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:block after:w-full after:bg-neutral-800
    before:absolute before:right-0 before:top-0 before:w-[1px] before:block before:h-full before:bg-neutral-800
    ">
      <div className="w-full h-40 bg-neutral-800 rounded-sm flex justify-center items-center">
        {children}
        {
          !children && <Package size={35} className="stroke-primary" />
        }
      </div>
      <div className="mt-1 text-xs lg:text-sm xl:text-base">
        {info}
      </div>
      <div className="w-full flex gap-2 flex-wrap mt-4">
        {
          tags.map((tag, index) => {
            return (
              <div key={index} className="bg-neutral-800 px-6 py-1 rounded-sm text-xs 2xl:text-sm text-primary font-semibold">
                {tag}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;