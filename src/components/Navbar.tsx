import React from 'react';
import { Moon, Sun, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
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
            <button className="p-2">
              <div className="w-6 h-0.5 bg-yellow-600 dark:bg-yellow-400 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-yellow-600 dark:bg-yellow-400 mb-1.5"></div>
              <div className="w-6 h-0.5 bg-yellow-600 dark:bg-yellow-400"></div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}