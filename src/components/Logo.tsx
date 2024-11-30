import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

export function Logo() {
  return (
    <div className="relative flex items-center group">
      {/* Fallback icon with gradient background */}
      <div className="relative w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <UtensilsCrossed className="w-8 h-8 text-white" />
      </div>
      
      {/* Logo text with hover animation */}
      <div className="pl-4 transition-transform duration-300 ease-out group-hover:scale-110">
        <h1 className="font-serif text-2xl tracking-wider font-medium">
          <span className="text-yellow-400">Chillin</span>
          <span className="text-yellow-400 ml-1">876</span>
        </h1>
        <p className="text-[11px] tracking-[0.2em] text-yellow-400 uppercase font-medium">
          Restaurant
        </p>
      </div>
    </div>
  );
}