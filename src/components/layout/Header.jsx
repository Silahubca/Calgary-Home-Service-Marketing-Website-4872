import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const services = [
    { name: 'SEO Calgary', path: '/seo-calgary' },
    { name: 'Google Ads Management', path: '/google-ads-management' },
    { name: 'Facebook Ads Management', path: '/facebook-ads-management' },
    { name: 'Social Media Management', path: '/social-media-management' },
    { name: 'Website Design & Development', path: '/website-design-development' },
    { name: 'Reputation Management', path: '/reputation-management' },
    { name: 'Content Marketing', path: '/content-marketing' },
    { name: 'Branding Services', path: '/branding-services' },
    { name: 'Google Maps SEO', path: '/google-maps-seo' },
    { name: 'Google Local Service Ads', path: '/google-local-service-ads' }
  ];

  const blueprints = [
    { name: 'HVAC Marketing', path: '/hvac-marketing-blueprint' },
    { name: 'Plumbing Marketing', path: '/plumbing-marketing-blueprint' },
    { name: 'Electrical Marketing', path: '/electrical-marketing-blueprint' },
    { name: 'Roofing Marketing', path: '/roofing-marketing-blueprint' },
    { name: 'Landscaping Marketing', path: '/landscaping-marketing-blueprint' },
    { name: 'Cleaning Service Marketing', path: '/cleaning-marketing-blueprint' },
    { name: 'Flooring Marketing', path: '/flooring-marketing-blueprint' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiPhone} className="w-4 h-4" />
              <a href="tel:+18255581832" className="hover:text-secondary transition-colors">
                (825) 558-1832
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiMail} className="w-4 h-4" />
              <a href="mailto:hello@silahub.com" className="hover:text-secondary transition-colors">
                hello@silahub.com
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Serving Calgary, Alberta & Beyond</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751361970405-main%20logo.png" 
                alt="Silahub Technologies" 
                className="h-12 w-auto" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="nav-link flex items-center space-x-1"
                  onMouseEnter={() => setActiveDropdown('services')}
                >
                  <span>Services</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'services' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border mt-2 py-2 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blueprints Dropdown */}
              <div className="relative group">
                <button 
                  className="nav-link flex items-center space-x-1"
                  onMouseEnter={() => setActiveDropdown('blueprints')}
                >
                  <span>Marketing Blueprints</span>
                  <SafeIcon icon={FiChevronDown} className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'blueprints' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg border mt-2 py-2 z-50"
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {blueprints.map((blueprint) => (
                        <Link
                          key={blueprint.path}
                          to={blueprint.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary transition-colors"
                        >
                          {blueprint.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link to="/pricing" className="nav-link">Pricing</Link>
              <Link to="/case-studies" className="nav-link">Case Studies</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/marketing-calculator" className="btn-primary text-sm px-4 py-2">
                Free Calculator
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-primary hover:text-accent transition-colors"
            >
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="flex flex-col space-y-4">
                  <Link to="/" className="mobile-nav-link">Home</Link>
                  <Link to="/about" className="mobile-nav-link">About</Link>
                  
                  {/* Mobile Services */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('mobile-services')}
                      className="mobile-nav-link flex items-center justify-between w-full"
                    >
                      <span>Services</span>
                      <SafeIcon 
                        icon={FiChevronDown} 
                        className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'mobile-services' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Mobile Blueprints */}
                  <div>
                    <button
                      onClick={() => toggleDropdown('mobile-blueprints')}
                      className="mobile-nav-link flex items-center justify-between w-full"
                    >
                      <span>Marketing Blueprints</span>
                      <SafeIcon 
                        icon={FiChevronDown} 
                        className={`w-4 h-4 transition-transform ${activeDropdown === 'mobile-blueprints' ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'mobile-blueprints' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-2 space-y-2"
                        >
                          {blueprints.map((blueprint) => (
                            <Link
                              key={blueprint.path}
                              to={blueprint.path}
                              className="block py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                              {blueprint.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link to="/pricing" className="mobile-nav-link">Pricing</Link>
                  <Link to="/case-studies" className="mobile-nav-link">Case Studies</Link>
                  <Link to="/blog" className="mobile-nav-link">Blog</Link>
                  <Link to="/contact" className="mobile-nav-link">Contact</Link>
                  <Link to="/marketing-calculator" className="btn-primary text-center py-3 rounded-lg">
                    Free Calculator
                  </Link>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <style jsx>{`
        .nav-link {
          @apply text-gray-700 hover:text-primary font-medium transition-colors duration-200 relative;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 50%;
          background-color: #4B154B;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .mobile-nav-link {
          @apply text-gray-700 hover:text-primary font-medium transition-colors duration-200 py-2;
        }
      `}</style>
    </>
  );
};

export default Header;