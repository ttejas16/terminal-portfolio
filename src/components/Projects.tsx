import { PropsWithChildren, ReactNode } from "react";
import projects from "../utils/projects";
import { Package } from "lucide-react";

function Projects() {
    return (
        <div className="w-full h-full grid grid-cols-3 
                place-content-start overflow-hidden
                [&>*]:border [&>*]:border-neutral-800 
                [&>*:not(:nth-child(-n+3))]:border-t-0 
                [&>*:not(:nth-child(3n+1))]:border-l-0">
            {
                projects.map((project, index) => {
                    if (project.thumbnailComponent) {
                        return (
                            <GridItem key={index} info={project.info} tags={project.tags}>
                                <project.thumbnailComponent/>
                            </GridItem>
                        )
                    }
                    return (
                        <GridItem key={index} info={project.info} tags={project.tags} />
                    )
                })
            }
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
                    !children && <Package size={35} className="stroke-primary"/>
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