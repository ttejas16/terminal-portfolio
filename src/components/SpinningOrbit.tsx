import { animate } from "animejs";
import { Orbit } from "lucide-react";
import { useEffect } from "react";
import { useAnimationControl } from "../hooks/useAnimationControl";

function SpinningOrbit() {
  const { pause } = useAnimationControl();

  useEffect(() => {
    const animation = animate(".orbit", {
      rotate: {
        from: '0',
        to: '180',
        duration: 3000,
      },
      loop: true,
    }).init();

    if (pause) {
      animation.complete();
      animation.pause();
    }

    return () => { animation.revert() };
  }, [pause]);

  return (
    <div>
      <Orbit className="stroke-neutral-300 orbit" size={40} />
    </div>
  )
}

export default SpinningOrbit;