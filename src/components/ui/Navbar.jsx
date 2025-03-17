import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg py-4'
      : 'bg-transparent py-6'
  }`;

  const linkClasses = (isActive) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-blue-600'
        : isScrolled 
          ? 'text-gray-800 hover:text-blue-600'
          : 'text-gray-700 hover:text-blue-600'
    }`;

  const logoClasses = isScrolled
    ? 'text-gray-900'
    : 'text-gradient';

  const buttonClasses = isScrolled
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            className="flex items-center space-x-2"
          >
            <span className={`text-2xl font-bold transition-colors duration-300 ${logoClasses}`}>
              WebTech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={linkClasses(location.pathname === item.href)}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <button className={`ml-4 px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${buttonClasses}`}>
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`} />
            ) : (
              <Bars3Icon className={`h-6 w-6 ${isScrolled ? 'text-gray-800' : 'text-gray-200'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { opacity: 1, y: 0 },
                closed: { opacity: 0, y: -20 }
              }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-2xl mt-2 py-4 px-4"
            >
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`${linkClasses(location.pathname === item.href)} block`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <button className="mt-4 w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
