import { createTimeline } from "animejs";
import { useEffect } from "react";
import { commands } from "../utils/commands";

function Error({ command }: { command: string }) {
    return (
        <div className="h-full flex justify-center items-center flex-col text-lg">
            <div>
                Sorry can't interpret the command '<span className="text-primary">{command}</span>'
            </div>
            <TextRoll />
        </div>
    )
}

// classnames for timelines because i am not doing this dynamic
const classNames = ["one", "two", "three", "four"];
const commandsNames = Object.keys(commands);

function TextRoll() {

    useEffect(() => {
        const tl = createTimeline({ autoplay: true, loop: true, delay: 500});
        tl
            .add(".one", {
                y: ["0%", "60%"],
                opacity: [1, 0],
                duration: 500,
                delay: 500
            })
            .add(".two", {
                y: ["-60%", "0%"],
                opacity: [0, 1],
                duration: 500,
                ease: 'out'
            })
            .add(".two", {
                y: ["0%", "60%"],
                opacity: [1, 0],
                duration: 500,
                delay: 500
            })
            .add(".three", {
                y: ["-60%", "0%"],
                opacity: [0, 1],
                duration: 500,
                ease: 'out'
            })
            .add(".three", {
                y: ["0%", "60%"],
                opacity: [1, 0],
                duration: 500,
                delay: 500
            })
            .add(".four", {
                y: ["-60%", "0%"],
                opacity: [0, 1],
                duration: 500,
                ease: 'out'
            })
            .add(".four", {
                y: ["0%", "60%"],
                opacity: [1, 0],
                duration: 500,
                delay: 500
            })
            .add(".one", {
                y: ["-60%", "0%"],
                opacity: [0, 1],
                duration: 500
            })
            .init();

        return () => { tl.revert() };
    }, []);

    return (
        <div className="flex gap-x-2 mt-2">
            Maybe try
            <div className="relative text-primary">
                {
                    commandsNames.map((commandName, index) => {
                        return (
                            <div key={index} className={`${classNames[index]} absolute`}>{commandName}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Error;