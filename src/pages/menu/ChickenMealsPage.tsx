import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { ChefHat } from 'lucide-react';

const chickenDishes = [
  {
    name: "Brown Stew Chicken",
    description: "Brown stew chicken served with white rice or rice and peas.",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£18.25" }
    ],
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&q=80"
  },
  {
    name: "Curry Chicken",
    description: "Tender chicken cooked in our special Caribbean curry sauce, served with your choice of rice",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£18.25" }
    ],
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?auto=format&fit=crop&q=80"
  },
  {
    name: "Fried Chicken",
    description: "Fried chicken served with white rice or rice and peas.",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£18.25" }
    ],
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&q=80"
  },
  {
    name: "Jerk Chicken",
    description: "Best jerk chicken in south London. Place your order now!",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£18.25" }
    ],
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80"
  },
  {
    name: "Jerked Chicken Wings",
    description: "Spicy jerked wings marinated in our special blend of seasonings",
    sizes: [
      { name: "Medium", price: "£17.15" },
      { name: "Large", price: "£15.75" }
    ],
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80"
  }
];

export function ChickenMealsPage() {
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
            
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-4">
                <ChefHat className="w-8 h-8 text-yellow-400" />
                <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                  Chicken Meals
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                All our chicken meals at Chillin 876, Mitcham are served with rice and fresh salad on our premises.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {chickenDishes.map((dish, index) => (
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