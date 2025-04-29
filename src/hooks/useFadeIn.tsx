import { animate, createScope, Scope } from "animejs";
import React, { useEffect, useId, useRef } from "react";

interface UseFadeInProps {
  duration?: number,
  delay?: number
}

function useFadeIn({ duration, delay }: UseFadeInProps = { duration: 600, delay: 0 }): {
  rootRef: React.RefObject<HTMLDivElement | null>,
  animatedClassName: string

} {
  const animatedClassName = useId()
  const rootRef = useRef<HTMLDivElement>(null);
  const scopeRef = useRef<Scope>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    scopeRef.current = createScope({ root: rootRef.current }).add(() => {
      animate("." + animatedClassName, {
        opacity: [
          { from: 0, duration: duration },
          { from: 1, duration: duration },
        ],
        y: [
          { from: '-2%', duration: duration },
        ],
        // loop: true
        ease: 'out(3)'
      })
    })

    return () => scopeRef.current?.revert();
  }, [duration, delay, animatedClassName]);

  return { rootRef, animatedClassName };
}

export default useFadeIn;