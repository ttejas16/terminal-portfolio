import { createTimeline } from "animejs";
import { useEffect } from "react"

function Breakout() {
    useEffect(() => {

        const tl = createTimeline({ loop: true, autoplay: true, alternate: true, loopDelay: 1500 });
        tl
            .add(".ball", {
                x: (target, _index, _length) => {
                    const container: HTMLDivElement = target.parentElement;
                    const div = container.getBoundingClientRect();
                    return [0, (div.width / 2) - target.getBoundingClientRect().width]
                },
                y: (target, _index, _length) => {
                    const container: HTMLDivElement = target.parentElement;
                    const div = container.getBoundingClientRect();
                    return [0, (div.height) - target.getBoundingClientRect().height]
                },
                ease: 'in'
            })
            .add(".ball", {
                x: (target, _index, _length) => {
                    const container: HTMLDivElement = target.parentElement;
                    const div = container.getBoundingClientRect();
                    return [(div.width / 2) - target.getBoundingClientRect().width, (div.width) - target.getBoundingClientRect().width]
                },
                y: (target, _index, _length) => {
                    const container: HTMLDivElement = target.parentElement;
                    const div = container.getBoundingClientRect();
                    return [((div.height) - target.getBoundingClientRect().height), 0]
                },
                ease: 'out'
            })

    }, []);

    return (
        <div className="relative w-full h-full">
            <div className="h-4 w-4 bg-primary rounded-full ball absolute top-0 left-0"></div>
            <div className="w-14 h-2 bg-neutral-300 absolute top-[95%] left-[42%]"></div>
        </div>
    )
}

export default Breakout