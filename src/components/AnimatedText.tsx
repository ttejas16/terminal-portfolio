import { createTimeline } from "animejs";
import { useEffect } from "react";
import { useAnimationControl } from "../hooks/useAnimationControl";

function AnimatedText() {
    const { pause } = useAnimationControl();

    useEffect(() => {
        const tl = createTimeline({ loop: true, autoplay: true, loopDelay: 2000 });
        tl

            .add([".wrapper", ".word"], {
                gap: ["10px", "0px"],
                color: ["white"],
                duration: 800,
                ease: 'out(3)'
            })
            .add(".wrapper", {
                gap: ["0px", "10px"],
                duration: 200,
                delay: 1500
            })
            .add(".one", {
                color: ["white", "teal"],
                duration: 100,
            })
            .add(".two", {
                color: ["white", "silver"],
                duration: 110,
            })
            .add(".three", {
                color: ["white", "teal"],
                duration: 120,
            })
            .add(".four", {
                color: ["white", "goldenrod"],
                duration: 130,
            })
            .add(".five", {
                color: ["white", "gray"],
                duration: 140
            })
            .init();

        if (pause) {
            tl.complete();
            tl.pause();
        }

        return () => { tl.revert() }
    }, [pause]);

    return (
        <div className="flex wrapper text-sm lg:text-lg font-semibold">
            <span className="one word">int</span>&nbsp;
            <span className="two word">num</span>&nbsp;
            <span className="three word">=</span>&nbsp;
            <span className="four word">1539</span>
            <span className="five word">;</span>
        </div>
    )
}

export default AnimatedText;