'use client';

import { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  className?: string;
  startOnVisible?: boolean;
  precision?: number;
};

export default function AnimatedCounter({
  target,
  duration = 2000,
  className,
  startOnVisible = true,
  precision = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  const startAnimation = () => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    
    let start = 0;
    const startTime = Date.now();
    const end = target;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      const currentVal = progress * (end - start) + start;
      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it ends on the exact target
      }
    };
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    if (!startOnVisible) {
      startAnimation();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startOnVisible]);

  return (
    <span ref={ref} className={className}>
      {count.toFixed(precision)}
    </span>
  );
}
