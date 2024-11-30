import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { AnnouncementBar } from '../../components/AnnouncementBar';
import { AppBanner } from '../../components/AppBanner';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { ShinyCard } from '../../components/ShinyCard';
import { UtensilsCrossed } from 'lucide-react';

const mainCourses = [
  {
    name: "Curry Goat",
    price: "£15.99",
    description: "Tender goat meat slow-cooked in aromatic Caribbean curry sauce",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80"
  },
  {
    name: "Oxtail Stew",
    price: "£16.99",
    description: "Rich, hearty stew with butter beans and root vegetables",
    image: "https://images.unsplash.com/photo-1547424850-c2e9563da8ba?auto=format&fit=crop&q=80"
  },
  {
    name: "Jerk Chicken",
    price: "£14.99",
    description: "Grilled marinated chicken with our secret jerk seasoning",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80"
  }
];

export function MainCoursesPage() {
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
              <UtensilsCrossed className="w-8 h-8 text-yellow-400" />
              <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Main Courses
              </h1>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainCourses.map((dish, index) => (
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
                      <p className="text-yellow-400 font-bold">{dish.price}</p>
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