
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-kashme-black text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kash<span className="text-kashme-green">Me</span></h3>
            <p className="text-gray-300 mb-4">Fast, secure and convenient loans for Ugandans. Get cash when you need it most with our easy-to-use mobile app.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-kashme-green">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-kashme-green">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-kashme-green">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-kashme-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-kashme-green transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-kashme-green transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-kashme-green transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/account-deletion" className="text-gray-300 hover:text-kashme-green transition-colors">Account Deletion</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-kashme-green mt-1 mr-2" />
                <span className="text-gray-300">Kampala Business Center, Floor 4, Kampala, Uganda</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-kashme-green mr-2" />
                <span className="text-gray-300">+256 700 123456</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-kashme-green mr-2" />
                <span className="text-gray-300">support@kashme.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">App Download</h4>
            <p className="text-gray-300 mb-4">Get our mobile app for the best experience:</p>
            <div className="flex flex-col space-y-3">
              <a href="#" className="border border-white rounded px-4 py-2 flex items-center hover:border-kashme-green hover:text-kashme-green transition-colors">
                <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.9 3H6.1C5.5 3 5 3.5 5 4.1v15.8c0 .6.5 1.1 1.1 1.1h11.8c.6 0 1.1-.5 1.1-1.1V4.1c0-.6-.5-1.1-1.1-1.1zm-5.9 1h1c.2 0 .3.1.3.3s-.1.3-.3.3h-1c-.2 0-.3-.1-.3-.3s.1-.3.3-.3zm-3 .9h8c.2 0 .3.1.3.3s-.1.3-.3.3h-8c-.2 0-.3-.1-.3-.3s.1-.3.3-.3zm3 16.6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"/>
                </svg>
                <span>Google Play Store</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 mt-6">
          <p className="text-center text-gray-400">© {new Date().getFullYear()} KashMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
