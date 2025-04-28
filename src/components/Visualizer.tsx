import { animate } from "animejs"
import { useEffect } from "react"

function Visualizer() {

    useEffect(() => {
        animate('.rectangle', {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            height: (_, index, __) => `${(index + 1) * 10}%`,
            delay: (_, i) => i * 50,
            loop: true,
            loopDelay: 3000,
            alternate: true,
            duration: 500,
            ease: 'out'
        })
    }, []);

    return (
        <div className="flex items-end justify-center gap-x-2 pt-4 px-4 h-full w-full">
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
            <div className="w-6 bg-neutral-400 rectangle"></div>
        </div>
    )
}

export default Visualizer