import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Clock, MapPin } from 'lucide-react';

export function AnnouncementBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Longer delay before the banner appears
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`bg-purple-600 text-white transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Main Bar */}
      <div className="relative">
        <div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-sm font-medium text-center flex-1">
            Join our VIP club to get notified for discounts, specials, and events!
          </p>
          <button className="ml-2 transition-transform duration-500 ease-out">
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      {/* Dropdown Content */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-out ${
          isOpen ? 'max-h-48' : 'max-h-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-purple-500">
          <div className="flex items-center space-x-3 text-white">
            <Clock className="w-5 h-5" />
            <div>
              <p className="font-medium">Opening Hours</p>
              <p className="text-sm opacity-90">Mon-Sat: 5:30 PM - 10:30 PM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-white">
            <MapPin className="w-5 h-5" />
            <div>
              <p className="font-medium">Location</p>
              <p className="text-sm opacity-90">123 Gourmet Street, NY 10001</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-full py-2 bg-white text-purple-600 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Book a Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}