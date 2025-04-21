import { commands } from "../utils/commands";
import useFadeIn from "../hooks/useFadeIn";

function Help() {
    const { rootRef, animatedClassName} = useFadeIn();    

    return (
        <div className="flex flex-col gap-y-2 px-6 py-4" ref={rootRef}>
            {
                Object.keys(commands).map((command, index) => {
                    return (
                        <div className={`text-primary text-xl space-x-2 ${animatedClassName}`} key={index}>
                            <span>{index}.</span>
                            <span className="text-xl">{command}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Help;