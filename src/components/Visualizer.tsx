import { createSpring, createTimeline, eases } from "animejs"
import { useEffect } from "react"

function Visualizer() {

    useEffect(() => {
        const tl = createTimeline({ loop: true, autoplay: true, loopDelay: 1000 });

        tl
            .add(".first", {
                height: [0, "10%"],
                ease: createSpring({ stiffness: 60 }),
            })
            .add(".second", {
                height: [0, "20%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".third", {
                height: [0, "30%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".fourth", {
                height: [0, "40%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".fifth", {
                height: [0, "60%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".sixth", {
                height: [0, "70%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".seventh", {
                height: [0, "80%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".eigth", {
                height: [0, "90%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".ninth", {
                height: [0, "100%"],
                ease: createSpring({ stiffness: 60 })
            })
            .add(".rectangle", {
                height: ["100%", "0%"],
                duration: 10,
                ease: eases.outQuad
            }).init()
    }, []);

    return (
        <div className="flex items-end justify-center gap-x-2 pt-4 px-4 h-full w-full">
            <div className="w-6 bg-neutral-400 rectangle first"></div>
            <div className="w-6 bg-neutral-400 rectangle second"></div>
            <div className="w-6 bg-neutral-400 rectangle third"></div>
            <div className="w-6 bg-neutral-400 rectangle fourth"></div>
            <div className="w-6 bg-neutral-400 rectangle fifth"></div>
            <div className="w-6 bg-neutral-400 rectangle sixth"></div>
            <div className="w-6 bg-neutral-400 rectangle seventh"></div>
            <div className="w-6 bg-neutral-400 rectangle eigth"></div>
            <div className="w-6 bg-neutral-400 rectangle ninth"></div>
        </div>
    )
}

export default Visualizer