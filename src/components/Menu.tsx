import React from 'react';

const featuredDishes = [
  {
    name: "Coq au Vin",
    price: "$32",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80"
  },
  {
    name: "Beef Wellington",
    price: "$45",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
  },
  {
    name: "Lobster Thermidor",
    price: "$52",
    image: "https://images.unsplash.com/photo-1533682805518-48d1f5b8cd3a?auto=format&fit=crop&q=80"
  }
];

export function Menu() {
  return (
    <div id="menu" className="py-20 px-4 md:px-8 bg-white dark:bg-gray-900 transition-colors duration-200">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Menu</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredDishes.map((dish, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <img 
              src={dish.image} 
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{dish.name}</h3>
              <p className="text-yellow-600 dark:text-yellow-400 font-bold mt-2">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}