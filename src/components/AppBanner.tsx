import React from 'react';
import { Download, X } from 'lucide-react';
import { useState } from 'react';

export function AppBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-purple-600 text-white py-1 px-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Download className="w-4 h-4" />
          <p className="text-xs font-bold">Order faster on our APP! Download now!</p>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-0.5 bg-white text-purple-600 rounded-full text-xs font-bold hover:bg-gray-100 transition-colors">
            Download
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="p-0.5 hover:bg-purple-700 rounded-full transition-colors"
            aria-label="Close banner"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}