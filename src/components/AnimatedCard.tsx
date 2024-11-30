import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
}

export function AnimatedCard({ children }: AnimatedCardProps) {
  return (
    <div className="relative group">
      {/* Animated border background */}
      <div 
        className="absolute -inset-0.5 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"
        style={{
          background: `linear-gradient(
            45deg,
            rgba(234, 179, 8, 0.8) 0%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(234, 179, 8, 0.8) 100%
          )`,
          backgroundSize: '200% 200%'
        }}
      />
      
      {/* Card content */}
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
}