import { useLayoutEffect, useRef } from 'react';

function AnimatedBorder() {
  const rectRef = useRef<SVGRectElement | null>(null);

  useLayoutEffect(() => {
    const rect = rectRef.current;
    if (!rect) return;
    
    // Reset any previous transition so we can restart it
    rect.style.transition = 'none';

    const length = rect.getTotalLength();
    rect.style.strokeDasharray = `${length}`;
    rect.style.strokeDashoffset = `${length}`;

    // Force a reflow to apply the reset styles
    void rect.getBoundingClientRect();

    // Now apply the transition and animate
    rect.style.transition = 'stroke-dashoffset 1s ease-in-out';
    rect.style.strokeDashoffset = '0';
  });

  return (
    <div className="w-full h-full">
      <svg className="w-full h-full">
        <rect
          ref={rectRef}
          x={0.5}
          y={0.5}
          width="calc(100% - 1px)"
          height="calc(100% - 1px)"
          fill="none"
          className='stroke-primary'
          strokeWidth={1}
        />
      </svg>
    </div>
  );
};

export default AnimatedBorder;