import { PropsWithChildren, ReactNode } from "react";
import projects from "../utils/projects";
import { Package } from "lucide-react";
import useFadeIn from "../hooks/useFadeIn";
import { Pause, Play } from "lucide-react";
import { useAnimationControl } from "../hooks/useAnimationControl";

function Projects() {
  const { pause, setPause } = useAnimationControl();
  const { rootRef, animatedClassName } = useFadeIn();

  return (
    <div ref={rootRef} className="w-full h-full flex flex-col">

      <div className={`w-full grid grid-cols-3 
                place-content-start overflow-hidden
                [&>*]:border [&>*]:border-neutral-800 
                [&>*:not(:nth-child(-n+3))]:border-t-0 
                [&>*:not(:nth-child(3n+1))]:border-l-0 ${animatedClassName}`}>
        {
          projects.map((project, index) => {
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
        <button className="mt-auto">1</button>
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
    <div className="h- px-6 py-6 flex flex-col gap-2 border-[1px] border-neutral-600">
      <div className="w-full h-40 bg-neutral-800 rounded-sm flex justify-center items-center">
        {children}
        {
          !children && <Package size={35} className="stroke-primary" />
        }
      </div>
      <div className="mt-1">
        {info}
      </div>
      <div className="w-full flex gap-2 flex-wrap mt-4">
        {
          tags.map((tag, index) => {
            return (
              <div key={index} className="bg-neutral-800 px-6 py-1 rounded-sm text-sm text-primary font-semibold">
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