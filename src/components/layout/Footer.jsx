import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import * as FaBrands from 'react-icons/fa';
import SafeIcon from '../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiArrowUp } = FiIcons;
const { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaTiktok } = FaBrands;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751361976138-light%20logo.png" 
                alt="Silahub Technologies" 
                className="h-12 w-auto mb-4" 
              />
              <p className="text-gray-300 leading-relaxed">
                Calgary's premier digital marketing agency, specializing in helping home service businesses and contractors dominate their local markets with proven digital strategies.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-secondary" />
                <a href="tel:+18255581832" className="hover:text-secondary transition-colors">
                  (825) 558-1832
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-secondary" />
                <a href="mailto:hello@silahub.com" className="hover:text-secondary transition-colors">
                  hello@silahub.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-secondary" />
                <span>Calgary, Alberta, Canada</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/seo-calgary" className="footer-link">SEO Calgary</Link></li>
              <li><Link to="/google-ads-management" className="footer-link">Google Ads Management</Link></li>
              <li><Link to="/facebook-ads-management" className="footer-link">Facebook Ads Management</Link></li>
              <li><Link to="/social-media-management" className="footer-link">Social Media Management</Link></li>
              <li><Link to="/website-design-development" className="footer-link">Website Design & Development</Link></li>
              <li><Link to="/reputation-management" className="footer-link">Reputation Management</Link></li>
              <li><Link to="/content-marketing" className="footer-link">Content Marketing</Link></li>
              <li><Link to="/google-maps-seo" className="footer-link">Google Maps SEO</Link></li>
            </ul>
          </div>

          {/* Marketing Blueprints */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Marketing Blueprints</h3>
            <ul className="space-y-3">
              <li><Link to="/hvac-marketing-blueprint" className="footer-link">HVAC Marketing</Link></li>
              <li><Link to="/plumbing-marketing-blueprint" className="footer-link">Plumbing Marketing</Link></li>
              <li><Link to="/electrical-marketing-blueprint" className="footer-link">Electrical Marketing</Link></li>
              <li><Link to="/roofing-marketing-blueprint" className="footer-link">Roofing Marketing</Link></li>
              <li><Link to="/landscaping-marketing-blueprint" className="footer-link">Landscaping Marketing</Link></li>
              <li><Link to="/cleaning-marketing-blueprint" className="footer-link">Cleaning Service Marketing</Link></li>
              <li><Link to="/flooring-marketing-blueprint" className="footer-link">Flooring Marketing</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-secondary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing</Link></li>
              <li><Link to="/case-studies" className="footer-link">Case Studies</Link></li>
              <li><Link to="/blog" className="footer-link">Blog</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
              <li><Link to="/marketing-calculator" className="footer-link">Marketing Calculator</Link></li>
              <li><Link to="/terms-of-service" className="footer-link">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & CTA */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Social Media */}
            <div className="flex items-center space-x-6">
              <span className="text-gray-300">Follow Us:</span>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/silahubtechnologies" target="_blank" rel="noopener noreferrer" className="social-link">
                  <SafeIcon icon={FaFacebook} className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/silahubtechnologies" target="_blank" rel="noopener noreferrer" className="social-link">
                  <SafeIcon icon={FaInstagram} className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/silahubtechnologies" target="_blank" rel="noopener noreferrer" className="social-link">
                  <SafeIcon icon={FaLinkedin} className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@silahubtechnologies" target="_blank" rel="noopener noreferrer" className="social-link">
                  <SafeIcon icon={FaYoutube} className="w-5 h-5" />
                </a>
                <a href="https://x.com/silahubtech" target="_blank" rel="noopener noreferrer" className="social-link">
                  <SafeIcon icon={FaTwitter} className="w-5 h-5" />
                </a>
                <a href="https://www.tiktok.com/@silahub.technologies" target="_blank" rel="noopener noreferrer" className="social-link">
                  <SafeIcon icon={FaTiktok} className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-right">
              <p className="text-gray-300 mb-2">Ready to dominate your local market?</p>
              <Link to="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Silahub Technologies Inc. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Serving Calgary, Alberta & Beyond</span>
              <button 
                onClick={scrollToTop}
                className="bg-primary hover:bg-accent text-white p-2 rounded-full transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <SafeIcon icon={FiArrowUp} className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link {
          @apply text-gray-300 hover:text-secondary transition-colors duration-200;
        }
        .social-link {
          @apply text-gray-300 hover:text-secondary transition-all duration-200 transform hover:scale-110;
        }
      `}</style>
    </footer>
  );
};

export default Footer;