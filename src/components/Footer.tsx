import React from 'react';
import { Clock, MapPin, Phone, Mail, Globe, UtensilsCrossed, Info, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

const hours = [
  { day: 'Monday', time: '9:30 am–10 pm' },
  { day: 'Tuesday', time: '9:30 am–10 pm' },
  { day: 'Wednesday', time: '9:30 am–10 pm' },
  { day: 'Thursday', time: '9:30 am–10 pm' },
  { day: 'Friday', time: '9:30 am–11 pm' },
  { day: 'Saturday', time: '11 am–11 pm' },
  { day: 'Sunday', time: 'Closed' },
];

const restaurantLinks = [
  { name: 'About us', to: '/about' },
  { name: 'Our Menu', to: '/menu' },
  { name: 'Reserve My Table', to: '/reservations' },
  { name: 'Blog Post', to: '/blog' },
  { name: 'Contact', to: '/contact' },
];

const informationLinks = [
  { name: 'Terms & Conditions', to: '/terms' },
  { name: '24/7 Service', to: '/service' },
  { name: 'Style Guide', to: '/style' },
  { name: 'Licenses', to: '/licenses' },
  { name: 'Change Log', to: '/changelog' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1" />
              <p className="text-gray-300">
                221 London Road<br />
                Mitcham<br />
                CR4 2JD
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-yellow-400" />
              <a href="tel:02075243555" className="text-gray-300 hover:text-yellow-400 transition-colors">
                020 7524 3555
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-yellow-400" />
              <a href="mailto:Info@CaribbRestaurantSL.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                Info@CaribbRestaurantSL.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-yellow-400" />
              <a href="https://caribbrestaurantsl.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                CaribbRestaurantSL.com
              </a>
            </div>
          </div>

          {/* Restaurant Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <UtensilsCrossed className="w-5 h-5 text-yellow-400 mr-2" />
              Restaurant
            </h3>
            <ul className="space-y-4">
              {restaurantLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Info className="w-5 h-5 text-yellow-400 mr-2" />
              Information
            </h3>
            <ul className="space-y-4">
              {informationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.to}
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <Calendar className="w-5 h-5 text-yellow-400 mr-2" />
              Opening Hours
            </h3>
            <div className="space-y-2">
              {hours.map((item) => (
                <div key={item.day} className="flex justify-between text-gray-300">
                  <span>{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Chillin 876 Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}