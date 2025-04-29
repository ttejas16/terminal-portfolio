import React, { useRef, useEffect } from 'react';
import { animate } from 'animejs';

interface AnimatedBorderProps {
  strokeWidth?: number;  // thickness of the square’s border
  strokeColor?: string;  // color of the border
  duration?: number;     // animation duration in ms
}

const AnimatedBorder: React.FC<AnimatedBorderProps> = ({
  strokeWidth = 1,
  strokeColor = '#ffffff',
  duration = 1200,
}) => {
  const rectRef = useRef<SVGRectElement>(null);

  useEffect(() => {
    const rect = rectRef.current;
    if (!rect) return;

    const perimeter = rect.getTotalLength();

    rect.setAttribute('stroke-dasharray', perimeter.toString());
    rect.setAttribute('stroke-dashoffset', perimeter.toString());

    animate(rect, {
      strokeDashoffset: [perimeter, 0],
      easing: 'easeInOutSine',
      duration,
    });
  }, [duration]);

  return (
    <svg
      className='absolute top-0 left-0 w-full h-full'
      viewBox="0 0 100 100"
      preserveAspectRatio='none'
      // ref={rectRef}
      style={{ display: 'block', margin: 'auto auto' }}
    >
      <rect
        ref={rectRef}
        x={strokeWidth / 2}
        y={strokeWidth / 2}
        width={100 - strokeWidth}
        height={100 - strokeWidth}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      // vectorEffect={"non-scaling-stroke"}
      />
    </svg>
  );
};

export default AnimatedBorder;
