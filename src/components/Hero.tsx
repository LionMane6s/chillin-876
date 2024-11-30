import React from 'react';
import { UtensilsCrossed, Clock } from 'lucide-react';
import { StarRating } from './StarRating';

export function Hero() {
  return (
    <div className="min-h-[calc(100vh-6rem)] bg-white dark:bg-gray-900 flex items-center transition-colors duration-200 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main sun glow */}
        <div 
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] opacity-30 dark:opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(251,191,36,0) 70%)',
            filter: 'blur(60px)',
          }}
        />
        
        {/* Secondary glow */}
        <div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] opacity-20 dark:opacity-10"
          style={{
            background: 'radial-gradient(circle, rgba(251,191,36,0.4) 0%, rgba(251,191,36,0) 70%)',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Lens flares */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 dark:opacity-5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              background: 'radial-gradient(circle, rgba(251,191,36,0.3) 0%, rgba(251,191,36,0) 70%)',
              filter: 'blur(20px)',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        
        {/* Warm overlay */}
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-5"
          style={{
            background: 'linear-gradient(45deg, rgba(251,191,36,0.1), rgba(251,191,36,0.2))',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <UtensilsCrossed size={32} className="text-yellow-400" />
              <span className="text-lg font-medium text-gray-600 dark:text-gray-400">Since 2024</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-serif font-bold text-gray-900 dark:text-white leading-tight">
              Experience Fine Dining at Its Finest
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
              Indulge in an extraordinary culinary journey where every dish tells a story of passion, creativity, and excellence.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors">
                Reserve My Table
              </button>
              <button className="px-8 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-full hover:bg-gray-900 dark:hover:bg-white hover:text-white dark:hover:text-gray-900 transition-colors">
                View Menu
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <StarRating rating={5.0} reviews={35} />
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="text-yellow-400" />
                <span className="text-gray-600 dark:text-gray-300">Open Mon-Sat</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80"
              alt="Delicious Jamaican curry goat with rice and peas and fresh salad" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}