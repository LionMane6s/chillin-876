import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { Beef } from 'lucide-react';

const meatDishes = [
  {
    name: "Cow Foot and Beans",
    description: "Traditional Jamaican dish of tender cow foot cooked with butter beans in a rich, savory sauce",
    sizes: [
      { name: "Medium", price: "£14.95" },
      { name: "Large", price: "£17.95" }
    ],
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&q=80"
  },
  {
    name: "Curry Goat",
    description: "Goat meat cooked until tender with Jamaican curry powder, herbs and spices. Served with rice and peas or white rice.",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£20.55" }
    ],
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80"
  },
  {
    name: "Oxtail Stew",
    description: "Oxtail meat seasoned with Jamaican herbs and spices cooked until tender with butter beans and served with white rice or rice and peas.",
    sizes: [
      { name: "Medium", price: "£12.00" },
      { name: "Large", price: "£20.55" }
    ],
    image: "https://images.unsplash.com/photo-1547424850-c2e9563da8ba?auto=format&fit=crop&q=80"
  },
  {
    name: "Pepper Steak",
    description: "Pieces of steak cut thinly seasoned with Jamaican herbs and spices cooked until tender and served with white rice or rice and peas.",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£20.55" }
    ],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
  },
  {
    name: "Stew Peas - Oxtail",
    description: "Made with red kidney beans and oxtail meat, flavoured with herbs, spices and coconut milk, served with white rice.",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£20.55" }
    ],
    image: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?auto=format&fit=crop&q=80"
  }
];

export function MeatMealsPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <AnnouncementBar />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Breadcrumbs />
            </div>
            
            <div className="flex items-center gap-4 mb-8">
              <Beef className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Meat Meals
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meatDishes.map((dish, index) => (
                <ShinyCard key={index}>
                  <div className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {dish.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {dish.description}
                      </p>
                      {dish.sizes ? (
                        <div className="space-y-2">
                          {dish.sizes.map((size, sizeIndex) => (
                            <div key={sizeIndex} className="flex justify-between items-center">
                              <span className="text-gray-600 dark:text-gray-300">{size.name}</span>
                              <span className="text-yellow-400 font-bold">{size.price}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-yellow-400 font-bold">{dish.price}</p>
                      )}
                    </div>
                  </div>
                </ShinyCard>
              ))}
            </div>
          </div>
        </main>

        <Footer />
        <AppBanner />
      </div>
    </div>
  );
}