import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { Cookie } from 'lucide-react';

const patties = [
  {
    name: "Beef Patty",
    price: "£3.85",
    description: "Flaky pastry filled with seasoned ground beef and Jamaican spices",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80"
  },
  {
    name: "Cheesy Beef Pattie",
    price: "£3.85",
    description: "Our classic beef patty filled with melted cheese and Caribbean spices",
    image: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&q=80"
  },
  {
    name: "Chicken Patty",
    price: "£3.85",
    description: "Tender minced chicken with Caribbean herbs in a golden crust",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&q=80"
  },
  {
    name: "Vegetable Patty",
    price: "£3.85",
    description: "Mixed vegetables and spices in our signature pastry",
    image: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&q=80"
  }
];

export function JamaicanPattiesPage() {
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
              <Cookie className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Jamaican Patties
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {patties.map((patty, index) => (
                <ShinyCard key={index}>
                  <div className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={patty.image} 
                        alt={patty.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        {patty.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {patty.description}
                      </p>
                      <p className="text-yellow-400 font-bold">{patty.price}</p>
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