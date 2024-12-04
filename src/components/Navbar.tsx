import React, { useState } from 'react';
import { Moon, Sun, LogIn, X, Menu as MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useDarkModeContext } from '../contexts/DarkModeContext';

export function Navbar() {
  const { isDarkMode, setIsDarkMode } = useDarkModeContext();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-4 right-4 z-50 transition-all duration-500 mt-14">
      <div className={`max-w-6xl mx-auto ${
        isDarkMode 
          ? 'bg-black/30 backdrop-blur-sm border-gray-800/30' 
          : 'bg-white/30 border-yellow-400/20'
        } backdrop-blur-md rounded-2xl shadow-lg border transition-all duration-200`}>
        <div className="px-6 h-16 flex items-center justify-between">
          <Link to="/">
            <Logo />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/menu" className="text-yellow-600 dark:text-yellow-400/90 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors">Menu</Link>
            <Link to="/about" className="text-yellow-600 dark:text-yellow-400/90 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors">About</Link>
            <Link to="/contact" className="text-yellow-600 dark:text-yellow-400/90 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors">Contact</Link>
            <Link to="/reservations" className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors">
              Reserve My Table
            </Link>
            <button className="flex items-center space-x-2 px-4 py-2 border-2 border-yellow-400 text-yellow-600 dark:text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
              <LogIn size={18} />
              <span>Login</span>
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-yellow-400/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-yellow-600" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button className="flex items-center space-x-1 px-3 py-1.5 border-2 border-yellow-400 text-yellow-600 dark:text-yellow-400 font-semibold rounded-full hover:bg-yellow-400 hover:text-black transition-colors">
              <LogIn size={16} />
              <span>Login</span>
            </button>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-full hover:bg-yellow-400/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-yellow-600" />
              )}
            </button>
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-yellow-400/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-yellow-600 dark:text-yellow-400" />
              ) : (
                <MenuIcon size={24} className="text-yellow-600 dark:text-yellow-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-6 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/menu" 
                className="text-yellow-600 dark:text-yellow-400/90 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/about" 
                className="text-yellow-600 dark:text-yellow-400/90 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-yellow-600 dark:text-yellow-400/90 hover:text-yellow-700 dark:hover:text-yellow-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                to="/reservations" 
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reserve My Table
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}