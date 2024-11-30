import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { AnnouncementBar } from '../components/AnnouncementBar';
import { AppBanner } from '../components/AppBanner';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ShinyCard } from '../components/ShinyCard';

export function ContactPage() {
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
              Contact Us
            </h1>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ShinyCard>
                <div className="p-8 bg-white dark:bg-gray-800">
                  <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
                    Send us a Message
                  </h2>
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </ShinyCard>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-serif font-bold mb-6 text-gray-900 dark:text-white">
                    Visit Us
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Address</p>
                        <p className="text-gray-600 dark:text-gray-300">
                          221 London Road<br />
                          Mitcham<br />
                          CR4 2JD
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Phone</p>
                        <p className="text-gray-600 dark:text-gray-300">020 7524 3555</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">Info@CaribbRestaurantSL.com</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">Opening Hours</p>
                        <div className="text-gray-600 dark:text-gray-300 space-y-1">
                          <p>Monday-Thursday: 9:30 am–10 pm</p>
                          <p>Friday: 9:30 am–11 pm</p>
                          <p>Saturday: 11 am–11 pm</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2489.3055687373177!2d-0.1689847!3d51.4067873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487605f82c4a3b33%3A0x7f1b7c4c4c4c4c4c!2s221%20London%20Rd%2C%20Mitcham%20CR4%202JD%2C%20UK!5e0!3m2!1sen!2sus!4v1625581234567!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
        <AppBanner />
      </div>
    </div>
  );
}