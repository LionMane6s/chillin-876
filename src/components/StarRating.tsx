import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviews: number;
}

export function StarRating({ rating, reviews }: StarRatingProps) {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            size={16}
            className="text-yellow-400 fill-yellow-400"
          />
        ))}
      </div>
      <span className="text-gray-600 dark:text-gray-300">
        {rating.toFixed(1)} ({reviews})
      </span>
    </div>
  );
}