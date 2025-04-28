import { animate } from "animejs";
import { Orbit } from "lucide-react";
import { useEffect } from "react";

function SpinningOrbit(){
    useEffect(() => {
        animate(".orbit", {
            rotate:{
                from: '0',
                to: '180',
                duration: 3000,
            },
            loop: true,
        }).init()
    },[]);

    return (
        <div>
            <Orbit className="stroke-neutral-300 orbit" size={40}/>
        </div>
    )
}

export default SpinningOrbit;