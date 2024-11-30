import React, { useCallback, useRef } from 'react';
import { useMousePosition } from '../hooks/use-mouse-position';
import { cn } from '../lib/utils';

interface ShinyCardProps {
  className?: string;
  children: React.ReactNode;
}

export function ShinyCard({ className, children }: ShinyCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const update = useCallback(({ x, y }: { x: number; y: number }) => {
    if (!overlayRef.current) return;

    const { width, height } = overlayRef.current?.getBoundingClientRect() ?? {};
    const xOffset = x - (width ?? 0) / 2;
    const yOffset = y - (height ?? 0) / 2;

    overlayRef.current?.style.setProperty('--x', `${xOffset}px`);
    overlayRef.current?.style.setProperty('--y', `${yOffset}px`);
  }, []);

  useMousePosition(containerRef, update);

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative overflow-hidden rounded-3xl p-[2px]',
        className
      )}
    >
      {/* Outer rotating border */}
      <div className="absolute inset-0 rounded-3xl animate-spin-slow">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-black to-yellow-400" />
      </div>

      {/* Inner counter-rotating border */}
      <div className="absolute inset-0 rounded-3xl animate-reverse-spin">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black via-yellow-400 to-black" />
      </div>
      
      {/* Shine effect overlay */}
      <div
        ref={overlayRef}
        className="absolute h-64 w-64 rounded-full bg-white opacity-0 mix-blend-soft-light blur-3xl transition-opacity duration-500 group-hover:opacity-30"
        style={{
          transform: 'translate(var(--x), var(--y))',
        }}
      />
      
      {/* Card content */}
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl h-full">
        {children}
      </div>
    </div>
  );
}