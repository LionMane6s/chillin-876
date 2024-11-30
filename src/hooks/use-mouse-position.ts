import { RefObject, useEffect } from 'react';

export function useMousePosition(
  ref: RefObject<HTMLElement>,
  callback: (position: { x: number; y: number }) => void
) {
  useEffect(() => {
    if (!ref.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      callback({ x, y });
    };

    const element = ref.current;
    element.addEventListener('mousemove', handleMouseMove);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref, callback]);
}