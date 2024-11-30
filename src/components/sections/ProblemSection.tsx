import React from 'react';
import { XCircle } from 'lucide-react';

const problems = [
  "Lack of Authentic and Flavourful Jamaican Cuisine",
  "Poor Customer Service and Unfriendly Staff",
  "Uncomfortable Atmosphere and Lack of Cleanliness",
  "Small Portions and Poor Value for Money"
];

export function ProblemSection() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-serif font-bold mb-8 text-gray-900 dark:text-white">The Problem</h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Many diners face common frustrations when looking for a premium dining experience.
      </p>
      <div className="space-y-4 max-w-lg mx-auto">
        {problems.map((problem, index) => (
          <div key={index} className="flex items-center space-x-3">
            <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
            <span className="text-gray-700 dark:text-gray-300 text-left">{problem}</span>
          </div>
        ))}
      </div>
    </div>
  );
}