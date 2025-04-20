import { animate, createScope, Scope } from "animejs";
import { Code, GitCompare, Terminal } from "lucide-react";
import { useEffect, useRef } from "react";
// import AnimatedBorder from "./AnimatedBorder";

function Home() {
    const root = useRef(null);
    const scope = useRef<Scope>(null);

    useEffect(() => {
        scope.current = createScope({ root }).add(_ => {
            animate(".home", {
                opacity: [
                    // { to: 1.25, ease: 'inOut(3)', duration: 200 },
                    // { to: 1, ease: createSpring({ stiffness: 300 }) },
                    { from: 0, duration: 600 },
                    { from: 1, duration: 600 },
                ],
                y: [
                    { from: '-2%', duration: 300 },
                    // { to:'100%' }
                ],
                // loop: true
                ease: 'out(3)'
            })
        })

        return () => scope.current?.revert();
    }, []);

    return (
        <div className="h-full flex flex-col justify-center items-center" ref={root}>

            <div className="text-xl text-neutral-300 px-32 py-16 flex justify-center relative border-[1px] border-primary/90 draw-border home">
                Hey! Myself
                <span className="text-primary font-semibold">
                    &nbsp;Tejas.&nbsp;
                </span>
                Welcome to my
                <span className="text-primary font-semibold">
                    &nbsp;Terminal.&nbsp;
                </span>

                <div className="absolute bottom-[-55%]">
                    <div className="py-4 flex gap-x-6 text-primary/90">
                        <div className="bg-neutral-800 px-8 py-6 rounded-sm flex gap-x-2 border-[1px] border-dashed border-primary/60">
                            <Terminal className="icon" size={30} strokeWidth={1} />
                        </div>
                        <div className="bg-neutral-800 px-8 py-6 rounded-sm flex gap-x-2 border-[1px] border-dashed border-primary/60">
                            <Code className="icon" size={30} strokeWidth={1} />
                        </div>
                        <div className="bg-neutral-800 px-8 py-6 rounded-sm flex gap-x-2 border-[1px] border-dashed border-primary/60">
                            <GitCompare className="icon" size={30} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="text-xl text-neutral-300 text-center">
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