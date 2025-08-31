import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Code, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-800 via-blue-900 to-slate-800 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold">Hamza Virk</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Passionate Web Developer specializing in Magento 2, Laravel, and WordPress 
              with a focus on delivering clean, scalable solutions.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="h-4 w-4" />
              <span>Lahore Sadar Cantt, Pakistan</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-3">
              <a 
                href="mailto:virkhamza688@gmail.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>virkhamza688@gmail.com</span>
              </a>
              <a 
                href="tel:+923216049708"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
              >
                <Phone className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>+92 321 604 9708</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/hamza-virk-4b5658351/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
              >
                <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Company</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4 text-blue-400" />
                <span className="font-medium">AsquareTec</span>
              </div>
              <a 
                href="mailto:info@asquaretec.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-300 transition-colors duration-300 group"
              >
                <Mail className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span>info@asquaretec.com</span>
              </a>
            </div>
            <div className="mt-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=400" 
                alt="AsquareTec Office"
                className="w-full h-24 object-cover rounded-md"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Hamza Virk. All rights reserved. | Professional Web Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;