import { useState, useEffect } from 'react';

const MagicBento = ({
  items = [],
  className = '',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      {items.map((item, index) => {
        const isHovered = hoveredIndex === index;
        const spanClass = item.span || '';
        return (
          <div
            key={index}
            className={`
              relative rounded-xl overflow-hidden p-6 transition-all duration-300 ease-out
              bg-[#141414] border border-[rgba(191,255,47,0.16)]
              ${spanClass}
              ${isHovered ? 'scale-[1.02] border-[rgba(191,255,47,0.5)]' : ''}
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* 悬浮光晕 */}
            {isHovered && !isMobile && (
              <div
                className="absolute inset-0 pointer-events-none opacity-30"
                style={{
                  background: 'radial-gradient(circle at center, rgba(191,255,47,0.35) 0%, transparent 65%)',
                }}
              />
            )}
            <div className="relative z-10 h-full flex flex-col justify-between">
              {item.children}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MagicBento;