import React, { useEffect, useRef } from 'react';

const MouseDot = () => {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const position = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      position.current = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const animateDot = () => {
      if (dotRef.current) {
        const dot = dotRef.current;
        const { x, y } = position.current;
        const currentX = parseFloat(dot.style.left || '0');
        const currentY = parseFloat(dot.style.top || '0');

        const deltaX = (x - currentX) * 0.1; // suaviza a velocidade
        const deltaY = (y - currentY) * 0.1;

        dot.style.left = `${currentX + deltaX}px`;
        dot.style.top = `${currentY + deltaY}px`;
      }

      requestAnimationFrame(animateDot); // Reexecuta o loop de animação
    };

    document.addEventListener('mousemove', handleMouseMove);

    requestAnimationFrame(animateDot); // Inicia o loop de animação

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '12px',
        height: '12px',
        backgroundColor: '#DDDDDD',
        borderRadius: '50%',
        pointerEvents: 'none',
        willChange: 'transform', // Otimiza a performance para animações
        zIndex: 9999,
      }}
    />
  );
};

export default MouseDot;
