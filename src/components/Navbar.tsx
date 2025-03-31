
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <div className="text-kashme-black font-bold text-3xl mr-2">Kash<span className="text-kashme-green">Me</span></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-kashme-black font-medium hover:text-kashme-green transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-kashme-black font-medium hover:text-kashme-green transition-colors">
              About Us
            </Link>
            <Link to="/faq" className="text-kashme-black font-medium hover:text-kashme-green transition-colors">
              FAQ
            </Link>
            <Link to="/privacy" className="text-kashme-black font-medium hover:text-kashme-green transition-colors">
              Privacy Policy
            </Link>
            <div className="flex items-center">
              <Phone size={16} className="text-kashme-green mr-2" />
              <span className="text-kashme-black font-medium">Customer Support</span>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-kashme-black p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-kashme-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-kashme-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/faq" 
                className="text-kashme-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                to="/privacy" 
                className="text-kashme-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/account-deletion" 
                className="text-kashme-black font-medium px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Account Deletion
              </Link>
              <div className="flex items-center px-2 py-1">
                <Phone size={16} className="text-kashme-green mr-2" />
                <span className="text-kashme-black font-medium">Customer Support</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
