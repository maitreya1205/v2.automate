import React from 'react';
import { Car, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AutoMate</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Making campus transportation safe, reliable, and affordable for students across India.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">Vasantdada Patil Prathishthan's College of Engineering and Visual Arts, Sion - 400022</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+918108210981</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">automate.rides@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AutoMate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;