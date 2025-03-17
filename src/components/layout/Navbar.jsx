import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-4' : 'py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold">
            WebTech
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}>
              Home
            </Link>
            <Link to="/about" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}>
              About
            </Link>
            <Link to="/services" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}>
              Services
            </Link>
            <Link to="/contact" className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-blue-600`}>
              Contact
            </Link>
            <button className={`px-6 py-2 rounded-full font-medium transition-colors ${
              scrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white text-blue-600 hover:bg-gray-100'
            }`}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
