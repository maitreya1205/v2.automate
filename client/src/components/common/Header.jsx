import React from 'react';
import { Car, User, LogIn } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AutoMate</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            {/* <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
              <LogIn className="w-4 h-4" />
              <span className="hidden sm:block">Log In</span>
            </button> */}
            <button className="flex items-center space-x-2 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg transition-colors">
              <User className="w-4 h-4" />
              <span className="hidden sm:block">Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;