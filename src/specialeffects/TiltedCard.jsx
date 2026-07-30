//鼠标经过悬浮卡片
import { useState, useRef } from 'react';

const TiltedCard = ({
  children,
  tiltAmount = 12,
  scaleOnHover = 1.04,
  transformOrigin = "center center",
}) => {
  const containerRef = useRef(null);
  const [transform, setTransform] = useState("");

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    const rotateX = ((y / h - 0.5) * -tiltAmount).toFixed(2);
    const rotateY = ((x / w - 0.5) * tiltAmount).toFixed(2);

    setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleOnHover}, ${scaleOnHover}, ${scaleOnHover})`);
  };

  const handleMouseLeave = () => {
    setTransform("perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transformOrigin,
        transition: "transform 0.12s ease-out",
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default TiltedCard;