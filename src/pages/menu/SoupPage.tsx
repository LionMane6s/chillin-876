import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { Soup } from 'lucide-react';

const soups = [
  {
    name: "Chicken Soup",
    price: "£7.70",
    description: "Hearty chicken soup with dumplings and vegetables",
    size: "Large",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80"
  },
  {
    name: "Fish Tea",
    price: "£9.99",
    description: "Light fish broth with vegetables and ground provisions",
    image: "https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&q=80"
  },
  {
    name: "Goat Meat Soup",
    price: "£7.70",
    description: "Traditional Jamaican goat soup with vegetables and dumplings",
    size: "Large",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80"
  },
  {
    name: "Red Peas Soup",
    price: "£7.70",
    description: "Traditional Jamaican soup with kidney beans, meat, and dumplings",
    size: "Large",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80"
  },
  {
    name: "Vegetable Soup",
    price: "£7.70",
    description: "Hearty vegetable soup with Caribbean seasonings",
    size: "Large",
    image: "https://images.unsplash.com/photo-1616501268209-edfff098fdd2?auto=format&fit=crop&q=80"
  }
];

export function SoupPage() {
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
              <Soup className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Soups
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {soups.map((soup, index) => (
                <ShinyCard key={index}>
                  <div className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={soup.image} 
                        alt={soup.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {soup.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {soup.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-300">
                          {soup.size || "Regular"}
                        </span>
                        <span className="text-yellow-400 font-bold">{soup.price}</span>
                      </div>
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