'use client';

import { useEffect, useState } from 'react';

export default function Bird() {
  const [angle, setAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const anchor = document.getElementById('anchor');
      const rekt = anchor!.getBoundingClientRect();
      const anchorX = rekt.left + rekt.width / 2;
      const anchorY = rekt.top + rekt.height / 2;

      const dy = anchorY - event.clientY;
      const dx = anchorX - event.clientX;
      const rad = Math.atan2(dy, dx);
      const deg = (rad * 180) / Math.PI;
      setAngle(deg);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        id="anchor"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute w-[100px] h-[100px] right-0 top-[-70px] z-10 hover:scale-110"
      />
      <div className="absolute w-[100px] h-[100px] right-0 top-[-70px]">
        <div
          className={`transition-all duration-100 relative`}
          style={{ top: isHovered ? 40 : 10 }}>
          <img src="/bird.png" />
          <img
            src="/eye.png"
            className="absolute w-[14px] top-[26px] left-[6px]"
            style={{ transform: `rotate(${angle}deg)` }}
          />
          <img
            src="/eye.png"
            className="absolute w-[14px] top-[28px] left-[41px]"
            style={{ transform: `rotate(${angle}deg)` }}
          />
          <img
            src="/beak.png"
            className={`w-12 absolute top-[37px] left-[-10px]`}
            style={{ zIndex: isHovered ? 0 : 1 }}
          />
        </div>
      </div>
    </>
  );
}
