import { animate } from "animejs"
import { useEffect } from "react"
import { useAnimationControl } from "../hooks/useAnimationControl";

function Visualizer() {
  const { pause } = useAnimationControl();

  useEffect(() => {
    const animation = animate('.rectangle', {
      height: (_, index, __) => `${(index + 1) * 10}%`,
      delay: (_, i) => i * 50,
      loop: true,
      loopDelay: 3000,
      alternate: true,
      duration: 500,
      ease: 'out',
    });

    if (pause) {
      animation.complete();
      animation.pause();
    }

    return () => { animation.revert() };
  }, [pause]);

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