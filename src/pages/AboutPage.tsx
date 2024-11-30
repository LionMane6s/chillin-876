import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { AppBanner } from '../components/AppBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { AnimatedCard } from '../components/AnimatedCard';
import { Heart, Award, Users, Clock } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-8 h-8 text-yellow-400" />,
    title: "Passion for Food",
    description: "Every dish is crafted with love and attention to detail, using authentic recipes passed down through generations."
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Quality First",
    description: "We source the finest ingredients and maintain the highest standards in food preparation and service."
  },
  {
    icon: <Users className="w-8 h-8 text-yellow-400" />,
    title: "Community Focus",
    description: "We're more than a restaurant - we're a gathering place for the community to share great food and memories."
  }
];

export function AboutPage() {
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
              Our Story
            </h1>

            <div className="grid gap-16">
              {/* Hero Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
                    A Taste of Jamaica in London
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    <p>
                      Founded in 2024, Chillin 876 brings authentic Jamaican cuisine to the heart of London. 
                      Our journey began with a simple mission: to share the rich flavors and warm hospitality 
                      of Jamaica with our community.
                    </p>
                    <p>
                      Every dish we serve carries the essence of traditional Jamaican cooking, prepared with 
                      the same care and attention to detail as generations before us. From our signature curry 
                      goat to our homestyle ackee and saltfish, each recipe tells a story of our heritage.
                    </p>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" 
                    alt="Traditional Jamaican dishes" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </section>

              {/* Values Section */}
              <section>
                <h2 className="text-3xl font-serif font-bold text-center mb-12 text-gray-900 dark:text-white">
                  Our Values
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                  {values.map((value, index) => (
                    <AnimatedCard key={index}>
                      <div className="p-8 bg-white dark:bg-gray-800 rounded-xl">
                        <div className="mb-4">{value.icon}</div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                      </div>
                    </AnimatedCard>
                  ))}
                </div>
              </section>

              {/* Team Section */}
              <section className="text-center">
                <h2 className="text-3xl font-serif font-bold mb-12 text-gray-900 dark:text-white">
                  Meet Our Team
                </h2>
                <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
                    alt="Our passionate team" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-xl font-medium">
                      Our passionate team brings together years of experience in authentic Jamaican cuisine
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>

        <Footer />
        <AppBanner />
      </div>
    </div>
  );
}