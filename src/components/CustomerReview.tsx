import React from 'react';
import { Star } from 'lucide-react';

interface CustomerReviewProps {
  text: string;
  author: string;
  rating: number;
}

export function CustomerReview({ text, author, rating }: CustomerReviewProps) {
  return (
    <div className="p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">"{text}"</p>
      <p className="text-gray-900 dark:text-white font-semibold">— {author}</p>
    </div>
  );
}