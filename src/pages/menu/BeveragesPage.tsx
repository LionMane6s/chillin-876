import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { Coffee } from 'lucide-react';

const beverages = [
  {
    name: "Bigga Pineapple (Bottle)",
    price: "£3.30",
    description: "Bottle Drink",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80"
  },
  {
    name: "Bigga Pineapple (Can)",
    price: "£1.65",
    description: "Can Drinks 330ml",
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?auto=format&fit=crop&q=80"
  },
  {
    name: "Bottled Water",
    price: "£1.30",
    description: "500ml",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&q=80"
  },
  {
    name: "Ginger Beer",
    price: "£3.99",
    description: "Homemade spicy ginger beer",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80"
  },
  {
    name: "Rum Punch",
    price: "£6.99",
    description: "Classic Caribbean cocktail",
    image: "https://images.unsplash.com/photo-1587223075055-82e9a937ddff?auto=format&fit=crop&q=80"
  },
  {
    name: "Sorrel",
    price: "£3.99",
    description: "Traditional Jamaican hibiscus drink",
    image: "https://images.unsplash.com/photo-1544125945-62c61e47bd64?auto=format&fit=crop&q=80"
  }
];

export function BeveragesPage() {
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
              <Coffee className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Beverages
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beverages.map((drink, index) => (
                <ShinyCard key={index}>
                  <div className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={drink.image} 
                        alt={drink.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {drink.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {drink.description}
                      </p>
                      <p className="text-yellow-400 font-bold">{drink.price}</p>
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