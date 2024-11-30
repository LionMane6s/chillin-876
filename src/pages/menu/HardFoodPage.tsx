import React, { useState } from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { Utensils, Bell } from 'lucide-react';

const hardFoodItems = [
  {
    name: "Boiled Dumplings",
    price: "£3.99",
    description: "Traditional Jamaican boiled dumplings made from flour",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&q=80"
  },
  {
    name: "Coleslaw",
    description: "Fresh, creamy coleslaw with shredded cabbage and carrots",
    image: "https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&q=80",
    unavailable: true
  },
  {
    name: "Festival Special",
    price: "£2.20",
    description: "Sweet and crispy cornmeal dumplings, a perfect side dish",
    image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80"
  },
  {
    name: "Fried Plantain",
    price: "£2.75",
    description: "Sweet ripe plantains, fried until golden brown",
    image: "https://images.unsplash.com/photo-1528751014936-863e6e7a319c?auto=format&fit=crop&q=80"
  },
  {
    name: "Fry Dumpling",
    price: "£2.20",
    description: "Traditional Jamaican fried dumplings, crispy on the outside and soft inside",
    image: "https://images.unsplash.com/photo-1511910849309-0dffb8785146?auto=format&fit=crop&q=80"
  },
  {
    name: "Macaroni and Cheese",
    description: "Creamy baked macaroni and cheese with a crispy top",
    image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?auto=format&fit=crop&q=80",
    unavailable: true
  },
  {
    name: "Steamed Vegetables",
    price: "£6.60",
    description: "Fresh seasonal vegetables steamed to perfection",
    image: "https://images.unsplash.com/photo-1580013759032-c96505e24c1f?auto=format&fit=crop&q=80"
  },
  {
    name: "Yam",
    price: "£3.99",
    description: "Boiled yellow yam, a traditional Caribbean staple",
    image: "https://images.unsplash.com/photo-1591091722434-42a4d0b0a18c?auto=format&fit=crop&q=80"
  }
];

export function HardFoodPage() {
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
              <Utensils className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Hard Food
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hardFoodItems.map((item, index) => (
                <ShinyCard key={index}>
                  <div className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className={`w-full h-full object-cover ${item.unavailable ? 'opacity-50' : ''}`}
                      />
                      {item.unavailable && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Currently Unavailable
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {item.description}
                      </p>
                      {item.unavailable ? (
                        <div>
                          {showNotificationInput === item.name ? (
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
                                  onClick={() => handleNotificationSubmit(item.name)}
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
                              onClick={() => setShowNotificationInput(item.name)}
                              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 transition-colors"
                            >
                              <Bell className="w-4 h-4" />
                              <span>Notify me when available</span>
                            </button>
                          )}
                        </div>
                      ) : (
                        <p className="text-yellow-400 font-bold">{item.price}</p>
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