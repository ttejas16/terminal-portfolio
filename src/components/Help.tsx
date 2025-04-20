import { animate, createScope, Scope } from "animejs";
import { commands } from "../App";
import { useEffect, useRef } from "react";

function Help() {
    const root = useRef(null);
    const scope = useRef<Scope>(null);

    useEffect(() => {
        scope.current = createScope({ root }).add(_ => {
            animate(".command", {
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
        <div className="flex flex-col gap-y-2 px-6 py-4" ref={root}>
            {
                Object.keys(commands).map((command, index) => {
                    return (
                        <div className="text-primary text-xl space-x-2 command" key={index}>
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