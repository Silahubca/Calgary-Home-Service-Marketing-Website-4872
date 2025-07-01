import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../components/common/SafeIcon';
import SEOHead from '../components/common/SEOHead';
import { useLead } from '../contexts/LeadContext';

const { FiArrowRight, FiCheck, FiStar, FiTrendingUp, FiUsers, FiAward, FiTarget, FiBarChart, FiGlobe, FiSmartphone, FiSearch, FiMegaphone } = FiIcons;

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const { createLead } = useLead();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await createLead({
        ...formData,
        source: 'Home Page Contact Form',
        type: 'General Inquiry'
      });
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
    setIsSubmitting(false);
  };

  const services = [
    {
      icon: FiSearch,
      title: 'SEO Calgary',
      description: 'Dominate local search results and attract more customers with our proven SEO strategies.',
      link: '/seo-calgary'
    },
    {
      icon: FiTarget,
      title: 'Google Ads Management',
      description: 'Get immediate results with expertly managed Google Ads campaigns that convert.',
      link: '/google-ads-management'
    },
    {
      icon: FiMegaphone,
      title: 'Facebook Ads Management',
      description: 'Reach your ideal customers on Facebook and Instagram with targeted advertising.',
      link: '/facebook-ads-management'
    },
    {
      icon: FiUsers,
      title: 'Social Media Management',
      description: 'Build your brand presence and engage customers across all social platforms.',
      link: '/social-media-management'
    },
    {
      icon: FiGlobe,
      title: 'Website Design & Development',
      description: 'Professional, mobile-responsive websites that convert visitors into customers.',
      link: '/website-design-development'
    },
    {
      icon: FiStar,
      title: 'Reputation Management',
      description: 'Protect and enhance your online reputation with proactive review management.',
      link: '/reputation-management'
    }
  ];

  const stats = [
    { number: '20+', label: 'Home Service Businesses Served' },
    { number: '150%', label: 'Average Increase in Leads' },
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '5+', label: 'Years of Experience' }
  ];

  const testimonials = [
    {
      name: 'Mike Johnson',
      company: 'STAT Climate Control Solutions',
      text: 'Silahub transformed our online presence. We went from barely getting calls to being booked solid for months ahead.',
      rating: 5
    },
    {
      name: 'Sarah Mitchell',
      company: 'Precision Craft and Design',
      text: 'Their SEO work has us ranking #1 for all our target keywords. The ROI has been incredible.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Windows West Calgary',
      text: 'Professional team, exceptional results. Our website traffic increased by 300% in just 6 months.',
      rating: 5
    }
  ];

  const blueprints = [
    {
      title: 'HVAC Marketing Blueprint',
      description: 'Dominate the heating and cooling market in Calgary',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      link: '/hvac-marketing-blueprint'
    },
    {
      title: 'Plumbing Marketing Blueprint',
      description: 'Become the go-to plumber in your service area',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      link: '/plumbing-marketing-blueprint'
    },
    {
      title: 'Electrical Marketing Blueprint',
      description: 'Power up your electrical business with proven strategies',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
      link: '/electrical-marketing-blueprint'
    }
  ];

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Silahub Technologies Inc.",
    "image": "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751361970405-main%20logo.png",
    "description": "Calgary's premier digital marketing agency specializing in home service businesses and contractors.",
    "url": "https://silahub.com",
    "telephone": "+1-825-558-1832",
    "email": "hello@silahub.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.0447,
      "longitude": -114.0719
    },
    "openingHours": "Mo-Fr 09:00-17:00",
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47"
    }
  };

  return (
    <>
      <SEOHead
        title="Calgary's Premier Digital Marketing Agency"
        description="Silahub Technologies helps home service businesses and contractors dominate their local Calgary markets with proven digital marketing strategies. SEO, Google Ads, Social Media & More."
        keywords="digital marketing Calgary, SEO Calgary, Google Ads Calgary, home service marketing, contractor marketing, Calgary marketing agency"
        canonicalUrl="/"
        schemaMarkup={schemaMarkup}
      />

      <div className="overflow-x-hidden">
        {/* Hero Section */}
        <section className="hero-bg min-h-screen flex items-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/95"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
                  Dominate Your Local Market with{' '}
                  <span className="text-secondary block">Proven Digital Strategies</span>
                </h1>
                <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                  We help home service businesses and contractors in Calgary grow their revenue by 150% or more using data-driven digital marketing strategies that actually work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="btn-secondary text-primary hover:bg-tertiary text-lg px-8 py-4">
                    Get Free Consultation
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                  </Link>
                  <Link to="/case-studies" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200 text-center">
                    View Case Studies
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-2xl border border-secondary"
              >
                <h2 className="text-2xl font-bold text-primary mb-6">Get Your Free Marketing Analysis</h2>
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <SafeIcon icon={FiCheck} className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-600 mb-2">Thank You!</h3>
                    <p className="text-gray-600">We'll contact you within 24 hours with your free marketing analysis.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="business"
                        placeholder="Business Name *"
                        value={formData.business}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your business goals..."
                        rows="3"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg disabled:opacity-50"
                    >
                      {isSubmitting ? 'Submitting...' : 'Get Free Analysis'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-tertiary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Our Digital Marketing Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive digital marketing solutions specifically designed for home service businesses and contractors in Calgary.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group card p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link to={service.link} className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-colors">
                    Learn More
                    <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-tertiary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                  Why Calgary Businesses Choose Silahub
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Home Service Specialists</h3>
                      <p className="text-gray-600">We exclusively work with home service businesses and contractors, understanding your unique challenges and opportunities.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Proven Results</h3>
                      <p className="text-gray-600">Our clients see an average increase of 150% in qualified leads within the first 6 months.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Data-Driven Approach</h3>
                      <p className="text-gray-600">Every strategy is backed by data, tested for effectiveness, and optimized for maximum ROI.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Local Market Expertise</h3>
                      <p className="text-gray-600">Deep understanding of Calgary's market dynamics and customer behavior patterns.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl" 
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-secondary">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">150%</div>
                      <div className="text-sm text-gray-600">Average Lead Increase</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marketing Blueprints Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Industry-Specific Marketing Blueprints
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get proven marketing strategies tailored specifically for your home service industry.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blueprints.map((blueprint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group card overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={blueprint.image} 
                      alt={blueprint.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">{blueprint.title}</h3>
                    <p className="text-gray-600 mb-4">{blueprint.description}</p>
                    <Link to={blueprint.link} className="inline-flex items-center text-primary font-semibold hover:opacity-80 transition-colors">
                      Get Blueprint
                      <SafeIcon icon={FiArrowRight} className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/services" className="btn-primary text-lg px-8 py-4">
                View All Blueprints
                <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-tertiary">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600">
                Don't just take our word for it - hear from successful Calgary businesses
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="testimonial-card"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section py-20 relative">
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Dominate Your Local Market?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join 20+ successful home service businesses in Calgary who trust Silahub Technologies to grow their revenue.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-secondary text-primary hover:bg-tertiary text-lg px-8 py-4">
                  Get Free Consultation
                  <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/marketing-calculator" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                  Try Our Free Calculator
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;