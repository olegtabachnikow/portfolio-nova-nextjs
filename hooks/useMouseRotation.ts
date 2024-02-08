import { useState, useMemo, MouseEventHandler } from 'react';

interface CoordinatesType {
  x: number;
  y: number;
}

const useMouseRotation = () => {
  const [rotation, setRotation] = useState<CoordinatesType>({ x: 0, y: 0 });

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    const mouseX = e.clientX / window.innerWidth - 0.5;
    const mouseY = e.clientY / window.innerHeight - 0.5;

    const newRotation = {
      x: mouseX * 20,
      y: mouseY * 20,
    };

    if (newRotation.x < 0) {
      newRotation.y = -newRotation.y;
      newRotation.x = -newRotation.x;
    }
    if (newRotation.x > 0) {
      newRotation.y = newRotation.y;
      newRotation.x = newRotation.x;
    }
    setRotation(newRotation);
  };
  return useMemo(() => ({ rotation, handleMouseMove }), [rotation]);
};

export default useMouseRotation;
