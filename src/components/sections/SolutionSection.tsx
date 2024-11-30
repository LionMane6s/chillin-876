import React from 'react';
import { PlayCircle } from 'lucide-react';

export function SolutionSection() {
  return (
    <div className="text-center space-y-32">
      {/* Solution Video Section */}
      <div>
        <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white">The Solution</h2>
        <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center shadow-xl mb-8">
          <PlayCircle className="w-20 h-20 text-yellow-400 cursor-pointer hover:scale-110 transition-transform" />
        </div>
        <div className="max-w-3xl mx-auto text-left space-y-6 text-gray-600 dark:text-gray-300">
          <p>Craving the true flavours of Jamaica?</p>
          <p>I'm Tameica, the founder of Chillin 876 Caribbean Restaurant, and I'm here to bring you a taste of home.</p>
          <p>My passion is recreating the dishes that my Grandma used to make—meals rich in tradition and bursting with flavour.</p>
          <p>After moving away from Jamaica, I missed the vibrant cuisine and warm hospitality that defined my upbringing.</p>
          <p>That's why I opened Chillin 876: to share that authentic experience with you.</p>
          <p>We serve generous portions of classics like curry goat, ackee and saltfish, and oxtail, all made with fresh ingredients and love.</p>
          <p>With a cosy atmosphere and a team that treats you like family, we're more than just a restaurant—we're your home away from home.</p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-4xl font-serif font-bold mb-12 text-gray-900 dark:text-white">Meet Our Team</h2>
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" 
            alt="Our passionate team of chefs and staff" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <p className="text-xl font-medium">Our passionate team of chefs and staff are dedicated to bringing you the authentic taste of Jamaica.</p>
          </div>
        </div>
      </div>
    </div>
  );
}