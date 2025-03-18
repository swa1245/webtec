import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const menuItems = [
  {
    name: 'Solutions',
    submenu: [
      { name: 'AI & Machine Learning', href: '/solutions/ai-ml', description: 'Harness the power of artificial intelligence' },
      { name: 'Cloud Solutions', href: '/solutions/cloud', description: 'Scale your infrastructure seamlessly' },
      { name: 'Digital Transformation', href: '/solutions/digital', description: 'Modernize your business processes' },
      { name: 'Cybersecurity', href: '/solutions/security', description: 'Protect your digital assets' }
    ]
  },
  {
    name: 'Industries',
    submenu: [
      { name: 'Banking & Finance', href: '/industries/banking', description: 'Solutions for financial institutions' },
      { name: 'Healthcare', href: '/industries/healthcare', description: 'Digital health innovations' },
      { name: 'Manufacturing', href: '/industries/manufacturing', description: 'Smart factory solutions' },
      { name: 'Retail', href: '/industries/retail', description: 'Transform customer experience' }
    ]
  },
  {
    name: 'About',
    href: '/about'
  },
  {
    name: 'Careers',
    href: '/careers'
  },
  {
    name: 'Contact',
    href: '/contact'
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3'
      : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              WebTech
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
              whileHover={{ width: '100%' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveMenu(item.name)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <Link
                  to={item.href || '#'}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative group flex items-center ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-gray-100 hover:text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDownIcon 
                      className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                        activeMenu === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                    whileHover={{ width: '100%' }}
                  />
                </Link>

                {/* Dropdown Menu */}
                {item.submenu && activeMenu === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="text-sm font-medium text-gray-900">{subItem.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{subItem.description}</div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            {/* CTA Button */}
            <button 
              className={`ml-4 px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Bars3Icon className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden"
            >
              <div className="bg-white shadow-xl rounded-b-xl mt-2 py-4">
                {menuItems.map((item) => (
                  <div key={item.name} className="px-4">
                    <div
                      className="py-2 text-gray-900 font-medium cursor-pointer"
                      onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {item.submenu && (
                          <ChevronDownIcon 
                            className={`w-4 h-4 transform transition-transform duration-200 ${
                              activeMenu === item.name ? 'rotate-180' : ''
                            }`}
                          />
                        )}
                      </div>
                    </div>

                    {/* Mobile Submenu */}
                    {item.submenu && activeMenu === item.name && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="pl-4 pb-2"
                      >
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                <div className="px-4 mt-4">
                  <button className="w-full px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-colors duration-200">
                    Get Started
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
