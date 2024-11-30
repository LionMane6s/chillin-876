import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { AppBanner } from '../components/AppBanner';
import { Calendar, User, Clock } from 'lucide-react';
import { ShinyCard } from '../components/ShinyCard';

const blogPosts = [
  {
    title: "The Art of Jamaican Jerk Seasoning",
    excerpt: "Discover the secrets behind our authentic jerk seasoning blend and learn about its cultural significance in Jamaican cuisine.",
    date: "March 15, 2024",
    author: "Chef Tameica",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&q=80"
  },
  {
    title: "From Jamaica to London: Our Journey",
    excerpt: "The story of how Chillin 876 brought authentic Caribbean flavors to the heart of London.",
    date: "March 10, 2024",
    author: "Tameica",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?auto=format&fit=crop&q=80"
  },
  {
    title: "The Perfect Curry Goat Recipe",
    excerpt: "Learn the traditional techniques and special ingredients that make our curry goat a customer favorite.",
    date: "March 5, 2024",
    author: "Chef Tameica",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&q=80"
  }
];

export function BlogPage() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
        <AnnouncementBar />
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-serif font-bold text-center mb-16 text-gray-900 dark:text-white">
              Our Blog
            </h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <ShinyCard key={index}>
                  <article className="bg-white dark:bg-gray-800 h-full">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <button className="text-yellow-400 font-semibold hover:text-yellow-500 transition-colors">
                        Read More →
                      </button>
                    </div>
                  </article>
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