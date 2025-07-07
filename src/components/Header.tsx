import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../midia/logos/hero.png'; // Adjust the path as necessary

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Quem Somos', path: '/about' },
    { name: 'Programas', path: '/programs' },
    { name: 'Doe Agora', path: '/donate' },
    { name: 'Voluntariado', path: '/volunteer' },
    { name: 'Notícias', path: '/news' },
    { name: 'Transparência', path: '/financial' },
    { name: 'Contato', path: '/contact' },
    { name: 'Galeria', path: '/gallery' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="Casa do Bom Samaritano Logo" 
              className="h-8 w-auto mr-2" 
            />
            <span className="text-xl md:text-2xl font-semibold text-blue-700">
              Casa do Bom Samaritano
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path
                    ? 'text-blue-600 underline underline-offset-4'
                    : scrolled ? 'text-gray-700' : 'text-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/donate" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Doar
            </Link>
          </div>

          <button 
            onClick={toggleMenu} 
            className="md:hidden text-gray-700 focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-medium py-2 transition-colors hover:text-blue-600 ${
                      location.pathname === item.path
                        ? 'text-blue-600'
                        : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link 
                  to="/donate" 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-center font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Doar Agora
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;