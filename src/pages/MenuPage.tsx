import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { AppBanner } from '../components/AppBanner';
import { Menu } from '../components/Menu';
import { ShinyCard } from '../components/ShinyCard';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { UtensilsCrossed, Coffee, Sandwich, Cookie, Beef, ChefHat, Fish, Soup, Utensils } from 'lucide-react';

const categories = [
  {
    title: "Jamaican Patties",
    icon: <Cookie className="w-8 h-8 text-yellow-400" />,
    description: "Flaky pastries filled with savory meats and spices",
    link: "/menu/jamaican-patties",
    image: "https://images.unsplash.com/photo-1619221882220-947b3d3c8861?auto=format&fit=crop&q=80"
  },
  {
    title: "Meat Meals",
    icon: <Beef className="w-8 h-8 text-yellow-400" />,
    description: "Succulent meat dishes prepared with Caribbean spices",
    link: "/menu/meat-meals",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80"
  },
  {
    title: "Chicken Meals",
    icon: <ChefHat className="w-8 h-8 text-yellow-400" />,
    description: "From jerk to curry, our signature chicken dishes",
    link: "/menu/chicken-meals",
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&q=80"
  },
  {
    title: "Fish Meals",
    icon: <Fish className="w-8 h-8 text-yellow-400" />,
    description: "Fresh seafood prepared with Caribbean flair",
    link: "/menu/fish-meals",
    image: "https://images.unsplash.com/photo-1535399831218-d5bd36d1a6b3?auto=format&fit=crop&q=80"
  },
  {
    title: "Soup",
    icon: <Soup className="w-8 h-8 text-yellow-400" />,
    description: "Hearty traditional Jamaican soups",
    link: "/menu/soup",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80"
  },
  {
    title: "Hard Food",
    icon: <Utensils className="w-8 h-8 text-yellow-400" />,
    description: "Traditional Caribbean staples like yam, green banana, and dumplings",
    link: "/menu/hard-food",
    image: "https://images.unsplash.com/photo-1591091722434-42a4d0b0a18c?auto=format&fit=crop&q=80"
  },
  {
    title: "Sides",
    icon: <Sandwich className="w-8 h-8 text-yellow-400" />,
    description: "Complete your meal with our traditional accompaniments",
    link: "/menu/sides",
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80"
  },
  {
    title: "Beverages",
    icon: <Coffee className="w-8 h-8 text-yellow-400" />,
    description: "Refresh yourself with our selection of authentic Caribbean drinks",
    link: "/menu/beverages",
    image: "https://images.unsplash.com/photo-1544125945-62c61e47bd64?auto=format&fit=crop&q=80"
  }
];

export function MenuPage() {
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
            
            <h1 className="text-5xl font-serif font-bold text-center mb-16 text-gray-900 dark:text-white">
              Our Menu
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Link key={index} to={category.link}>
                  <ShinyCard>
                    <div className="bg-white dark:bg-gray-800 h-full group">
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={category.image} 
                          alt={category.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white font-semibold">View Menu</span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          {category.icon}
                          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {category.title}
                          </h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-300">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </ShinyCard>
                </Link>
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