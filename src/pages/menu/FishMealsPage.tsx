import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { Fish, Bell } from 'lucide-react';

const fishDishes = [
  {
    name: "Ackee and Salt Fish",
    price: "£9.90",
    description: "Jamaica's national dish - ackee and salted codfish sautéed with onions, peppers, and spices",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80"
  },
  {
    name: "Fried Fish Escovitch",
    price: "£13.20",
    description: "Fried fish topped with spicy vinegar-based sauce and vegetables",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&q=80"
  },
  {
    name: "Brown Stew Fish",
    price: "£15.99",
    description: "Fresh fish simmered in rich brown sauce with vegetables",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80"
  },
  {
    name: "Steamed Fish",
    price: "£16.99",
    description: "Whole fish steamed with okra and crackers in a light broth",
    image: "https://images.unsplash.com/photo-1511358146320-eb018ab3e22e?auto=format&fit=crop&q=80"
  },
  {
    name: "Pepper Prawns",
    price: "£13.20",
    description: "Succulent prawns cooked in a spicy pepper sauce",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&q=80"
  },
  {
    name: "Steamed Snapper",
    description: "Steamed snapper served with carrots, pumpkin, okra and Irish potatoes.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80",
    unavailable: true
  }
];

export function FishMealsPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [notificationEmail, setNotificationEmail] = useState("");
  const [showNotificationInput, setShowNotificationInput] = useState<string | null>(null);

  const handleNotificationSubmit = (dishName: string) => {
    // Here you would typically handle the email submission to your backend
    console.log(`Notification request for ${dishName}: ${notificationEmail}`);
    setNotificationEmail("");
    setShowNotificationInput(null);
  };

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
              <Fish className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Fish Meals
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fishDishes.map((dish, index) => (
                <ShinyCard key={index}>
                  <div className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className={`w-full h-full object-cover ${dish.unavailable ? 'opacity-50' : ''}`}
                      />
                      {dish.unavailable && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Currently Unavailable
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {dish.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {dish.description}
                      </p>
                      {dish.unavailable ? (
                        <div>
                          {showNotificationInput === dish.name ? (
                            <div className="space-y-2">
                              <input
                                type="email"
                                placeholder="Enter your email"
                                value={notificationEmail}
                                onChange={(e) => setNotificationEmail(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-yellow-400 dark:bg-gray-700 dark:text-white"
                              />
                              <div className="flex gap-2">
                                <button
                                  onClick={() => handleNotificationSubmit(dish.name)}
                                  className="flex-1 bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-semibold"
                                >
                                  Notify Me
                                </button>
                                <button
                                  onClick={() => setShowNotificationInput(null)}
                                  className="flex-1 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-semibold"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          ) : (
                            <button
                              onClick={() => setShowNotificationInput(dish.name)}
                              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
                            >
                              <Bell className="w-4 h-4" />
                              <span>Notify me when available</span>
                            </button>
                          )}
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