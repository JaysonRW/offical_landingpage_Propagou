
'use client';

import { useState, useEffect } from 'react';

const generateBoxShadows = (n: number) => {
  return Array.from({ length: n })
    .map(() => `${Math.random() * 2000}px ${Math.random() * 2000}px #FFF`)
    .join(', ');
};

const ParallaxStars = () => {
  const [shadowsSmall, setShadowsSmall] = useState('');
  const [shadowsMedium, setShadowsMedium] = useState('');
  const [shadowsBig, setShadowsBig] = useState('');

  useEffect(() => {
    // Only run on client
    setShadowsSmall(generateBoxShadows(700));
    setShadowsMedium(generateBoxShadows(200));
    setShadowsBig(generateBoxShadows(100));
  }, []);

  const starStyle = {
    background: 'transparent',
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
  };

  const afterStyle = {
    content: '""',
    position: 'absolute' as 'absolute',
    top: '2000px',
    left: 0,
    background: 'transparent',
  };

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div
        style={{
          ...starStyle,
          width: '1px',
          height: '1px',
          boxShadow: shadowsSmall,
          animation: 'animStar 50s linear infinite',
        }}
      >
        <div
          style={{
            ...afterStyle,
            width: '1px',
            height: '1px',
            boxShadow: shadowsSmall,
          }}
        />
      </div>
      <div
        style={{
          ...starStyle,
          width: '2px',
          height: '2px',
          boxShadow: shadowsMedium,
          animation: 'animStar 100s linear infinite',
        }}
      >
        <div
          style={{
            ...afterStyle,
            width: '2px',
            height: '2px',
            boxShadow: shadowsMedium,
          }}
        />
      </div>
      <div
        style={{
          ...starStyle,
          width: '3px',
          height: '3px',
          boxShadow: shadowsBig,
          animation: 'animStar 150s linear infinite',
        }}
      >
        <div
          style={{
            ...afterStyle,
            width: '3px',
            height: '3px',
            boxShadow: shadowsBig,
          }}
        />
      </div>
    </div>
  );
};

export default ParallaxStars;
