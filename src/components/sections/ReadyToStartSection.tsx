import React from 'react';

export function ReadyToStartSection() {
  return (
    <div className="bg-yellow-400 rounded-3xl p-12 text-center">
      <h2 className="text-4xl font-serif font-bold mb-6 text-gray-900">Ready to Get Started?</h2>
      <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
        Join us for an authentic Jamaican dining experience that will transport your taste buds to the Caribbean.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors">
          Reserve My Table
        </button>
        <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors">
          View Menu
        </button>
      </div>
    </div>
  );
}